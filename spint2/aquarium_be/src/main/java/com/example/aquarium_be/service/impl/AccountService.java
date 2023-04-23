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
    public Accounts findAccountByEmail(String username) {
        return accountRepository.findAccountByEmail(username);
    }

    public boolean checkOldPassword( String oldPassword, String password){
        return BCrypt.checkpw(oldPassword, password);
    }

    @Override
    public void updateAccount(Accounts account) {
        accountRepository.updateAccount(account.getId(),account.getPassword());
    }

    @Override
    public void addAccount(Accounts account) {
        accountRepository.save(account);
    }


}
