package com.example.aquarium_be.model;

import org.apache.catalina.User;

import javax.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;
    private String size;
    @ManyToOne
    private Accounts accounts;
    @ManyToOne
    private AquaProduct aquaProduct;

    public Cart() {
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

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Accounts getAccounts() {
        return accounts;
    }

    public void setAccounts(Accounts accounts) {
        this.accounts = accounts;
    }

    public AquaProduct getAquaProduct() {
        return aquaProduct;
    }

    public void setAquaProduct(AquaProduct aquaProduct) {
        this.aquaProduct = aquaProduct;
    }

}
