import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function IncomeRecord() {
  const { transaction } = useContext(GlobalContext) 

  const amounts = transaction.map(transaction => transaction.amount)

  const income = amounts.filter(items => items > 0).reduce((ac, item) =>(ac += item), 0).toFixed(2);

  return (
    <>
      <div className="w-1/2">
        <h1 className=" text-center mt-2 font-medium">INCOME</h1>
        <p className="text-center text-2xl text-green-400">&#8377;{income}</p>
      </div>
    </>
  )
}

export default IncomeRecord;