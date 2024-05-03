import { useState } from 'react';
import axios from 'axios';
import '../Style/FoodInput.css'
import { nutritionData } from "../api/foodapi";

function FoodInput() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [query,setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
        const foodItem = await nutritionData(query);
        console.log(foodItem);
        const nutrients = foodItem.foods[0].foodNutrients;
        
        const proteinNutrient = nutrients.find(nutrient => nutrient.nutrientName === "Protein");
        const fatNutrient = nutrients.find(nutrient => nutrient.nutrientName === "Total lipid (fat)");
        const energyNutrient = nutrients.find(nutrient => nutrient.nutrientName === "Energy");
        const carbNutrient = nutrients.find(nutrient => nutrient.nutrientName === "Carbohydrate, by difference");

        if (proteinNutrient) {
            setProtein(proteinNutrient.value);
        } else {
            console.log("Protein not found in nutrient data");
        }

        if (fatNutrient) {
            setFats(fatNutrient.value);
        } else {
            console.log("Total lipid (fat) not found in nutrient data");
        }

        if (energyNutrient) {
            setCalories(energyNutrient.value);
        } else {
            console.log("Energy not found in nutrient data");
        }

        if (carbNutrient) {
            setCarbs(carbNutrient.value);
        } else {
            console.log("Carbohydrate not found in nutrient data");
        }
        
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
    }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/food', { name, calories, protein, fats, carbs });
      setName('');
      setCalories(0);
      setProtein(0);
      setFats(0);
      setCarbs(0);
    } catch (error) {
      console.error('Error creating food:', error);
    }
  };

  return (
    <div>
      <div className="FoodSearch">
                <h2>Search Food</h2>
                <form onSubmit={handleSearch}>
                    <label>
                        Food Item:
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
      <div className="FoodInput">
        <h2>Add New Food</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Food Item:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Calories:
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>
          <label>
            Protein:
            <input
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
          </label>
          <label>
            Fats:
            <input
              type="number"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </label>
          <label>
            Carbs:
            <input
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </label>
          <button type="submit">Add Food</button>
        </form>
      </div>
    </div>
  );
}

export default FoodInput;