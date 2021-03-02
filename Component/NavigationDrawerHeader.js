/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
//Import all required component
import { View, Image, TouchableOpacity } from 'react-native';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
     props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        
      <Feather  style={{  marginLeft: 15 }}
      name="align-left"
      color="white"
      size={30}
      /> 
      
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;