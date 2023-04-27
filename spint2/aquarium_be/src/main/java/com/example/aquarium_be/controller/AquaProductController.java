package com.example.aquarium_be.controller;

import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.model.AccompanyingImage;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.service.IAquaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/public")
@CrossOrigin("*")
public class AquaProductController {
    @Autowired
    private IAquaProductService iAquaProductService;


    @GetMapping("/listFish")
    public ResponseEntity<List<AquaProduct>> getListFish(@RequestParam("page") int page
                                                           , @RequestParam("size") int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<AquaProduct> listFish = iAquaProductService.getListFish(pageable);
        if (listFish.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFish, HttpStatus.OK);
    }

    @GetMapping("/listAquatic")
    public ResponseEntity<List<AquaProduct>> getListAquatic(@RequestParam("page1") int page1
            , @RequestParam("size1") int size1) {
        Pageable pageable = PageRequest.of(page1, size1);
        List<AquaProduct> listAquatic = iAquaProductService.getListAquatic(pageable);
        if (listAquatic.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listAquatic, HttpStatus.OK);
    }

    @GetMapping("/listFood")
    public ResponseEntity<List<AquaProduct>> getListFood(@RequestParam("page2") int page2
            , @RequestParam("size2") int size2) {
        Pageable pageable = PageRequest.of(page2, size2);
        List<AquaProduct> listFood = iAquaProductService.getListFood(pageable);
        if (listFood.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFood, HttpStatus.OK);
    }

    @GetMapping("findProductById/{id}")
    public ResponseEntity<AquaProduct> detailTicket(@PathVariable("id") int id) {
        AquaProduct aquaProduct = iAquaProductService.findProductDetailById(id);
        if (aquaProduct == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(aquaProduct, HttpStatus.OK);
        }
    }

    @GetMapping("/accompanyingImageListById/{id}")
    public ResponseEntity<List<IAccompanyingImage>> getAccompanyingImageList(@PathVariable("id") int id) {
        List<IAccompanyingImage> accompanyingImageList = iAquaProductService.accompanyingImageList(id);
        if (accompanyingImageList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(accompanyingImageList, HttpStatus.OK);
    }




}
