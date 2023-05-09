package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderProductRepository extends JpaRepository<OrderProduct,Long> {


}
