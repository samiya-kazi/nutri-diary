import React, { useState } from "react";
import AddFoodForm from "../Components/AddFoodForm";
import FoodSearch from "../Components/FoodSearch";
import Navbar from "../Components/Navbar";

function AddFoodPage () {

  const [ selectedFood, setSelectedFood ] = useState(null);

  return (
    <>
    <Navbar />
    <div>
      <FoodSearch setSelectedFood={setSelectedFood} />
      <AddFoodForm selectedFood={selectedFood} />
    </div>
    </>
  )
}

export default AddFoodPage;