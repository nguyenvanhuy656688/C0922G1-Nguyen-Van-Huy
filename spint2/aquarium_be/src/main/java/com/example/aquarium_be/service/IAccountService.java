package com.example.aquarium_be.service;

import com.example.aquarium_be.model.Accounts;
import org.springframework.stereotype.Service;

@Service
public interface IAccountService {
    Accounts findAccountByEmail(String email);
    boolean checkOldPassword(String oldPassword, String password);


    void updateAccount(Accounts account);
    void addAccount(Accounts account);
}
