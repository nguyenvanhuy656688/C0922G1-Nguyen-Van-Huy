package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.Accounts;
import com.example.aquarium_be.model.AquaProduct;
import com.example.aquarium_be.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart,Long> {

    Cart findByAquaProductAndAccountsAndSize(AquaProduct aquaProduct, Accounts accounts , String size);

    Boolean existsByAquaProductAndAccountsAndSize(AquaProduct aquaProduct,Accounts accounts , String size);

    @Query(value = "select * from cart " +
            "where accounts_id =:id ",
            nativeQuery = true)
    List<Cart> findAllCart(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "update cart  set size = :size" +
            " where id =:id", nativeQuery = true)
    void updateSize(@Param("id") Long id,
                    @Param("size") String size);

    Cart findByAquaProductIdAndAccountsIdAndSize(Long accounts_id,Long aqua_product_id , String size);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM cart WHERE cart.accounts_id =:id", nativeQuery = true)
    void deleteCartById(@Param("id") Long id);

    List<Cart> findAllByAccounts(Accounts accounts);
}
