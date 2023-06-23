import React from "react";
import { useData } from "../context/DataContext";

export const Home = () => {
  const { state, dispatch } = useData();
  return (
    <div>
      <h1>Snacks Table</h1>
      <input
        type="text"
        placeholder="Search Products here..."
        onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}
      />
      <table className="table-whole">
        <tr>
          <th onClick={() => dispatch({ type: "ID" })}>ID</th>
          <th onClick={() => dispatch({ type: "PRODUCT_NAME" })}>
            Product Name
          </th>
          <th onClick={() => dispatch({ type: "PRODUCT_WEIGHT" })}>
            Product Weight
          </th>
          <th onClick={() => dispatch({ type: "PRICE" })}>Price(INR)</th>
          <th onClick={() => dispatch({ type: "CALORIE" })}>Calories</th>
          <th onClick={() => dispatch({ type: "INGREDIENT" })}>Ingredients</th>
        </tr>
        {state.data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.product_name}</td>
            <td>{item.product_weight}</td>
            <td>{item.price}</td>
            <td>{item.calories}</td>
            <td>
              {item.ingredients.map((ingre) => (
                <span>{ingre}, </span>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
