/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Loader from '../../Component/Loader';
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from 'react-redux';
import {
  login,
  clearLoginErrorMessage,
} from '../../Redux/Actions/Athentication.action';
import {ValidateEmptyField} from '../../_helper/Validation';
import SuccessAlert from '../../Component/SuccessAlert';
import MonthSelectorCalendar from 'react-native-month-selector'; //add this import line
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  state = {
    showpassword: false,
    showAlert: false,
    PhoneError: '',
    phoneHasError: false,
    passwordHasError: false,
    userPhone: '',
    userPassword: '',
    ErrorMgs: '',
    passwordError: '',
    month:Date,
  };

  showpassword = () => {
    this.setState({showpassword: true});
  };
  hidepassword = () => {
    this.setState({showpassword: false});
  };
  showErrorToast = (mgs) => {
    ToastAndroid.showWithGravityAndOffset(
      mgs,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };
  signInAsync = async () => {
    this.props.clearLoginErrorMessage();
    const {loading, loginSuccess, loginError, errortext} = this.props;
    const {showAlert} = this.state;
    // this.props.navigation.navigate("SecuredScreen")
    try {
      this.setState({phoneHasError: false});
      this.setState({passwordHasError: false});
      this.setState({PhoneError: ''});
      this.setState({passwordError: ''});
      this.setState({ErrorMgs: ''});
      const {userPhone, userPassword} = this.state;

      if (ValidateEmptyField('Email Address', userPhone).isError === true) {
        this.setState({phoneHasError: true});
        this.setState({
          PhoneError: ValidateEmptyField('Email Address', userPhone).Errormgs,
        });
        this.showErrorToast(
          ValidateEmptyField('Email Address', userPhone).Errormgs,
        );
        return false;
      }
      if (ValidateEmptyField('Password', userPassword).isError === true) {
        this.setState({passwordHasError: true});
        this.setState({
          passwordError: ValidateEmptyField('Password', userPassword).Errormgs,
        });
        this.showErrorToast(
          ValidateEmptyField('Password', userPassword).Errormgs,
        );
        return false;
      }

      await this.props.login(userPhone, userPassword);
    } catch (error) {}
  };

  render() {
    return (
      <View style={styles.mainBody}>
        <Loader message="Logging You In" loading={this.props.loading} />


     
        <Text style={{color: 'red', fontSize: 14, textAlign: 'center'}}>
          {' '}
          {this.props.errortext}{' '}
        </Text>

        <View keyboardShouldPersistTaps="handled">
          <View>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={{
                    width: '50%',
                    height: 80,
                    resizeMode: 'contain',
                    margin: 10,
                  }}
                />
              </View>

              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Login to F-CUBE Digital
                </Text>
              </View>
              <View style={styles.SectionStyle}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Feather
                      name="phone"
                      color="#05375a"
                      size={20}
                      style={[
                        styles.icon,
                        this.state.phoneHasError ? styles.hasError : '',
                      ]}
                    />
                    <TextInput
                      style={[
                        styles.inputStyle,
                        this.state.phoneHasError ? styles.hasError : '',
                      ]}
                      onChangeText={(Phone) =>
                        this.setState({userPhone: Phone})
                      }
                      placeholder="Enter Email "
                      placeholderTextColor="grey"
                  

                      //   blurOnSubmit={false}
                    />
                  </View>
                  <Text style={{color: 'red', marginTop: 60, marginBottom: 20}}>
                    {this.state.PhoneError}{' '}
                  </Text>
                </View>
              </View>
              <View style={styles.SectionStyle}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View
                    style={[{flex: 1, flexDirection: 'row', marginTop: 30}]}>
                    <View style={styles.passwordwrapper}>
                      <Feather
                        style={[
                          styles.eye,
                          this.state.passwordHasError ? styles.hasError : '',
                        ]}
                        name="lock"
                        color="#05375a"
                        size={20}
                      />
                      <View
                        style={[
                          {flex: 1, flexDirection: 'row'},
                          styles.Password,
                          this.state.passwordHasError ? styles.hasError : '',
                        ]}>
                        <TextInput
                          onChangeText={(Password) =>
                            this.setState({userPassword: Password})
                          }
                          autoCapitalize="none"
                          placeholder="Enter Password" //12345
                          placeholderTextColor="grey"
                          secureTextEntry={
                            this.state.showpassword ? false : true
                          }
                        />
                      </View>
                      <View style={styles.eye}>
                        {this.state.showpassword ? (
                          <TouchableOpacity onPress={() => this.hidepassword()}>
                            <Text>
                              <Feather name="eye" color="#05375a" size={20} />
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity onPress={() => this.showpassword()}>
                            <Text>
                              <Feather
                                name="eye-off"
                                color="#05375a"
                                size={20}
                              />
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <Text style={{color: 'red', marginTop: 60}}>
                      {this.state.passwordError}{' '}
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this.signInAsync}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: 180}}
                onPress={() =>
                  this.props.navigation.navigate('ForgotPassword')
                }>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 14,
                    marginBottom: 20,
                    marginTop: 10,
                    textDecorationLine: 'underline',
                    fontStyle: 'italic',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <Text style={styles.registerTextStyle}>
                New to F-CUBE DIGITAL ?
              </Text>
              <TouchableOpacity
                style={styles.Registerbutton}
                onPress={() =>
                  this.props.navigation.navigate('RegisterScreen')
                }>
                <Text style={styles.buttonTextStyle}>Register Now</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>

        <View style={styles.container}>
          <AwesomeAlert
            style={{
              modalContainer: {backgroundColor: 'red'},
            }}
            show={this.state.showAlert}
            showProgress={true}
            useNativeDriver={true}
            customView={
              <View>
                <Text>
                  <Feather
                    style={{color: 'red', padding: 10}}
                    name="alert-circle"
                    color="#05375a"
                    size={50}
                  />
                </Text>
              </View>
            }
            message={this.state.ErrorMgs}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            fontSize={20}
            messageStyle={{color: 'red', fontSize: 18, padding: 10}}
            titleStyle={{fontSize: 25, padding: 0, margin: 0}}
            contentContainerStyle={{width: 400}}
            cancelText="No, cancel"
            confirmText="OK, Close"
            confirmButtonColor="red"
            onCancelPressed={() => {
              this.hideAlert();
            }}
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loggingIn,
    errortext: state.auth.errorMessage,
    loginSuccess: state.auth.loginsuccess,
    loginError: state.auth.loginError,
  };
}
export default connect(mapStateToProps, {login, clearLoginErrorMessage})(
  LoginScreen,
);
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  Row: {
    height: 500,
  },
  Nextbutton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  TextInput: {borderWidth: 0.5, width: 280, padding: 5, borderRadius: 5},
  RowFlex: {flexDirection: 'row'},
  PickerStyle: {borderWidth: 0.5, width: 100, marginRight: 5, borderRadius: 5},
  hasError: {borderColor: 'red', borderWidth: 1},
  OPacity: {opacity: 0.5},
});

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    width: wp('90%'),

    alignItems: 'center',
    margin: wp('5%'),
  },
  SectionStyle: {
    height: 40,
    marginBottom: 20,
    marginTop: 10,
    width: wp('80%'),
  },
  buttonStyle: {
    backgroundColor: '#fec107',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'red',
    paddingTop: 5,
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    marginTop: 50,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,

    fontSize: 16,
  },
  inputStyle: {
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: wp('67%'),
    borderColor: 'black',
  },
  icon: {
    width: wp('13%'),
    color: 'black',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 0.5,
    paddingTop: 15,
    height: 50,
    padding: 10,

    borderColor: 'black',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  Registerbutton: {
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#282828',
    color: 'white',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 5,
  },
  hasError: {borderColor: 'red', borderWidth: 1},
  noError: {borderColor: 'green', borderWidth: 1},
  eye: {
    width: wp('13%'),

    paddingTop: 15,
    height: 50,
    padding: 10,
    margin: 0,
    borderColor: 'black',
  },
  Password: {
    height: 50,
    width: wp('70%'),
    borderColor: 'black',
  },
  passwordwrapper: {
    flexDirection: 'row',
    color: 'black',

    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,

    width: wp('80%'),
    borderColor: 'black',
  },
});
