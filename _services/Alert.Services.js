
import React, { useState } from 'react' ;
//Import all required component
import { View, Text, 
  StyleSheet,
  ScrollView, TextInput,
  TouchableOpacity, 
  Alert} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';

const AlertServices = props =>{
 const [closealert, setclosealert]= useState(false)

    const hideAlert = () => {
      props.showAlert = false;

       };
    return(

        
      <View>

 
      <AwesomeAlert style={{
      
        modalContainer:{backgroundColor:'red'}, 
      }}
        show={props.showAlert, closealert}
        showProgress={true}
        useNativeDriver={true}
      
        customView={ <View>
          <Text>
            <Feather 
          style={{color:'red', padding:10}} 
                     name="alert-circle"
                     color="#05375a"
                     size={50}
               />
                </Text>
                </View>}
        message={props.Text}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
      
        fontSize = {20}
        messageStyle= {{  color:'red', fontSize:18, padding:10}}
        titleStyle={{fontSize:25, padding:0, margin:0}}
        
      
        contentContainerStyle={{width:400 }}
        cancelText="No, cancel"
        confirmText="OK, Close"
        confirmButtonColor="red"
      
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
      </View>

    );
};


export default AlertServices;