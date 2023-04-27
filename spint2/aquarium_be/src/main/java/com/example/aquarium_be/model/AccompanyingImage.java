package com.example.aquarium_be.model;

import javax.persistence.*;

@Entity
public class AccompanyingImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    @ManyToOne
    private AquaProduct aquaProduct;

    public AccompanyingImage() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public AquaProduct getAquaProduct() {
        return aquaProduct;
    }

    public void setAquaProduct(AquaProduct aquaProduct) {
        this.aquaProduct = aquaProduct;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
