package com.example.aquarium_be.payload.response;

import java.util.List;

/**
 * Created by: Phạm Tiến
 * Date: 29/03/2023
 * Class: JwtResponse
 */
public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private String username;
    private String nameUser;
    private List<String> roles;
    private Long idAccount;

    public JwtResponse(String accessToken, String username,Long idAccount ,String nameUser, List<String> roles) {
        this.token = accessToken;
        this.username = username;
        this.nameUser=nameUser;
        this.roles = roles;
        this.idAccount = idAccount;
    }

    public JwtResponse() {
    }


    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public Long getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(Long idAccount) {
        this.idAccount = idAccount;
    }
}
