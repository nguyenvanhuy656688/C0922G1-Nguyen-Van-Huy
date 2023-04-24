package com.example.be.controller;

import com.example.be.dto.IInfoLocationDto;
import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;
import com.example.be.model.infoLocationDto;
import com.example.be.service.IInfoLocationService;
import com.example.be.service.IPositionAndEmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@CrossOrigin("*")
public class InfoLocationController {
    @Autowired
    private IInfoLocationService iInfoLocationService;
    @Autowired
    private IPositionAndEmployeeService iPositionAndEmployeeService;

    @GetMapping("/list")
    public ResponseEntity<List<InfoLocation>> getList() {
        List<InfoLocation> infoLocationList = iInfoLocationService.findAll();
        if (infoLocationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(infoLocationList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<InfoLocation> createTicket(@Validated @RequestBody infoLocationDto infoLocationDto, BindingResult bindingResult) {
        new infoLocationDto().validate(infoLocationDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        InfoLocation infoLocation = new InfoLocation();
        BeanUtils.copyProperties(infoLocationDto, infoLocation);
        iInfoLocationService.save(infoLocation.getName(),infoLocation.getOpenDate(),infoLocation.getAddress(),infoLocation.getPositionAndEmployee().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping("/employeeList")
    public ResponseEntity<List<PositionAndEmployee>> getListEmployee() {
        List<PositionAndEmployee> positionAndEmployeeList = iPositionAndEmployeeService.findAll();
        if (positionAndEmployeeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(positionAndEmployeeList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<InfoLocation> deleteInfoById(@PathVariable("id") int id) {
        iInfoLocationService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/listSearchByName")
    public ResponseEntity<List<IInfoLocationDto>> getListByName(@RequestParam(defaultValue = "") String name) {
        List<IInfoLocationDto> listInfoByName = iPositionAndEmployeeService.getListInfoByName(name);
        if (listInfoByName.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listInfoByName, HttpStatus.OK);
    }

    @GetMapping("/listSearchByNameAndManager")
    public ResponseEntity<List<IInfoLocationDto>> getListByNameAndManager(@RequestParam(defaultValue = "") String name ,
                                                                          @RequestParam(defaultValue = "") int id) {
        List<IInfoLocationDto> listInfoByName = iPositionAndEmployeeService.getListInfoByNameAndManager(name,id);
        if (listInfoByName.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listInfoByName, HttpStatus.OK);
    }
}
