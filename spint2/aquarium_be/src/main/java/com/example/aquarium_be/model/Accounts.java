package com.example.aquarium_be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String avatar;
    private String userName;
    @Column(nullable = false)
    @JsonIgnore
    private String password;
    private String nameUser;
    private String address;
    private String email;
    private String phoneNumber;


    @OneToMany(mappedBy = "account")
    @JsonIgnore
    private Set<AccountRole> accountRoleSet;

    @OneToOne(mappedBy = "account")
    @JoinColumn
    private Employee employee;

    @OneToOne(mappedBy = "account")
    @JoinColumn
    private Customer customer;

    public Account() {
    }


}