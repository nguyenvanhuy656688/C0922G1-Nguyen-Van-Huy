package com.example.connect_backend_spring.repository;

import com.example.connect_backend_spring.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface IXeRepository extends JpaRepository<Xe, Integer> {
    @Query(value = "select * from xe", nativeQuery = true)
    Page<Xe> getAll(Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "insert into xe value xe", nativeQuery = true)
    void themXe(Xe xe);

    @Modifying
    @Transactional
    @Query(value = "delete from xe where id = :id", nativeQuery = true)
    void xoaTheoId(int id);


    @Modifying
    @Transactional
    @Query(value = "select * from xe where id = :id", nativeQuery = true)
    void timTheoId(int id);

    @Modifying
    @Transactional
    @Query(value = "update xe set xe where id = :id", nativeQuery = true)
    void sua(int id, Xe xe);
}
