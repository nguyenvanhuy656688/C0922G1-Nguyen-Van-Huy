package com.example.connect_backend_spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class DiemDen {
    @Id
    private int id;
    private String ten;

    public DiemDen() {
    }

    public DiemDen(int id, String ten) {
        this.id = id;
        this.ten = ten;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }
}
