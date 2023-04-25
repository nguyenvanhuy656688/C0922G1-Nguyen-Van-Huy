package com.example.aquarium_be.controller;


import com.example.aquarium_be.jwt.JwtFilter;
import com.example.aquarium_be.jwt.JwtUtility;
import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.ResetPasswordRequest;
import com.example.aquarium_be.payload.request.LoginRequest;
import com.example.aquarium_be.payload.response.JwtResponse;
import com.example.aquarium_be.service.IAccountService;
import com.example.aquarium_be.service.impl.AccountDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/public")
@CrossOrigin("*")
public class SecurityController {

    @Autowired
    private JwtUtility jwtUtility;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IAccountService accountService;

    /**
     * Created by: HuyNV
     * Date created: 21/04/2023
     * Function:  authenticate user
     * @param: loginRequest
     * @return: HttpStatus.No_Content if result is error or HttpStatus.OK is result is not error
     */

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody @Valid LoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtility.generateJwtToken(loginRequest.getUsername());
        AccountDetails userDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(
                new JwtResponse(
                        jwt,
                        userDetails.getUsername(),
                        userDetails.getNameUser(),
                        roles)
        );
    }


    /**
     * Created by: HoangNM
     * Date created: 29/03/2023
     * Function: change password
     */
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest, BindingResult bindingResult,
                                            HttpServletRequest httpServletRequest) {
        String token = JwtFilter.parseJwt(httpServletRequest);
        String username = jwtUtility.getUserNameFromJwtToken(token);
        Accounts account = accountService.findAccountByEmployeeEmail(username);
        if (account == null) {
            bindingResult.rejectValue("findAccount","findAccount","Tài khoản email không hợp lệ!");
        }
        assert account != null;
        boolean checkPassword = accountService.checkPassword(resetPasswordRequest.getPassword(),account.getPassword());
        boolean checkNewPassword = Objects.equals(resetPasswordRequest.getNewPassword(), resetPasswordRequest.getConfirmNewPassword());
        if (!checkPassword) {
            bindingResult.rejectValue("password","password","Mật khẩu không đúng!");
        }
        if(!checkNewPassword){
            bindingResult.rejectValue("confirmNewPassword","confirmNewPasswordError","Mật khẩu xác nhận phải giống mật khẩu mới.");
        }
        new ResetPasswordRequest().validate(resetPasswordRequest,bindingResult);
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }else {
            accountService.saveNewPassword(resetPasswordRequest.getNewPassword(),account.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }


}
