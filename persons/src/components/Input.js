import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Input = ({placeholder, marginBottom, width,
marginTop, onChangeText, value, marginLeft}) =>{
  return(
    <View style={styles.ViewStyle}>
        <TextInput style={styles.inputStyle}
        placeholder={placeholder}
        marginBottom={marginBottom}
        marginTop={marginTop}
        onChangeText={onChangeText}
        value={value}
        width={width}
        marginLeft={marginLeft}
        >
        </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
    height: 35,
    borderRadius: 8,
    borderColor: '#d9d9d9',
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 18,
    alignSelf: 'center',
    color: '#222222',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'left',
    justifyContent: 'center'


  },
  ViewStyle:{
  marginLeft: 25,
  marginRight: 25,
  }
});

export default React.memo(Input);
