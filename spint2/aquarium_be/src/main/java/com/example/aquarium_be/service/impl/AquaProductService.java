package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.model.AccompanyingImage;
import com.example.aquarium_be.model.AquaProduct;
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
}
