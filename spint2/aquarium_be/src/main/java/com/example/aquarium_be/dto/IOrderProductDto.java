package com.example.aquarium_be.dto;

import com.example.aquarium_be.model.Accounts;

public interface IOrderProductDto {
    Long getId();
    String getDateOrder();
    double getTotal();
    String getCode();
    Long getAccountsId();
}
