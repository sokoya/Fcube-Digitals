import React, { Component } from 'react';
import { StyleSheet, View, Modal,Text, ActivityIndicator } from 'react-native';
  import AwesomeAlert from 'react-native-awesome-alerts';
import { TouchableOpacity } from 'react-native-gesture-handler';
  import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../_services/Navigation.service';
 

class SuccessAlert extends Component{
    constructor(props){

        super(props);
this.bootstrapAsync()
    };
    state = { show:this.props.loadingalert}

    bootstrapAsync = async () => {
      setTimeout(async () => {
        this.setState({show:false})
  
    }, 5000);
  
    };
    render(){

        return(
          <Modal
          
          transparent={true}
          animationType={'slide'}
          visible={this.state.show}
           
          onRequestClose={() => {
            this.setState({show:false})
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
            <Text style={{color:'green', textAlign:'center', margin:15, fontSize:14}}>{ this.props.message} </Text>
             
         
              
            </View>
          </View>
        </Modal>
        );
    };
};


export default SuccessAlert;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'white',
    height: 200,
    width: 300,
    borderRadius: 10,
    padding:20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});