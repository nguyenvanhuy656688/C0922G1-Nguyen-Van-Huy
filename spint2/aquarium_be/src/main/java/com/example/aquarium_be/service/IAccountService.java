package com.example.aquarium_be.service;

import com.example.aquarium_be.model.Accounts;
import org.springframework.stereotype.Service;

@Service
public interface IAccountService {


    Accounts findAccountByEmployeeEmail(String username);

    boolean checkPassword(String password, String password1);

    void saveNewPassword(String newPassword, Long id);
}
