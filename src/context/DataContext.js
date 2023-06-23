import { createContext, useContext, useReducer } from "react";
import { snacks } from "../backend/data";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        if (action.payload) {
          const searchData = state.data.filter((item) =>
            item.product_name
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
          return { ...state, data: searchData };
        } else {
          return { ...state, data: snacks };
        }

      case "PRODUCT_NAME":
        if (state.product_name === 0) {
          const sortedArr = state.data.sort((a, b) => {
            const firstLetterA = a.product_name.charAt(0).toLowerCase();
            const firstLetterB = b.product_name.charAt(0).toLowerCase();

            if (firstLetterA < firstLetterB) {
              return -1;
            } else if (firstLetterA > firstLetterB) {
              return 1;
            } else {
              return a.localeCompare(b);
            }
          });
          return { ...state, sortedArr: sortedArr, product_name: 1 };
        } else if (state.product_name === 1) {
          const sortedArr = state.data.sort((a, b) => {
            const firstLetterA = a.product_name.charAt(0).toLowerCase();
            const firstLetterB = b.product_name.charAt(0).toLowerCase();

            if (firstLetterA < firstLetterB) {
              return 1;
            } else if (firstLetterA > firstLetterB) {
              return -1;
            } else {
              return a.localeCompare(b);
            }
          });
          return { ...state, sortedArr: sortedArr, product_name: 2 };
        } else {
          return { ...state, data: snacks, product_name: 0 };
        }

      case "PRODUCT_WEIGHT":
        if (state.product_weight === 0) {
          const sortedArr = state.data.sort(
            (a, b) => parseInt(a.product_weight) - parseInt(b.product_weight)
          );
          return { ...state, data: sortedArr, product_weight: 1 };
        } else if (state.product_weight === 1) {
          const sortedArr = state.data.sort(
            (a, b) => parseInt(b.product_weight) - parseInt(a.product_weight)
          );
          return { ...state, data: sortedArr, product_weight: 2 };
        } else if (state.product_weight === 2) {
          return { ...state, data: snacks, product_weight: 0 };
        } else {
          return state;
        }

      case "PRICE":
        if (state.price === 0) {
          const sortedArr = state.data.sort((a, b) => a.price - b.price);
          return { ...state, data: sortedArr, price: 1 };
        } else if (state.price === 1) {
          const sortedArr = state.data.sort((a, b) => b.price - a.price);
          return { ...state, data: sortedArr, price: 2 };
        } else if (state.price === 2) {
          return { ...state, data: snacks, price: 0 };
        } else {
          return state;
        }

      case "CALORIE":
        if (state.calories === 0) {
          const sortedArr = state.data.sort((a, b) => a.calories - b.calories);
          return { ...state, data: sortedArr, calories: 1 };
        } else if (state.calories === 1) {
          const sortedArr = state.data.sort((a, b) => b.calories - a.calories);
          return { ...state, data: sortedArr, calories: 2 };
        } else if (state.calories === 2) {
          return { ...state, data: snacks, calories: 0 };
        } else {
          return state;
        }

      case "INGREDIENT":
        return { ...state };

      default:
        console.log("Error: Something is wrong");
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    data: [...snacks],
    product_name: 0,
    price: 0,
    calories: 0,
    product_weight: 0,
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
