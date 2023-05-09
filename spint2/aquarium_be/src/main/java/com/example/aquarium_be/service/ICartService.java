package com.example.aquarium_be.service;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.model.Cart;

import java.util.List;

public interface ICartService {

    boolean checkCart(AquaProduct aquaProduct, Accounts accounts, String size);

    Cart findByFoodIdAndUserId(AquaProduct id, Accounts id1, String size);

    void createCart(Cart cart1);

    void deleteCartByIdUser(Accounts accounts);

    List<Cart> findAllByUser(Accounts byId);

    List<Cart> findAll(Long id);

    void updateSize(Long id, String size);

    Cart findCart(Long id);

    void deleteCart(Long id);

    Cart findByAquaProductIdAndUserId(Long id, Long id1, String size);
}
