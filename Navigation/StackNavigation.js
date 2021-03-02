import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../Screens/SecuredScreens/HomeScreen';
import NavigationDrawerHeader from '../Component/NavigationDrawerHeader';
import CustomizeSidebarmenu from '../Component/CustomizeSidebarmenu';
import TransactionScreen from '../Screens/SecuredScreens/Transactionhistory';
import ProfileScreen from '../Screens/SecuredScreens/Profile';
import MtndataScreen from '../Screens/QuickAccess/mtndata';
import BuyairtimeScreen from '../Screens/SecuredScreens/Buyairtimes';
import BuydataScreen from '../Screens/SecuredScreens/Buydata';
import PaybillsScreen from '../Screens/SecuredScreens/Paybills';

import GlodataScreen from '../Screens/QuickAccess/Glodata';
import EtisalatdataScreen from '../Screens/QuickAccess/Etisalatdata';

import AirteldataScreen from '../Screens/QuickAccess/airteldata';
import PaysatalliteScreen from '../Screens/QuickAccess/Paysatallite';
import PayelectricityScreen from '../Screens/QuickAccess/Payelectricity';
import Dstv from '../Screens/QuickAccess/Dstv';
import Startime from '../Screens/QuickAccess/Startime';
import Gotv from '../Screens/QuickAccess/Gotv';
import Ibadan from '../Screens/QuickAccess/Ibadan';
import Enugu from '../Screens/QuickAccess/Enugu';
import Ph from '../Screens/QuickAccess/Ph';
import Eko from '../Screens/QuickAccess/Eko';
import Ikeja from '../Screens/QuickAccess/Ikeja';
import Abuja from '../Screens/QuickAccess/Abuja'
import ChangepasswordScreen from '../Screens/SecuredScreens/Changepassword';
import EditprofileScreen from '../Screens/SecuredScreens/Editprofile';
import fundewallet from '../Screens/SecuredScreens/fundwallet';
import Bankdetail from '../Screens/SecuredScreens/Bankdetail';
import Paystack from '../Screens/QuickAccess/Paystack';



const Home_ActivityStack = createStackNavigator({

    First:{
        screen:HomeScreen,
        navigationOptions:({navigation})=>({
            title: 'F-CUBE DIGITALS',
            headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
            headerStyle: {
              backgroundColor: '#282828',
            },
            headerTintColor: '#fff',
        }),
    },
    
    Mtndata:{
      screen:MtndataScreen,
      navigationOptions:({
        title: 'MTN DATA',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
  
    Glodata:{
      screen:GlodataScreen,
      navigationOptions:({
        title: 'GLO DATA',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },

    Etisalatdata:{
      screen:EtisalatdataScreen,
      navigationOptions:({
        title: 'ETISALAT DATA',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },

    Airteldata:{
      screen:AirteldataScreen,
      navigationOptions:({
        title: 'AIRTEL DATA',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },

    Paysatallite:{
      screen:PaysatalliteScreen,
      navigationOptions:({
        title: ' Pay Satallite Tv',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Payelectricity:{
      screen:PayelectricityScreen,
      navigationOptions:({
        title: 'Pay Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    GotvScreen:{
      screen:Gotv,
      navigationOptions:({
        title: ' Pay GOTV Bill',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    DstvScreen:{
      screen:Dstv,
      navigationOptions:({
        title: ' Pay DSTV Bill',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    StartimeScreen:{
      screen:Startime,
      navigationOptions:({
        title: ' Pay Star Time Bill',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Enugu:{
      screen:Enugu,
      navigationOptions:({
        title: ' Pay Enugu Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Ph:{
      screen:Ph,
      navigationOptions:({
        title: ' Pay Portharcourt Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Eko:{
      screen:Eko,
      navigationOptions:({
        title: ' Pay EKO Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Ikeja:{
      screen:Ikeja,
      navigationOptions:({
        title: ' Pay Ikeja Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Abuja:{
      screen:Abuja,
      navigationOptions:({
        title: ' Pay Abuja Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    Ibadan:{
      screen:Ibadan,
      navigationOptions:({
        title: ' Pay Ibadan Electricity',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    fundwallet:{
      screen:fundewallet,
      navigationOptions:({
        title: ' FUND WALLET',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
    bank:{
      screen:Bankdetail,
      navigationOptions:({
        title: ' FUND WALLET',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },

    paystack:{
      screen:Paystack,
      navigationOptions:({
        title: ' FUND WALLET',
        headerStyle: {
         backgroundColor: '#282828',
        },
        headerTintColor: '#fff',

      })
    },
   
});

const ProfileStack = createStackNavigator({

  First:{
    screen:ProfileScreen,
    navigationOptions:({navigation})=>({
      title: 'Profile Management',
      headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',
    }),
    
  },

  Editprofile:{
    screen:EditprofileScreen,
    navigationOptions:({
      title: 'EDIT PROFILE',
      headerStyle: {
       backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    })
  },
  Changepassword:{
    screen:ChangepasswordScreen,
    navigationOptions:({
      title: 'CHANGE PASSWORD',
      headerStyle: {
       backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    })
  },




});

const PaybillSack = createStackNavigator({
  First:{
    screen:PaybillsScreen,
    navigationOptions:({navigation})=>({
      title: 'Pay Bills',
      headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    }),
  }

});

const BuyDataStack = createStackNavigator({


  First:{
    screen:BuydataScreen,
    navigationOptions:({navigation})=>({
      title: 'Buy  Data ',
      headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    }),
  }

});

const TransactionStack = createStackNavigator({
  First:{
    screen:TransactionScreen,
    navigationOptions:({navigation})=>({
      title: 'Transaction History',
      headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    }),
  }
});
const BuyAirtimeStack = createStackNavigator({
  First:{
    screen:BuyairtimeScreen,
    navigationOptions:({navigation})=>({
      title: 'Buy Airtime',
      headerLeft:()=><NavigationDrawerHeader navigationProps={navigation}  />,
      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',

    }),
  }

});

const DrawerNavigation = createDrawerNavigator(
    {

      HomeScreen:{
        screen:Home_ActivityStack,
        navigationOptions:{ drawerLabel:" Home "}
      },
      ProfileScreen:{
        screen:ProfileStack,
        navigationOptions:{ drawerLabel:"Profile"}
      },
      
      BuyairtimeScreen:{
        screen:BuyAirtimeStack,
        navigationOptions:{ drawerWidth:'Air Time'}
      },
      TransactionScreen:{
        screen:TransactionStack,
        navigationOptions:{drawerLabel:"Transaction History"},
        
      },

      BuydataScreen:{
        screen:BuyDataStack,
        navigationOptions:{drawerLabel:"Buy Data"},
      },
      PaybillScreen:{
        screen:PaybillSack,
        navigationOptions:{drawerLabel:"Pay Bill"},
      }
   


    },
    {  
        contentComponent: CustomizeSidebarmenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
    
);


export default DrawerNavigation;








