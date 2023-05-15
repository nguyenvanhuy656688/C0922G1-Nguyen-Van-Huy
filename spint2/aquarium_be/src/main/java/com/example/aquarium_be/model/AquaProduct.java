package com.example.aquarium_be.model;

import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
public class AquaProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 250, nullable = false, unique = true)
    private String image;
    @Column(length = 45, nullable = false, unique = true)
    private String name;
    private double price;
    @Column(length = 500, nullable = false, unique = true)
    private String description;
    @Column(columnDefinition = "date", nullable = false)
    private String dateSubmit;
    private int quantity;
    @ManyToOne
    AquaType aquaType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDateSubmit() {
        return dateSubmit;
    }

    public void setDateSubmit(String dateSubmit) {
        this.dateSubmit = dateSubmit;
    }

    public AquaType getAquaType() {
        return aquaType;
    }

    public void setAquaType(AquaType aquaType) {
        this.aquaType = aquaType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
