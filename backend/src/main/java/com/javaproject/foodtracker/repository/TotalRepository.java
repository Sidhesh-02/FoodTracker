package com.javaproject.foodtracker.repository;

import com.javaproject.foodtracker.model.Totalmodel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TotalRepository extends JpaRepository<Totalmodel, Integer> {
    Optional<Totalmodel> findById(Long id);
}