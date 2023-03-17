package com.example.connect_backend_spring.repository;

import com.example.connect_backend_spring.model.LoaiXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILoaiXeRepository extends JpaRepository<LoaiXe,Integer> {
    @Query(value = "select * from loai_xe", nativeQuery = true)
    List<LoaiXe> getAll();
}
