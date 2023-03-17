package com.example.connect_backend_spring.service;

import com.example.connect_backend_spring.model.LoaiXe;
import com.example.connect_backend_spring.repository.ILoaiXeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiXeService implements ILoaiXeService{
    @Autowired
    private ILoaiXeRepository iLoaiXeRepository;

    @Override
    public List<LoaiXe> getAll() {
        return iLoaiXeRepository.getAll();
    }
}
