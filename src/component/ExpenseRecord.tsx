import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ExpenseRecord() {

  const { transaction } = useContext(GlobalContext) 

  const amounts = transaction.map(transaction => transaction.amount)

  const expense = amounts.filter(items => items < 0).reduce((ac, item) =>(ac += item), 0).toFixed(2);

  return (
    <>
    <div className="w-1/2">
      <h1 className="text-center mt-2 font-medium">EXPENSE</h1>
      <p className="text-center text-2xl text-red-600">&#8377;{expense}</p>
      </div>
    </>
  )
}

export default ExpenseRecord;