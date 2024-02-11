import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function BalanceAmount() {
  const { transaction } = useContext(GlobalContext);

  const amounts =transaction.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h1 className="mb-5 text-left text-3xl">&#8377; {total}</h1>
    </>
    
    )
}

export default BalanceAmount;