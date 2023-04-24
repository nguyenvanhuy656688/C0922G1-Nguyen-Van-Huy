package com.example.be.model;

import org.springframework.validation.BindingResult;

import javax.persistence.*;

@Entity
public class InfoLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String openDate;
    private String address;
    @ManyToOne
    private PositionAndEmployee positionAndEmployee;


    public InfoLocation() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public void validate(InfoLocation infoLocationDto, BindingResult bindingResult) {
    }
}
