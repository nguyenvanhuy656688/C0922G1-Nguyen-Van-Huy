package com.example.connect_backend_spring.repository;

import com.example.connect_backend_spring.model.DiemDen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IDiemDenRepository extends JpaRepository<DiemDen,Integer> {
    @Query(value = "select * from diem_den", nativeQuery = true)
    List<DiemDen> getAll();
}
