package com.example.aquarium_be.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class OrderDetail implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int amount;
    private String size;
    private double total;
    @ManyToOne
    private OrderProduct orderProduct;
    @ManyToOne
    private AquaProduct aquaProduct;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public OrderProduct getOrderProduct() {
        return orderProduct;
    }

    public void setOrderProduct(OrderProduct orderProduct) {
        this.orderProduct = orderProduct;
    }

    public AquaProduct getAquaProduct() {
        return aquaProduct;
    }

    public void setAquaProduct(AquaProduct aquaProduct) {
        this.aquaProduct = aquaProduct;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}

