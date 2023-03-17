package com.example.connect_backend_spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class LoaiXe {
    @Id
    private int id;
    private String ten;

    public LoaiXe() {
    }

    public LoaiXe(int id, String ten) {
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
