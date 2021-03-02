/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React from 'react';

//Import all required component
import { StyleSheet, View, Modal,Text, ActivityIndicator } from 'react-native';

const Loader = props => {
  const { loading,   message, ...attributes } = props;

  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={loading}
      
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
        <Text style={{color:'green', textAlign:"center", margin:16, fontSize:15}}>{ message} </Text>
          <ActivityIndicator
        animating={loading}
        color="green"
        size="large"/>
          
          <Text style={{color:'green', textAlign:"center", margin:16, fontSize:15}}> Please Wait . . . . . </Text>
        </View>
      </View>
    </Modal>
  );
};
export default Loader;

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
    height: 150,
    width: 250,
    borderRadius: 10,
    padding:20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});