import React, {Component} from 'react';
import {ScrollView, StyleSheet,
View, Text} from 'react-native'
import {connect} from 'react-redux';
import Button from './Button'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';
import {readPersons} from '../Actions'


class PersonsList extends Component{
  constructor(props) {
   super(props);

   this.onPressAddButton = this.onPressAddButton.bind(this)
 }

 componentDidMount(){
   try{
       firebase.initializeApp({
         apiKey: "AIzaSyCJF71BscgO11doMOyHsPSouw2EFPw1ars",
         authDomain: "persons-e5334.firebaseapp.com",
         databaseURL: "https://persons-e5334.firebaseio.com",
         projectId: "persons-e5334",
         storageBucket: "",
         messagingSenderId: "803716154380",
         appId: "1:803716154380:web:ac3a815de43be77e2b5a29",
         measurementId: "G-YYSXLH17KP"
     });
     this.props.readPersons()
   }
   catch(error){

   }
 }

// check if there is address 2
 renderAddress2(address2){
   if(address2.trim() != ''){
     return(
         <Text style={styles.infoTextLabelStyle}>Address 2: {address2}</Text>
     )
   }
 }

// check if there is address 3
 renderAddress3(address3){
   if(address3.trim() != ''){
     return(
         <Text style={styles.infoTextLabelStyle}>Address 3: {address3}</Text>
     )
   }
 }

 renderPersonsList(){
   if(this.props.personList.length > 0){
     return(this.props.personList.map(item =>
       <View style={styles.infoViewStyle}
       key={item.name}>
         <Text style={[styles.infoTextLabelStyle, {color: '#002699'}]}>{item.name}</Text>
         <Text style={styles.infoTextLabelStyle}>Address 1: {item.address1}</Text>
         {this.renderAddress2(item.address2)}
         {this.renderAddress3(item.address3)}
       </View>
    )
  );
  }
 }
  render(){
    return(
      <View style={{height: '100%', backgroundColor: '#ffffff'}}>

        <ScrollView >
          {this.renderPersonsList()}
        </ScrollView>

        <Button
          buttonColor={'#ccd9ff'}
          textColor={'#000000'}
          fontSize={18}
          ButtonText={'Add New Person'}
          marginTop={30}
          marginBottom={80}
          onPress={this.onPressAddButton}
        />

      </View>
    ) // end return
  }// end render()



  onPressAddButton(){
    Actions.AddPerson()
  }

}// end class

const mapStateToProps = state =>{
  return{
    personList: state.Person.personList
  }
}

const styles = StyleSheet.create({
  infoViewStyle:{
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  infoTextLabelStyle:{
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15
  }
})

export default connect(mapStateToProps,
{readPersons})(PersonsList);
