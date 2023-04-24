package com.example.be.repository;

import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface IInfoLocationRepository extends JpaRepository<InfoLocation, Integer> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO `exam_module6`.`info_location` (`address`, `name`, `open_date`, `position_and_employee_id`)" +
            " VALUES (:address, :name,:openDate,:positionAndEmployee )", nativeQuery = true)
    void create(@Param("name") String name,@Param("openDate") String openDate,@Param("address") String address,@Param("positionAndEmployee") Integer positionAndEmployee);
}
