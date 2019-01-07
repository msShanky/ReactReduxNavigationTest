export default (state = {}, action) => {
  switch (action.type) {
   case 'NAVIGATE_FORWORD':
    return {
      ...state,
      screen: '2'
    }
   default:
    return state
  }
 }