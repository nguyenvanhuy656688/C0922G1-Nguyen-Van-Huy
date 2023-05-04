package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.AquaType;
import com.example.aquarium_be.repository.IAquaTypeRepository;
import com.example.aquarium_be.service.IAquaProductService;
import com.example.aquarium_be.service.IAquaTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AquaTypeService  implements IAquaTypeService {
    @Autowired
    private IAquaTypeRepository iAquaTypeRepository;

    @Override
    public List<AquaType> findAquaType() {
        return iAquaTypeRepository.findAll();
    }
}
