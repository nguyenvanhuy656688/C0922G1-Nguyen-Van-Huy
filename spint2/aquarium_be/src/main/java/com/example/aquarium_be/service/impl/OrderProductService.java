package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import com.example.aquarium_be.repository.IOrderProductRepository;
import com.example.aquarium_be.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderProductService implements IOrderProductService {
    @Autowired
    private IOrderProductRepository iOrderProductRepository;


    @Override
    public void addBill(OrderProduct bill) {

    }

    @Override
    public void addBillHistory(OrderDetail billHistory) {

    }
}
