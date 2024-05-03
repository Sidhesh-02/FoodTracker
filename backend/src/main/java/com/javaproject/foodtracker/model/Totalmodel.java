package com.javaproject.foodtracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Totalmodel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private float totalCalories;
    private float totalProtein;
    private float totalFats;
    private float totalCarbs;

    public Totalmodel() {
    }

    public Totalmodel(Long id) {
        this.id = id.intValue();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public float getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(float totalCalories) {
        this.totalCalories = totalCalories;
    }

    public float getTotalProtein() {
        return totalProtein;
    }

    public void setTotalProtein(float totalProtein) {
        this.totalProtein = totalProtein;
    }

    public float getTotalFats() {
        return totalFats;
    }

    public void setTotalFats(float totalFats) {
        this.totalFats = totalFats;
    }

    public float getTotalCarbs() {
        return totalCarbs;
    }

    public void setTotalCarbs(float totalCarbs) {
        this.totalCarbs = totalCarbs;
    }
}