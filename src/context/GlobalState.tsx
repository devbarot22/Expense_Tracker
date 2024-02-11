import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Define the type for the transaction object
type Transaction = {
  id: number;
  text: string;
  amount: number;
};

// Define the type for the initial state object
type InitialState = {
  transaction: Transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void; // Add this line
};

// Initial state
const initialState: InitialState = {
  transaction: [],
  deleteTransaction: () => {}, // Add comma here
  addTransaction: () => {} // Placeholder function
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id: number) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  const addTransaction = (transaction: Transaction) => { // Add this line
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transaction: state.transaction,
      deleteTransaction, // Remove the extra comma here
      addTransaction // Add this line
    }}>
      {children}
    </GlobalContext.Provider>
  );
};