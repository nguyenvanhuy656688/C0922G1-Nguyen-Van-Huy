package com.example.be.service;

import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;
import com.example.be.repository.IInfoLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InfoLocationService implements IInfoLocationService{
    @Autowired
    private IInfoLocationRepository iInfoLocationRepository;

    @Override
    public List<InfoLocation> findAll() {
        return iInfoLocationRepository.findAll();
    }

    @Override
    public void deleteById(int id) {
        iInfoLocationRepository.deleteById(id);
    }

    @Override
    public void save(String name, String openDate, String address, Integer positionAndEmployee) {
         iInfoLocationRepository.create(name,openDate,address,positionAndEmployee);
    }


}
