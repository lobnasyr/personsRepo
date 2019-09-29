import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';



export const personNameChanged = (personName) => {
  return{
    type:'personNameChanged',
    payload: personName
  }
}

export const addressChanged = (address1, address2, address3) => {
  return{
    type:'addressChanged',
    payload: {address1: address1, address2: address2, address3: address3}
  }
}

export const addPersonToDatabase = (name, address1, address2, address3) => {
  return(dispatch) => {
    firebase.database().ref('Persons/').push({
      name,
      address1,
      address2,
      address3
    }).then( () => {
      dispatch({type: 'addPersonResult'})
      Actions.main({type: 'reset'})
    }).catch(() => {
        dispatch({type: 'addPersonResult'})
        Actions.main({type: 'reset'})
    })
  }
}

export const readPersons = () => {
  return(dispatch) => {
    firebase.database().ref('Persons/').on('value', function (snapshot) {
        if(snapshot.exists()){
          var personsResult = [];
          var allpersons = snapshot.val();
          Object.keys(allpersons).map(function(objectKey, index) {
                var onePerson = allpersons[objectKey];
                  personsResult.push({name: onePerson.name,
                  address1: onePerson.address1, address2: onePerson.address2,
                  address3: onePerson.address3})
            }) // end map
            dispatch({type: 'personListFetched', payload: personsResult})
        }
    });
  }
}
