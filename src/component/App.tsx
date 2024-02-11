import Header from './Header'
import BalanceAmt from './Balance';
import IncomeExpense from './I&E';
import History from './History';
import AddTrasaction from './AddTrasaction';
import { GlobalProvider } from '../context/GlobalState';

export const App = () => {
  return (
    <>
      <GlobalProvider>
        <div className=' w-96 m-auto relative'>
          <Header />
          <BalanceAmt />
          <IncomeExpense />
          <History />
          <AddTrasaction />
        </div>
      </GlobalProvider>
    </>
  )
}

export default App;
