package com.example.connect_backend_spring.service;


import com.example.connect_backend_spring.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IXeService {
    Page<Xe> showList(Pageable pageable);

    void them(Xe xe);

    void xoaTheoid(int id);

    void timTheoId(int id);

    void sua(int id, Xe xe);
}
