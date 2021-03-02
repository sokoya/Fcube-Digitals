//Import React
import React, {useState} from 'react';

//Import all required component
import { View, Text,TextInput,Keyboard, TouchableOpacity,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const PasswordScreen = (props) => {

  let [userPhone, setUserPhone] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [success, setSuccess] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userPhone) {
      alert(' Phone Number is Required');
      return;
    }
    if (!userPassword) {
      alert('Password is Required');
      return;
    }
  }
  global.currentScreenIndex = 'PasswordScreen';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 70 }}>
      <Text style={{ fontSize: 30, margin: 20 }}>Change Password</Text>
    

      <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Enter Old Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>


            <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Enter New Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>

            <View style={styles.SectionStyle}>
            <View style={{flex:1, flexDirection:"row"}} >
            <Feather style={styles.icon} 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
              <TextInput

              
style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                
                placeholder="Confirm New Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
               
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Change Password</Text>
            </TouchableOpacity>
    </View>
  );
};
export default PasswordScreen;


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop:200
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
    borderWidth: 0.5,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    width:350,
    borderColor: 'black',
  },
  icon: {
   width:40,
    color: 'black',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    borderWidth: 0.5,
    paddingTop:10,
    padding:10,
    
    borderColor: 'black',
  },
  registerTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    backgroundColor: 'green',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'red',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width:300
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});