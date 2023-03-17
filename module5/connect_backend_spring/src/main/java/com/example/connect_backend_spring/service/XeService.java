package com.example.connect_backend_spring.service;

import com.example.connect_backend_spring.model.DiemDen;
import com.example.connect_backend_spring.model.LoaiXe;
import com.example.connect_backend_spring.model.Xe;
import com.example.connect_backend_spring.repository.IXeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class XeService implements IXeService{
    @Autowired
    private IXeRepository iXeRepository;

    @Override
    public Page<Xe> showList(Pageable pageable) {
        return iXeRepository.getAll(pageable);
    }

    @Override
    public void them(Xe xe) {
        iXeRepository.themXe(xe);
    }

    @Override
    public void xoaTheoid(int id) {
        iXeRepository.xoaTheoId(id);
    }

    @Override
    public void timTheoId(int id) {
        iXeRepository.timTheoId(id);
    }

    @Override
    public void sua(int id, Xe xe) {
        iXeRepository.sua(id,xe);
    }

}
