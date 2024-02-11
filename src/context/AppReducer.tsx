export default (state: any, action: {
  payload: any; type: any; 
}) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transaction: state.transaction.filter((transaction: { id: any; }) => transaction.id !== action.payload)
      }

    case 'ADD_TRANSACTION':
      return{
        ...state,
        transaction: [action.payload, ...state.transaction]
      }

    default:
      return state;
  }
}
