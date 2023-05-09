package com.example.aquarium_be.dto;

import com.example.aquarium_be.model.Accounts;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

public class OrderProductDto {
    private Long id;
    private double total;
    private String dateOrder;
    private Accounts accounts;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(String dateOrder) {
        this.dateOrder = dateOrder;
    }

    public Accounts getAccounts() {
        return accounts;
    }

    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }
}
