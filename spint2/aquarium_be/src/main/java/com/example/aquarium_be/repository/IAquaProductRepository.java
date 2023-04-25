package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.AquaProduct;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAquaProductRepository extends JpaRepository<AquaProduct, Long> {

    @Query( value = "select * from aqua_product where aqua_product.aqua_type_id = 1", nativeQuery = true)
    List<AquaProduct> getListFish(Pageable pageable);

    @Query( value = "select * from aqua_product where aqua_product.aqua_type_id = 2", nativeQuery = true)
    List<AquaProduct> getListAquatic(Pageable pageable);

    @Query( value = "select * from aqua_product where aqua_product.aqua_type_id = 3", nativeQuery = true)
    List<AquaProduct> getListFood(Pageable pageable);
}
