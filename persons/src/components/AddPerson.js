import React, {Component} from 'react';
import {ScrollView, StyleSheet,
View, TextInput, Image, TouchableOpacity, Text} from 'react-native'
import Input from './Input'
import {addIcon} from '../images'
import Button from './Button'
import {connect} from 'react-redux';
import {personNameChanged, addressChanged, addPersonToDatabase} from '../Actions'


// to count how many addresses the user has been entered, max is 3 addresses
var addressesCounter = 0;
class AddPerson extends Component{
  constructor(props) {
   super(props);
   this.state = {
     // to count how many addresses the user has been entered, max is 3 addresses
     user_addresses: 0,
     errorMsg: ''

   }

   this.onPressAddAddressButton = this.onPressAddAddressButton.bind(this)
   this.onChangePersonName = this.onChangePersonName.bind(this)
   this.onChangeAddress1 = this.onChangeAddress1.bind(this)
   this.onChangeAddress2 = this.onChangeAddress2.bind(this)
   this.onChangeAddress3 = this.onChangeAddress3.bind(this)
   this.onPressAddButton = this.onPressAddButton.bind(this)
 }
  render(){
    return(
      <ScrollView style={{height: '100%', backgroundColor: '#ffffff'}}>
        <Input
        width={'100%'}
        marginTop={30}
        placeholder={'Name'}
        onChangeText={this.onChangePersonName}
        value={this.props.personName}
        />

        <View style={{flexDirection: 'row'}}>
          <Input
          width={280}
          marginTop={30}
          placeholder={'Address'}
          onChangeText={this.onChangeAddress1}
          value={this.props.address1}
          />
          <TouchableOpacity
          style={styles.addIconButtonStyle}
          onPress={this.onPressAddAddressButton}
          >
            <Image
              source={addIcon}
              style={{width: 30, height: 25}}
            />
          </TouchableOpacity>
        </View>

        {this.renderAddtionalAddressInput()}

        <Text style={styles.errorMsgLabelStyle}>{this.state.errorMsg}</Text>

        <Button
          buttonColor={'#ccd9ff'}
          textColor={'#000000'}
          fontSize={18}
          ButtonText={'Add'}
          marginTop={30}
          onPress={this.onPressAddButton}
        />

      </ScrollView>
    ) // end return
  }// end render()


  onChangePersonName(name){
    this.props.personNameChanged(name)
    if(this.state.errorMsg == 'Please fill your name'){
      this.setState({errorMsg: ''})
    }

  }

  onChangeAddress1(address1){
    this.props.addressChanged(address1, this.props.address2 , this.props.address3)
    if(this.state.errorMsg == 'Please fill at least one address'){
      this.setState({errorMsg: ''})
    }
  }

  onChangeAddress2(address2){
    this.props.addressChanged(this.props.address1, address2 , this.props.address3)
  }

  onChangeAddress3(address3){
    this.props.addressChanged(this.props.address1, this.props.address2 , address3)
  }

  renderAddtionalAddressInput(){
    if(this.state.user_addresses == 1){
      return(
        <Input
        width={280}
        marginTop={20}
        placeholder={'Address 2'}
        marginLeft={-40}
        onChangeText={this.onChangeAddress2}
        value={this.props.address2}
        />
      )
    }else if(this.state.user_addresses > 1){
      return(
        <View style={{marginLeft: -40}}>
          <Input
          width={280}
          marginTop={20}
          placeholder={'Address 2'}
          onChangeText={this.onChangeAddress2}
          value={this.props.address2}
          />
          <Input
          width={280}
          marginTop={20}
          placeholder={'Address 3'}
          onChangeText={this.onChangeAddress3}
          value={this.props.address3}
          />
        </View>
      )
    }

  }// end function

  onPressAddAddressButton(){
    addressesCounter++
    // update the state only if counter is less than 3 
    if(addressesCounter < 3){
      this.setState({user_addresses: addressesCounter})
    }
  }

  onPressAddButton(){
    if(this.props.personName.trim() != '' && this.props.address1.trim() != ''){
      this.props.addPersonToDatabase(this.props.personName,this.props.address1,
        this.props.address2, this.props.address3)
    }
    else if(this.props.personName.trim() != '' && this.props.address1.trim() == ''){
        this.setState({errorMsg: 'Please fill at least one address'})
    }
    else if(this.props.personName.trim() == '' && this.props.address1.trim() != ''){
      this.setState({errorMsg: 'Please fill your name'})
    }
    else{
      this.setState({errorMsg: 'Please fill your name and at least one address'})
    }

  }


}// end class

const mapStateToProps = state =>{
  return{
    personName: state.Person.personName,
    address1: state.Person.address1,
    address2: state.Person.address2,
    address3: state.Person.address3,
  }
}

const styles = StyleSheet.create({
  addIconButtonStyle:{
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginLeft: -8
  },
  errorMsgLabelStyle:{
    alignSelf: 'center',
    fontSize: 15,
    color: '#ff4d4d',
    marginTop: 5
  },
  toastTextStyle:{
      color: '#ffffff',
      padding: 5,
      fontSize: 14,
  },
})

export default connect(mapStateToProps,
{personNameChanged, addressChanged, addPersonToDatabase})(AddPerson);
