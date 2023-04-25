package com.example.aquarium_be.controller;

import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.service.IAquaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
    private IAquaProductService aquaProductService;


    @GetMapping("/listFish")
    public ResponseEntity<List<AquaProduct>> getListFish(@RequestParam("page") int page
                                                           , @RequestParam("size") int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<AquaProduct> listFish = aquaProductService.getListFish(pageable);
        if (listFish.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFish, HttpStatus.OK);
    }

    @GetMapping("/listAquatic")
    public ResponseEntity<List<AquaProduct>> getListAquatic(@RequestParam("page1") int page1
            , @RequestParam("size1") int size1) {
        Pageable pageable = PageRequest.of(page1, size1);
        List<AquaProduct> listAquatic = aquaProductService.getListAquatic(pageable);
        if (listAquatic.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listAquatic, HttpStatus.OK);
    }

    @GetMapping("/listFood")
    public ResponseEntity<List<AquaProduct>> getListFood(@RequestParam("page2") int page2
            , @RequestParam("size2") int size2) {
        Pageable pageable = PageRequest.of(page2, size2);
        List<AquaProduct> listFood = aquaProductService.getListFood(pageable);
        if (listFood.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFood, HttpStatus.OK);
    }


}
