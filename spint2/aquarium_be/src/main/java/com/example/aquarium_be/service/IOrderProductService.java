package com.example.aquarium_be.service;

import com.example.aquarium_be.dto.IOrderProductDto;
import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderProductService {
    void addBill(OrderProduct bill);


    Page<OrderProduct> findAll(Pageable pageable);

    Page<IOrderProductDto> findAllIOrderProductDto(Long id, Pageable pageable);
}
