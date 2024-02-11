import HistoryList from './HistoryList';
import ViewMoreHistory from './ViewMoreHistory';
function History() {
  return (
    <>
      <div className="history-list">
        <h1 className="mt-10 text-lg">History</h1>
        <hr  className=" mt-2 w-96 border-none h-px bg-black"/>
        <HistoryList />
        <ViewMoreHistory />
      </div>
    </>
  )
}

export default History;

