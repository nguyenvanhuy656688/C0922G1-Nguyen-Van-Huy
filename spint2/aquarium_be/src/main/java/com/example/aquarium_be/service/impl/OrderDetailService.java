package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.repository.IOrderDetailRepository;
import com.example.aquarium_be.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;

    @Override
    public void addBillHistory(OrderDetail billHistory) {
        iOrderDetailRepository.save(billHistory);
    }

    @Override
    public List<OrderDetail> findAll() {
        return iOrderDetailRepository.findAll();
    }

    @Override
    public List<OrderDetail> findById(Long id) {
        return iOrderDetailRepository.findListById(id);
    }
}
