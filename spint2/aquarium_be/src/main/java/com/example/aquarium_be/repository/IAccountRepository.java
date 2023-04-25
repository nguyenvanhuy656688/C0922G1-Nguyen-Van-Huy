package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IAccountRepository extends JpaRepository<Accounts, Long> {

    @Query(value = "select a.* from  accounts a where a.email= :email", nativeQuery = true)
    Accounts findAccountByEmail(@Param("email") String email);

    @Modifying
    @Query(value = "update accounts set password =:newPassword where id =:id ",nativeQuery = true)
    void saveNewPassword(@Param("newPassword") String newPassword,@Param("id") Long id);
}
