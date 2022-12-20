import React from "react";
import MealsSummary from "./ProductSummary";
import AvailabeMeals from "./AvailableProducts";

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailabeMeals />
        </React.Fragment>
    )
}

export default Meals;