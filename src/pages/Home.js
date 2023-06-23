import React from "react";
import { snacks } from "../backend/data";

export const Home = () => {
  console.log(snacks);
  return (
    <div>
      <h1>Snacks Table</h1>

      <table className="table-auto">
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Weight</th>
          <th>Price(INR)</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>
        {snacks.map(item=><tr>
          <td>{item.id}</td>
        </tr>)}
        
      </table>
    </div>
  );
};