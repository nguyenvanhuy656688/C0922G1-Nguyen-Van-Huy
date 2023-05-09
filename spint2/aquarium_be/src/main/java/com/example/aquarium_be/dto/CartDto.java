package com.example.aquarium_be.dto;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.AquaProduct;

import javax.persistence.ManyToOne;

public class CartDto {
    private Long id;
    private int quantity;
    private Double total;
    private String size;
    private Long accounts;
    private Long aquaProduct;

    public CartDto() {
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Long getAccounts() {
        return accounts;
    }

    public void setAccounts(Long accounts) {
        this.accounts = accounts;
    }

    public Long getAquaProduct() {
        return aquaProduct;
    }

    public void setAquaProduct(Long aquaProduct) {
        this.aquaProduct = aquaProduct;
    }
}
