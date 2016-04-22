export default (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_AGE':
    console.log(action.payload)
    return action.payload
  default:
    return state
  }
}
