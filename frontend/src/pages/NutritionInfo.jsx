import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/NutritionInfo.css'


function NutritionInfo() {
  const [total, setTotal] = useState({
    totalCalories: 0,
    totalProtein: 0,
    totalFats: 0,
    totalCarbs: 0,
  });

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/total');
        
        if (response.data.length > 0) {
          setTotal(response.data[0]); 
        } else {
          console.error('No total nutrition data found');
        }
      } catch (error) {
        console.error('Error fetching total:', error);
      }
    };
    fetchTotal();
  }, []);




  return (
    <div>
      <h2>Nutrition Information</h2>

      

      {total ? (
        <div className="NutritionInfo">
          <p>Total Calories: {total.totalCalories}</p>
          <p>Total Protein: {total.totalProtein}</p>
          <p>Total Fats: {total.totalFats}</p>
          <p>Total Carbs: {total.totalCarbs}</p>
        </div>
      ) : (
        <p>Loading nutrition information...</p>
      )}
    </div>
  );
}

export default NutritionInfo;