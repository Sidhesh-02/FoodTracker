import { useState, useEffect } from 'react';
import { fetchFoodsFromAPI, deleteFoodFromAPI } from '../api/api';
import '../Style/FoodList.css';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFoodsFromAPI();
      setFoods(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteFoodFromAPI(id);
    
    if (success) {
      setFoods(foods.filter((food) => food.id !== id));
    }
  };

  return (
    <div className="FoodList">
      <h2>Food List</h2>
      <table>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fats</th>
            <th>Carbs</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.calories}</td>
              <td>{food.protein}</td>
              <td>{food.fats}</td>
              <td>{food.carbs}</td>
              <td>
                <button onClick={() => handleDelete(food.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodList;