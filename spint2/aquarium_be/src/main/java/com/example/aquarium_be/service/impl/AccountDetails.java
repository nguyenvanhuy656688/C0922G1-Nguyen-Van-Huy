package com.example.aquarium_be.service.impl;

import com.example.aquarium_be.model.Accounts;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by: Phạm Tiến
 * Date: 29/03/2023
 * Class: AccountDetails
 */
public class AccountDetails implements UserDetails {

    private static final long serialVersionUID = 1L;
    private String username;
    private String nameUser;
    private Long idAccount;

    @JsonIgnore
    private String password;
    List<GrantedAuthority> authorities = null;

    public AccountDetails(String username, String password,Long idAccount,String nameUser,
                          List<GrantedAuthority> authorities) {

        this.username = username;
        this.password = password;
        this.nameUser=nameUser;
        this.authorities = authorities;
        this.idAccount = idAccount;
    }

    public static AccountDetails build(Accounts account) {
        List<GrantedAuthority> authorities = account.getAccountRoleSet().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRole().getName()))
                .collect(Collectors.toList());
        return new AccountDetails(
                account.getEmail(),
                account.getPassword(),
                account.getId(),
                account.getNameUser(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AccountDetails account = (AccountDetails) o;
        return Objects.equals(username, account.username);
    }

    public Long getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(Long idAccount) {
        this.idAccount = idAccount;
    }
}
