package com.example.be.repository;

import com.example.be.dto.IInfoLocationDto;
import com.example.be.model.InfoLocation;
import com.example.be.model.PositionAndEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPositionAndEmployeeRepository extends JpaRepository<PositionAndEmployee, Integer> {

    @Query(value = "select info_location.name as name,info_location.address as address,info_location.open_date as openDate, info_location.position_and_employee_id as positionAndEmployee " +
            " from info_location " +
            "where info_location.name like concat ('%',:name ,'%')", nativeQuery = true)
    List<IInfoLocationDto> getListByName(@Param("name") String name);


    @Query(value = "select info_location.name as name,info_location.address as address,info_location.open_date as openDate, info_location.position_and_employee_id as positionAndEmployee " +
            " from info_location " +
            "where info_location.name like concat ('%',:name ,'%') and info_location.position_and_employee_id =:id", nativeQuery = true)
    List<IInfoLocationDto> getListByNameAndManager(@Param("name")String name,@Param("id") int id);
}
