package com.example.aquarium_be.service;

import com.example.aquarium_be.model.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    void addBillHistory(OrderDetail billHistory);

    List<OrderDetail> findAll();

    List<OrderDetail> findById(Long id);
}
