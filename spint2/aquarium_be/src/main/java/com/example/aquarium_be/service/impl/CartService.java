package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.model.Cart;
import com.example.aquarium_be.repository.ICartRepository;
import com.example.aquarium_be.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public boolean checkCart(AquaProduct aquaProduct, Accounts accounts, String size) {
        return iCartRepository.existsByAquaProductAndAccountsAndSize(aquaProduct, accounts,size);
    }

    @Override
    public Cart findByFoodIdAndUserId(AquaProduct id, Accounts id1, String size) {
        return iCartRepository.findByAquaProductAndAccountsAndSize(id,id1,size) ;
    }

    @Override
    public void createCart(Cart cart1) {
        iCartRepository.save(cart1);
    }

    @Override
    public void deleteCartByIdUser(Long id) {
        iCartRepository.deleteCartById(id);

    }

    @Override
    public List<Cart> findAllByUser(Accounts accounts) {
        return iCartRepository.findAllByAccounts(accounts);
    }

    @Override
    public List<Cart> findAll(Long id) {
        return iCartRepository.findAllCart(id);
    }

    @Override
    public void updateSize(Long id, String size) {
        iCartRepository.updateSize(id,size);
    }

    @Override
    public Cart findCart(Long id) {
        return iCartRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteCart(Long id) {
        iCartRepository.deleteById(id);
    }

    @Override
    public Cart findByAquaProductIdAndUserId(Long id, Long id1, String size) {
        return iCartRepository.findByAquaProductIdAndAccountsIdAndSize(id,id1,size);
    }

}
