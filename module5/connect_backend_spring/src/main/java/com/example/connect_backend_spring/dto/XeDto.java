package com.example.connect_backend_spring.dto;

import com.example.connect_backend_spring.model.DiemDen;
import com.example.connect_backend_spring.model.LoaiXe;

import javax.persistence.*;

@Entity
public class XeDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String soXe;
    @ManyToOne
    private LoaiXe loaiXe;
    private String tenNhaXe;
    private String diemDi;
    @ManyToOne
    private DiemDen diemDen;
    private String soDienThoai;
    private String email;
    private String gioDi;
    private String gioDen;

    public XeDto() {
    }

    public XeDto(int id, String soXe, LoaiXe loaiXe, String tenNhaXe, String diemDi, DiemDen diemDen, String soDienThoai,
              String email, String gioDi, String gioDen) {
        this.id = id;
        this.soXe = soXe;
        this.loaiXe = loaiXe;
        this.tenNhaXe = tenNhaXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSoXe() {
        return soXe;
    }

    public void setSoXe(String soXe) {
        this.soXe = soXe;
    }

    public LoaiXe getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(LoaiXe loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public DiemDen getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(DiemDen diemDen) {
        this.diemDen = diemDen;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }
}
