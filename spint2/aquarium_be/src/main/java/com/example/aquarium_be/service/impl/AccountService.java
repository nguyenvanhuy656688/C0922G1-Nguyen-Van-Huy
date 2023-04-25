package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.repository.IAccountRepository;
import com.example.aquarium_be.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

/**
 * Created by: Phạm Tiến
 * Date: 29/03/2023
 * Class: AccountService
 */
@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;



    @Override
    public Accounts findAccountByEmployeeEmail(String email) {
        return accountRepository.findAccountByEmail(email);
    }

    @Override
    public boolean checkPassword(String password, String oldPassword) {
         return BCrypt.checkpw(password,oldPassword);
    }

    @Override
    public void saveNewPassword(String newPassword, Long accountId) {
        accountRepository.saveNewPassword(BCrypt.hashpw(newPassword, BCrypt.gensalt(12)),accountId);

    }


}
