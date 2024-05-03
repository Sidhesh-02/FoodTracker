package com.javaproject.foodtracker.repository;

import com.javaproject.foodtracker.model.Foodmodel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Foodrepository extends JpaRepository<Foodmodel, Integer> {
    Optional<Foodmodel> findById(Integer id);
}