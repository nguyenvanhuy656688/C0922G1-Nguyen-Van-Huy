package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Long> {

    @Query( value = "select * from order_detail where order_detail.order_product_id =:id", nativeQuery = true)
    List<OrderDetail> findListById(@Param("id") Long id);
}
