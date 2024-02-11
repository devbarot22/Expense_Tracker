import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

function HistoryList() {

  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <ul className="">
        {transaction.slice(0, 4).map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default HistoryList