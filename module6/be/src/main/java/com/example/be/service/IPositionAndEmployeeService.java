package com.example.be.service;

import com.example.be.dto.IInfoLocationDto;
import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;

import java.util.List;

public interface IPositionAndEmployeeService {
    List<PositionAndEmployee> findAll();

    List<IInfoLocationDto> getListInfoByName(String name);

    List<IInfoLocationDto> getListInfoByNameAndManager(String name, int managerSearch);
}
