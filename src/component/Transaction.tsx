import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

interface TransactionProps {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <>
      <div>
        <li className={`shadow-sm w-96 ${transaction.amount < 0 ? 'minus' : 'plus'} list flex items-center mb-px p-2`}>
          <button className="ml-6 delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
          {transaction.text}<span className="ml-auto">{sign}&#8377;{Math.abs(transaction.amount)}</span>
        </li>
      </div>
    </>
  )
}

export default Transaction