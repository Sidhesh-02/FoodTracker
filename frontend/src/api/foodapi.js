import axios from "axios";

const nutritionData = async (query)=>{
    try{
        const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=X9ggPrAYFgkvRSeovgJcwRdVjBp2uHFiQFRztzxF&query=${query}`);
        return response.data;
    }catch(e){
        console.log("Error fetching data from usda api")
    }
}


export {nutritionData};