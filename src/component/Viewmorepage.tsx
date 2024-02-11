import { useState } from "react";
import ViewMoresTransactions from "./ViewMoresTransactions";


const Viewmorepage = () => {
  const [OutClose, setOutClose] = useState(false);
  
  const CloseIt = () => {
    setOutClose(!OutClose);
  };

  return (
    <>
      {!OutClose && (
        <div className="viewMorePage w-96 scroll-auto m-auto bg-white rounded-md text-black absolute">
          <div className="modal">
            <div className="pop-up-head">
              <span className="listHeading">All Transactions</span>
              <span className="closing-btn" onClick={CloseIt}>x</span>
            </div>
            <hr className=""/>
            <ViewMoresTransactions />
          </div>
        </div>
      )
      }
    </>
  )
}
export default Viewmorepage;
