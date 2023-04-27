package com.example.aquarium_be.repository;

import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.model.AccompanyingImage;
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

    @Query(value = "select * from aqua_product where aqua_product.id =:id",nativeQuery = true)
    AquaProduct findProductDetailById(@Param("id") int id);


    @Query(value = "select accompanying_image.name as name,accompanying_image.image as image from accompanying_image where accompanying_image.aqua_product_id =:id",nativeQuery = true)
    List<IAccompanyingImage> getAccompanyingImageList(@Param("id") int id);
}
