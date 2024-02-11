import ExpenseRecord from "./ExpenseRecord";
import IncomeRecord from "./IncomeRecord";

function IncomeExpense() {
  return (
    <>
    <div className="inline-flex bg-slate-100 rounded-sm h-20 w-96 shadow-md border-none">
      <IncomeRecord />
      <i rel="separator" className="bg-black  m-auto w-px h-12"></i>
      <ExpenseRecord />
      </div>

    </>
  )
}

export default IncomeExpense;




