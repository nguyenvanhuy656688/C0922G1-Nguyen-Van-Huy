package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.dto.IOrderProductDto;
import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import com.example.aquarium_be.repository.IOrderProductRepository;
import com.example.aquarium_be.service.IOrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderProductService implements IOrderProductService {
    @Autowired
    private IOrderProductRepository iOrderProductRepository;


    @Override
    public void addBill(OrderProduct bill) {
        iOrderProductRepository.save(bill);

    }

    @Override
    public Page<OrderProduct> findAll(Pageable pageable) {
        return iOrderProductRepository.findAll(pageable);
    }

    @Override
    public Page<IOrderProductDto> findAllIOrderProductDto(Long id, Pageable pageable) {
        return iOrderProductRepository.findAllIOrderProductDto(id, pageable);
    }


}
