package com.example.aquarium_be.service;

import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.model.AccompanyingImage;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.model.AquaType;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAquaProductService {
    List<AquaProduct> getListFish(Pageable pageable);

    List<AquaProduct> getListAquatic(Pageable pageable);

    List<AquaProduct> getListFood(Pageable pageable);

    AquaProduct findProductDetailById(int id);

    List<IAccompanyingImage> accompanyingImageList(int id);

    List<AquaProduct> getListSearchResults(String keyword, Pageable pageable);

    List<AquaProduct> getListSearchResultsOption(String keyword, int id, Pageable pageable);

    AquaProduct findAquaProduct(Long aquaProduct);

    List<AquaProduct> findAll();

    void updateAquaProduct(AquaProduct aquaProduct);
}
