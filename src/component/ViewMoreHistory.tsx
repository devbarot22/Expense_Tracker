import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Viewmorepage from './Viewmorepage';

function ViewMoreHistory() {
  const { transaction } = useContext(GlobalContext);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  
  return (
    <>
      {transaction.length > 4 && (
        <a className="cursor-pointer font-medium text-xs underline" onClick={handleClick}>view more</a>
      )}
      {showMore && <Viewmorepage />}
    </>
  );
}

export default ViewMoreHistory;