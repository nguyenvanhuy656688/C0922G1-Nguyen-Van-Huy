package com.example.aquarium_be.repository;

import com.example.aquarium_be.model.AquaType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAquaTypeRepository extends JpaRepository<AquaType,Long> {
}
