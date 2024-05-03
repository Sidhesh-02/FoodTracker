package com.javaproject.foodtracker.controller;

import java.util.List;
import com.javaproject.foodtracker.exception.ResourceNotFoundException;
import com.javaproject.foodtracker.model.Totalmodel;
import com.javaproject.foodtracker.repository.Foodrepository;
import com.javaproject.foodtracker.repository.TotalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.javaproject.foodtracker.model.Foodmodel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class Foodcontroller {

    private final Foodrepository foodRepository;
    private final TotalRepository totalRepository;

    @Autowired
    public Foodcontroller(Foodrepository foodRepository, TotalRepository totalRepository) {
        this.foodRepository = foodRepository;
        this.totalRepository = totalRepository;
    }

    @PostMapping("/food")
    public Foodmodel createFood(@RequestBody Foodmodel food) {
        Foodmodel savedFood = foodRepository.save(food);
        updateTotalNutrition(savedFood);
        return savedFood;
    }

    @GetMapping("/food")
    public List<Foodmodel> getAllFoods() {
        List<Foodmodel> foods = (List<Foodmodel>) foodRepository.findAll();
        updateTotalNutrition(foods);
        return foods;
    }

    @DeleteMapping("/food/{id}")
    public void deleteFood(@PathVariable Integer id) {
        foodRepository.deleteById(id);
    }

    @PutMapping("/food/{id}")
    public Foodmodel updateFood(@PathVariable Integer id, @RequestBody Foodmodel food) {
        Foodmodel existingFood = foodRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + id));
        existingFood.setName(food.getName());
        existingFood.setCalories(food.getCalories());
        existingFood.setProtein(food.getProtein());
        existingFood.setFats(food.getFats());
        existingFood.setCarbs(food.getCarbs());
        return foodRepository.save(existingFood);
    }

    @PostMapping("/total")
    public Totalmodel createTotal(@RequestBody Totalmodel total) {
        return totalRepository.save(total);
    }

    @GetMapping("/total")
    public List<Totalmodel> getAllTotals() {
        return (List<Totalmodel>) totalRepository.findAll();
    }

    @DeleteMapping("/total/{id}")
    public void deleteTotal(@PathVariable Integer id) {
        totalRepository.deleteById(id);
    }

    @PutMapping("/total/{id}")
    public Totalmodel updateTotal(@PathVariable Integer id, @RequestBody Totalmodel total) {
        Totalmodel existingTotal = totalRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Total not found with id: " + id));
        existingTotal.setTotalCalories(total.getTotalCalories());
        existingTotal.setTotalProtein(total.getTotalProtein());
        existingTotal.setTotalFats(total.getTotalFats());
        existingTotal.setTotalCarbs(total.getTotalCarbs());
        return totalRepository.save(existingTotal);
    }

    private void updateTotalNutrition(Foodmodel food) {
        Totalmodel totalModel = totalRepository.findById(1L)
                .orElseGet(() -> new Totalmodel(1L));

        totalModel.setTotalCalories(totalModel.getTotalCalories() + food.getCalories());
        totalModel.setTotalProtein(totalModel.getTotalProtein() + food.getProtein());
        totalModel.setTotalFats(totalModel.getTotalFats() + food.getFats());
        totalModel.setTotalCarbs(totalModel.getTotalCarbs() + food.getCarbs());

        totalRepository.save(totalModel);
    }

    private void updateTotalNutrition(List<Foodmodel> foods) {
        Totalmodel totalModel = totalRepository.findById(1L)
                .orElseGet(() -> new Totalmodel(1L));

        float totalCalories = 0;
        float totalProtein = 0;
        float totalFats = 0;
        float totalCarbs = 0;

        for (Foodmodel food : foods) {
            totalCalories += food.getCalories();
            totalProtein += food.getProtein();
            totalFats += food.getFats();
            totalCarbs += food.getCarbs();
        }

        totalModel.setTotalCalories(totalCalories);
        totalModel.setTotalProtein(totalProtein);
        totalModel.setTotalFats(totalFats);
        totalModel.setTotalCarbs(totalCarbs);

        totalRepository.save(totalModel);
    }
}