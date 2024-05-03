import axios from 'axios';

const fetchFoodsFromAPI = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/food');
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('Invalid data format received');
      return [];
    }
  } catch (error) {
    console.error('Error fetching foods:', error);
    return [];
  }
};

const deleteFoodFromAPI = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/food/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting food:', error);
    return false;
  }
};

export { fetchFoodsFromAPI, deleteFoodFromAPI };