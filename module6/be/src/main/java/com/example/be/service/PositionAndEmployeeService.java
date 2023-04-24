package com.example.be.service;

import com.example.be.dto.IInfoLocationDto;
import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;
import com.example.be.repository.IPositionAndEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionAndEmployeeService implements IPositionAndEmployeeService{
    @Autowired
    private IPositionAndEmployeeRepository iPositionAndEmployeeRepository;

    @Override
    public List<PositionAndEmployee> findAll() {
        return iPositionAndEmployeeRepository.findAll();
    }

    @Override
    public List<IInfoLocationDto> getListInfoByName(String name) {
        return iPositionAndEmployeeRepository.getListByName(name);
    }

    @Override
    public List<IInfoLocationDto> getListInfoByNameAndManager(String name, int id) {
        return iPositionAndEmployeeRepository.getListByNameAndManager(name,id);
    }
}
