package com.example.aquarium_be.model;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int amount;
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


}

