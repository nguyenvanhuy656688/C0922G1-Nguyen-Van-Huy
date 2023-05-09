package com.example.aquarium_be.service;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.OrderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


public interface IAccountService {


    Accounts findAccountByEmployeeEmail(String username);

    boolean checkPassword(String password, String password1);

    void saveNewPassword(String newPassword, Long id);

    Accounts findById(Long accounts);

    Page<OrderProduct> findAllByUser(Accounts id, Pageable pageable);
}
