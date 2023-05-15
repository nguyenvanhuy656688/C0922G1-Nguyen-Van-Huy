package com.example.aquarium_be.repository;

import com.example.aquarium_be.dto.IOrderProductDto;
import com.example.aquarium_be.model.OrderDetail;
import com.example.aquarium_be.model.OrderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderProductRepository extends JpaRepository<OrderProduct,Long> {


    @Query(value =
            "SELECT\n" +
                    "    `order_product`.id as id,\n" +
                    "    `order_product`.date_order as dateOrder,\n" +
                    "    `order_product`.total as total,\n" +
                    "    `order_product`.code as code,\n" +
                    "    `order_product`.accounts_id as accountsId\n" +
                    "                     FROM `order_product`\n" +
                    "                     WHERE `order_product`.accounts_id = :id\n" +
                    "                     ORDER BY  `order_product`.id desc",
            countQuery =
                    "SELECT\n" +
                            "    `order_product`.id as id,\n" +
                            "    `order_product`.date_order as dateOrder,\n" +
                            "    `order_product`.total as total,\n" +
                            "    `order_product`.code as code,\n" +
                            "    `order_product`.accounts_id as accountsId\n" +
                            "                     FROM `order_product`\n" +
                            "                     WHERE `order_product`.accounts_id = :id\n" +
                            "                     ORDER BY  `order_product`.id desc",
            nativeQuery = true
    )
    Page<IOrderProductDto> findAllIOrderProductDto(@Param("id") Long id, Pageable pageable);
}
