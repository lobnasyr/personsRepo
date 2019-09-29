const INITIAL_STATE = {
personName: '',
address1: '',
address2: '',
address3: '',
personList: [] // to hold all persons in Database
}

export default (state = INITIAL_STATE ,action) => {
  switch(action.type){
    case 'personNameChanged':
      return{...state, personName: action.payload}
    case 'addressChanged':
      return{...state, address1: action.payload.address1,
      address2: action.payload.address2, address3: action.payload.address3}
      // reset values after adding new person
    case 'addPersonResult':
      return{...state,
      personName: '',
      address1: '',
      address2: '',
      address3: '',}
    case 'personListFetched':
      return{...state, personList: action.payload}

    default:
    return state
  }
}
