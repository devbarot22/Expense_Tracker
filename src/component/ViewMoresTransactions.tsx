import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const ViewMoresTransactions = () => {
  const { transaction, deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <ul>
        {transaction.map((transaction) => {
          const sign = transaction.amount < 0 ? '-' : '+';
          return (
            <li key={transaction.id} className={`shadow-sm w-96 ${transaction.amount < 0 ? 'minus' : 'plus'} list1 flex items-center mb-px p-2`}>
              {transaction.text}
              <button className="delete-btn1" onClick={() => deleteTransaction(transaction.id)}>Delete</button>
              <span className="ml-auto">{sign}&#8377;{Math.abs(transaction.amount)}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ViewMoresTransactions;