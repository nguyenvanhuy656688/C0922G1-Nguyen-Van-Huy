package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.AquaProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAquaProductRepository extends JpaRepository<AquaProduct, Long> {
}
