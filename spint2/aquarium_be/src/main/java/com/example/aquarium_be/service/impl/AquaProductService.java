package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.model.AccompanyingImage;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.model.AquaType;
import com.example.aquarium_be.repository.IAquaProductRepository;
import com.example.aquarium_be.service.IAquaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AquaProductService implements IAquaProductService {
    @Autowired
    private IAquaProductRepository iAquaProductRepository;


    @Override
    public List<AquaProduct> getListFish(Pageable pageable) {
        return iAquaProductRepository.getListFish(pageable);
    }

    @Override
    public List<AquaProduct> getListAquatic(Pageable pageable) {
        return iAquaProductRepository.getListAquatic(pageable);
    }

    @Override
    public List<AquaProduct> getListFood(Pageable pageable) {
        return iAquaProductRepository.getListFood(pageable);
    }

    @Override
    public AquaProduct findProductDetailById(int id) {
        return iAquaProductRepository.findProductDetailById(id);
    }

    @Override
    public List<IAccompanyingImage> accompanyingImageList(int id) {
        return iAquaProductRepository.getAccompanyingImageList(id);
    }

    @Override
    public List<AquaProduct> getListSearchResults(String keyword, Pageable pageable) {
        return iAquaProductRepository.getListSearchResults(keyword,pageable);
    }

    @Override
    public List<AquaProduct> getListSearchResultsOption(String keyword, int id, Pageable pageable) {
        return iAquaProductRepository.getListSearchResultsOption(keyword,id,pageable);
    }

    @Override
    public AquaProduct findAquaProduct(Long aquaProduct) {
        return iAquaProductRepository.findById(aquaProduct).orElse(null);
    }

    @Override
    public List<AquaProduct> findAll() {
        return iAquaProductRepository.findAll();
    }

    @Override
    public void updateAquaProduct(AquaProduct aquaProduct) {
        iAquaProductRepository.save(aquaProduct);
    }

}
