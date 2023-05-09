package com.example.aquarium_be.service;

import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;

public interface IOrderProductService {
    void addBill(OrderProduct bill);

    void addBillHistory(OrderDetail billHistory);
}
