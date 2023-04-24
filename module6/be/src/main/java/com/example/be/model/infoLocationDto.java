package com.example.be.model;

import com.example.be.model.PositionAndEmployee;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class infoLocationDto implements Validator {

    @NotBlank(message = "Không được để trống")
    private String name;
    @NotBlank(message = "Không được để trống")
    private String openDate;
    @NotBlank(message = "Không được để trống")
    private String address;
    @NotNull(message = "Không được để trống")
    private PositionAndEmployee positionAndEmployee;

    public infoLocationDto() {
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOpenDate() {
        return openDate;
    }

    public void setOpenDate(String openDate) {
        this.openDate = openDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public PositionAndEmployee getPositionAndEmployee() {
        return positionAndEmployee;
    }

    public void setPositionAndEmployee(PositionAndEmployee positionAndEmployee) {
        this.positionAndEmployee = positionAndEmployee;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
