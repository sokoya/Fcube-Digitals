import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SuccessAlert from '../Component/SuccessAlert';
import ForgotPassword from '../Screens/AuthScreens/ForgotPassword';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import otpScreen from '../Screens/AuthScreens/otp';
import RegisterScreen from '../Screens/AuthScreens/RegisterScreen';
import ResetPasswordScreen from '../Screens/AuthScreens/Resetpassword';
import SplashScreen from '../Screens/AuthScreens/SplashScreen';
import WelcomeScreen from '../Screens/AuthScreens/WelcomeScreen';
import DrawerNavigation from './StackNavigation';
import ForgotpasswordScreen from '../Screens/AuthScreens/ForgotPassword';

const Auth_ActivityStack = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {headerShown: false},
  },

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',

      headerStyle: {
        backgroundColor: '#282828',
      },

      headerTintColor: '#fff',
    },
  },

  ForgotPassword: {
    screen: ForgotpasswordScreen,
    navigationOptions: {
      title: 'Password Recovery ',

      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register ',

      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',
    },
  },
  Otp: {
    screen: otpScreen,
    navigationOptions: {
      title: 'OTP ',

      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',
    },
  },

  ResetpasswordScren: {
    screen: ResetPasswordScreen,
    navigationOptions: {
      title: 'Reset Password ',

      headerStyle: {
        backgroundColor: '#282828',
      },
      headerTintColor: '#fff',
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    SplashScreen: {
      /* SplashScreen which will come once for 5 Seconds */
      screen: SplashScreen,
      navigationOptions: {
        /* Hiding header for Splash Screen */
        headerShown: false,
      },
    },
    AuthScreen: {
      screen: Auth_ActivityStack,
    },
    SecuredScreen: {
      screen: DrawerNavigation,
    },
  }),
);

export default AppContainer;
