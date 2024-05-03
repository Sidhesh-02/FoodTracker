import Nav from './components/Nav';
import FoodInput from './pages/FoodInput';
import FoodList from './pages/FoodList';
import NutritionInfo from './pages/NutritionInfo';
import './Style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<NutritionInfo />} ></Route>
          <Route path='/addfood' element={<FoodInput />} ></Route>
          <Route path='/history' element={<FoodList />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;