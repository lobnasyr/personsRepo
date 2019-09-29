import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const Button = ({buttonColor,ButtonText, textColor,
  marginBottom, marginTop, fontSize, onPress, disabled}) => {
  return(
    <View style={styles.ViewStyle}>
      <TouchableOpacity
      style={[styles.ButtonStyle, {backgroundColor: buttonColor, marginBottom: marginBottom,
      marginTop: marginTop}]}
      onPress={onPress}
      disabled={disabled}
      >
          <Text style={[styles.TextStyle, {color: textColor, fontSize: fontSize}]}>
             {ButtonText}
          </Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  TextStyle:{
    color: '#ffffff',
    textAlign:'center',
    paddingBottom: 15,
    paddingTop: 15
  },
  ButtonStyle:{
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  ViewStyle:{
    marginLeft: 25,
    marginRight: 25,
  }
});

export default React.memo(Button);
