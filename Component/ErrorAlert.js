import React, { Component } from "react";
import { View, Text, 
    StyleSheet,
    ScrollView, TextInput,
    TouchableOpacity, 
    Alert} from 'react-native';
  import AwesomeAlert from 'react-native-awesome-alerts';
  import Feather from 'react-native-vector-icons/Feather';
import NavigationService from "../_services/Navigation.service";
 

class ErrorAlert extends Component{
    constructor(props){

        super(props);
    };


    render(){

        return(

            <View>
    
     
            <AwesomeAlert style={{
            
              modalContainer:{backgroundColor:'red'}, 
            }}
              show={this.props.showalert}
              showProgress={true}
              useNativeDriver={true}
            
              customView={ <View>
                <Text>
                  <Feather 
                style={{color:'red', padding:10}} 
                name="alert-circle"
                           color="red"
                           size={50}
                     />
                      </Text>
                      </View>}
              message={this.props.message}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={false}
            
              fontSize = {20}
              messageStyle= {{  color:'red', textAlign:'center', fontSize:18, padding:10}}
              titleStyle={{fontSize:25, padding:0, margin:0}}
              
            
              contentContainerStyle={{width:400 }}
              cancelText="No, cancel"
              cancelButtonColor="red"
              onCancelPressed={() => {
               // this.props.navigation.navigate('HomeScreen');
                NavigationService.navigate(this.props.navigateto)
              }}
            />
            </View>
        );
    };
};


export default ErrorAlert;