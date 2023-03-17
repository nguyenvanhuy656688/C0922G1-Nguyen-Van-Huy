package com.example.connect_backend_spring.service;

import com.example.connect_backend_spring.model.DiemDen;
import com.example.connect_backend_spring.repository.IDiemDenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDenService implements IDiemDenService{
    @Autowired
    private IDiemDenRepository iDiemDenRepository;

    @Override
    public List<DiemDen> getAll() {
        return iDiemDenRepository.getAll();
    }
}
