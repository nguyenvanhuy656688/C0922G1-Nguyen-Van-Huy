package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.AccountRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRoleRepository extends JpaRepository<AccountRole, Long> {
}
