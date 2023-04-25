package com.example.aquarium_be.model;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.Objects;

public class ResetPasswordRequest implements Validator {
    private String username;
    private String password;
    private String newPassword;
    private String confirmNewPassword;

    public ResetPasswordRequest() {
    }

    public ResetPasswordRequest(String username, String password, String newPassword, String confirmNewPassword) {
        this.username = username;
        this.password = password;
        this.newPassword = newPassword;
        this.confirmNewPassword = confirmNewPassword;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getConfirmNewPassword() {
        return confirmNewPassword;
    }

    public void setConfirmNewPassword(String confirmNewPassword) {
        this.confirmNewPassword = confirmNewPassword;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
//        ResetPasswordRequest resetPasswordRequest = (ResetPasswordRequest) target;
//        if(!Objects.equals(resetPasswordRequest.getNewPassword(), resetPasswordRequest.getConfirmNewPassword())){
//            errors.rejectValue("confirmNewPassword","confirmNewPasswordError","Mật khẩu xác nhận phải giống mật khẩu mới.");
//        };
    }
}
