/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React, { Component } from 'react';
import {connect} from "react-redux";
//Import all required component
import { View, StyleSheet, Text, Alert } from 'react-native';
import NumberFormat from 'react-number-format';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';
import {loggedOut, clearLoginErrorMessage} from '../Redux/Actions/Athentication.action'
import { Registerlogout } from '../Redux/Actions/Register.action'
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'

class CustomSidebarMenu  extends Component {

  constructor(props) {
    super(props);
    this.state = { username:'',wallet:'', showAlert: false, };
    this.getuser()
  };

  getuser =async ()=>{

    const us = await AsyncStorage.getItem('userName');
     this.setState({username:us}) 
     const user = await AsyncStorage.getItem('user');
   
     const JsonResult = JSON.parse(user);
     
     this.setState({wallet:JsonResult.wallet})
   }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  render() {
    const {showAlert} = this.state;
  let items = [
    {
      navOptionName:    ' Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Profile Management',
      screenToNavigate: 'ProfileScreen',
    },

    {
      navOptionName: 'Airtimes Purchase',
      screenToNavigate: 'AirtimesScreen',
    },
    {
      navOptionName: 'Bill Payment',
      screenToNavigate: 'BillScreen',
    },
    {
      navOptionName: ' Pay Now ',
      
      screenToNavigate: 'PayLoan',

    },

    { 
      
      navOptionName: ' Apply For Loan',
      
      screenToNavigate: 'LoanScreen',
    },

    {
      navOptionName: 'Customer Service',
      screenToNavigate: 'CustomerScreen',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
    {navOptionName: 'Loan History',
    screenToNavigate:'HistoryScreen'
  }

  ,
    {navOptionName: 'Support',
    screenToNavigate:'SupportScreen'
  }
  ];


  const signOutAsync = async () => {
    await  this.props.loggedOut();
    await this.props.Registerlogout();
    await   AsyncStorage.clear();
    await  this.props.navigation.navigate('WelcomeScreen');
  };

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      this.props.navigation.toggleDrawer();
      this.setState({showAlert:true})
     
    } else {
      this.props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      this.props.navigation.navigate(screenToNavigate);
    }
  };
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
    
        <Text style={stylesSidebar.profileHeaderText}> {this.state.username} (<NumberFormat
                value={this.state.wallet}
               displayType={'text'}
               thousandSeparator={true}
            prefix={'\u20A6'}
            renderText={formattedValue => <Text style={[ stylesSidebar.LoanBalance]}>{formattedValue}.00</Text>} // <--- Don't forget this!
    />) </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: '100%', flex: 1 }}>
    
       
          <View
          
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'red',
              borderBottomWidth:1,
              borderBottomColor:'white',
              backgroundColor:
                global.currentScreenIndex === "HomeScreen"
                  ? 'white'
                  : '#282828',
            }}
         
            onStartShouldSetResponder={() =>
              handleClick(2, "HomeScreen")
            }>
 <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "HomeScreen"? stylesSidebar.ActiveListText:'']}>
        <Feather
      name="home"
      size={20}
      /> 
          </Text>
             <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "HomeScreen"? stylesSidebar.ActiveListText:'']}>
              Home 
          
            </Text>
          </View>
   

        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "BuyairtimeScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "BuyairtimeScreen")
          }>
             <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "BuyairtimeScreen"? stylesSidebar.ActiveListText:'']}>
      <Feather
    name="file"
    size={20}
    /> </Text>
           <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "BuyairtimeScreen"? stylesSidebar.ActiveListText:'']}>
          Airtime Purchase
        
          </Text>
        </View>
 
        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "BuydataScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "BuydataScreen")
          }>
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "BuydataScreen"? stylesSidebar.ActiveListText:'']}>
          
      <Feather
    name="file"
    size={20}
    /> </Text>
<Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "BuydataScreen"? stylesSidebar.ActiveListText:'']}>
          
        Buy Data
        
          </Text>
        </View>
 
 
        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "TransactionScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "TransactionScreen")
          }>
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "TransactionScreen"? stylesSidebar.ActiveListText:'']}>
          
      <Feather
    name="file"
    size={20}
    /> </Text>
<Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "TransactionScreen"? stylesSidebar.ActiveListText:'']}>
          
        Transaction History
        
          </Text>
        </View>
 
  
        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "PaybillScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "PaybillScreen")
          }>
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "PaybillScreen"? stylesSidebar.ActiveListText:'']}>
          
      <Feather
    name="file"
    size={20}
    /> </Text>
<Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "PaybillScreen"? stylesSidebar.ActiveListText:'']}>
          
        Pay Bills
        
          </Text>
        </View>
 
           
        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "ProfileScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "ProfileScreen")
          }>
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "ProfileScreen"? stylesSidebar.ActiveListText:'']}>
      <Feather
    name="user"

    size={20}
    /> </Text>
     <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "ProfileScreen"? stylesSidebar.ActiveListText:'']}>
             Profile Management
        
          </Text>
        </View>
 
    
        <View
          
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            color: 'white',
            borderBottomWidth:1,
            borderBottomColor:'white',
            backgroundColor:
              global.currentScreenIndex === "SupportScreen"
                ? 'white'
                : '#282828',
          }}
       
          onStartShouldSetResponder={() =>
            handleClick(2, "SupportScreen")
          }>
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "SupportScreen"? stylesSidebar.ActiveListText:'']}>
      <Feather
    name="user"

    size={20}
    /> </Text>
     <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "SupportScreen"? stylesSidebar.ActiveListText:'']}>
             Support
        
          </Text>
        </View>
 

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Log Out"
          message="Are you sure you want to log out"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, Log me Out"
          confirmButtonColor="red"
          cancelButtonColor='green'
          contentContainerStyle={{width:400 }}
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
            signOutAsync();
           
          }}
        />
          <View
          
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              borderBottomWidth:1,
              borderBottomColor:'white',
              backgroundColor:
                global.currentScreenIndex === "logout"
                  ? 'grey'
                  : '#282828',
            }}
         
            onStartShouldSetResponder={() =>
              handleClick(2, "logout")
            }>
        <Feather
      name="log-out"
      color="white"
      size={20}
      /> 
            <Text style={[stylesSidebar.ListText,  global.currentScreenIndex === "logout"?stylesSidebar.ActiveListText:'']}>
            Log Out
          
            </Text>
          </View>
   

   
     
      </View>
    </View>
  );
 
  
};
};
function mapStateToProps(state){
 
  return {
    loading:state.auth.loggingIn,
    errortext:state.auth.errorMessage,
    loginsuccess:state.auth.loginsuccess
  
  };


}

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
   
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    padding: 25,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize:hp('2%'),
  },
  profileHeaderLine: {
    height: 1,
    
    backgroundColor: '#e2e2e2',
    marginTop:hp('1%'),
  
  },
  ListText:{ color:'white', marginLeft:10, fontSize:hp('2%'), },
  ActiveListText:{ color:'#282828', marginLeft:10, fontSize:hp('2%') }
  
});

export default connect(mapStateToProps, {loggedOut, clearLoginErrorMessage,Registerlogout})(CustomSidebarMenu);