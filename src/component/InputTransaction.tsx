import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


function InputTransaction() {
  const [ text , setText] = useState('');
  const [ amount , setAmount] = useState<string | number>("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount)
    }
    setText("");
    setAmount("");

    addTransaction(newTransaction);
  }


  return (
    <>
    <form onSubmit={onSubmit}>
      <label htmlFor="large-input" className="block mt-4 mb-2">Transaction Text</label>
      <input type="text" id="large-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." className="w-full p-2 text-gray-900 bg-transparent border border-black outline-none" />
      
      <label htmlFor="large-input" className="block mt-4 mb-2">Amount <p>use - for expenses</p></label>
      <input type="text" id="large-input" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter Amount..."  className="w-full p-2 text-gray-900 bg-transparent border border-black outline-none" />
      <button type="submit" className="float-end p-3 bg-black w-16 h-8 rounded-md mt-3 text-white  flex justify-center items-center cursor-pointer">Add</button>
      </form>
    </>
  )
}

export default InputTransaction;