package com.example.be.service;

import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;

import java.util.List;

public interface IInfoLocationService {
    List<InfoLocation> findAll();

    void deleteById(int id);


    void save(String name, String openDate, String address, Integer positionAndEmployee);
}
