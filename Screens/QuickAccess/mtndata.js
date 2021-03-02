import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image, Alert } from "react-native";
import { connect } from "react-redux";
import { GetMtndata, BuyData , ClearErrorMgs} from "../../Redux/Actions/Data.action";
import { Picker } from "@react-native-community/picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";
import AsyncStorage from "@react-native-community/async-storage";
import AwesomeAlert from 'react-native-awesome-alerts';
import Feather from 'react-native-vector-icons/Feather';
import Loader from "../../Component/Loader";

class MtndataScreen extends Component {
 
    constructor(props){
        super(props)
    };

    state={
        dataplanIdError:'',

        /////////////
        dataplanIdHasError:false, 
         userPhone:'',
         showsuccess:false,
       dataplanId:'',
      userPhoneError:'',

       /////////////
       userPhoneHasError:false, };
    componentDidMount(props){
      this.props.ClearErrorMgs()
     this.getdataplan();
    }
    Hide= ()=>{

      this.props.navigation.navigate('LoginScreen');
      this.props.navigation.navigate('First');
    }
    handlephone= (value)=>{
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        const Response3 =ValidatePhone(value);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        } else{
        this.setState({disable:false})
        this.setState({userPhone:value})}
      };
    HandleBuydataplan = async ()=>{
      const {dataplan, success, errorMgs, loading} = this.props;
        const {userPhone, dataplanId} = this.state
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        this.setState({dataplanIdError:''});
        this.setState({dataplanIdHasError:false});
        const Response3 =ValidatePhone(userPhone);
        if(Response3.isError === true){
          
          this.setState({userPhoneError:Response3.Errormgs});
          this.setState({userPhoneHasError:true});
          return false;
        
        }
        this.setState({userPhoneError:''});
        this.setState({userPhoneHasError:false});
        const Response =ValidateEmptyField("Data Plan", dataplanId);
        if(Response.isError === true){
          
          this.setState({dataplanIdError:Response.Errormgs});
          this.setState({dataplanIdHasError:true});
          return false;
        }
        this.setState({dataplanIdError:''});
        this.setState({dataplanIdHasError:false});
       
        
        const id = await AsyncStorage.getItem('id')
        await this.props.BuyData(this.state.userPhone,'mtn',this.state.dataplanId,id)
        success? this.setState({showsuccess:true}):''
       // Alert.alert(this.state.dataplanId, this.state.userPhone)
       console.log(id);
       console.log(this.state.dataplanId)

    };

    getdataplan= async()=>{  await this.props.GetMtndata();}
    render(){

        const {dataplan, success, errorMgs, loading} = this.props;
      //  console.log(dataplan)
        global.currentScreenIndex = 'HomeScreen';

        return(
            <ScrollView style={Styles.Container}>
              
               <Loader message="Processing Your Transaction.." loading={loading} />
                <Text style={{color:'red', textAlign:"center", fontSize:18}}>{errorMgs}</Text>
        <View style ={Styles.FormGroup}>
        <View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/mtn.png')}
                style={{
                  width: '50%',
                 
                  resizeMode: 'contain',
                 
                }}
              />
            </View></View>
        <View style ={Styles.FormGroup}>
         <Text style={Styles.Label}>Enter Phone Number</Text>

         <TextInput style={[Styles.TextInput, this.state.userPhoneHasError?Styles.hasError:'']}
            placeholder="    Phone Number"
          onChangeText={Phone=>this.setState({userPhone:Phone})}
          onChangeText= {ph=>this.handlephone(ph) }
            placeholderTextColor="black"
            keyboardType="numeric"
            returnKeyType="next"
         ></TextInput><Text style={{color:'red'}}>{this.state.userPhoneError}</Text>
        </View>
        <View style={Styles.FormGroup}>  
        <Text style={Styles.Label}>Select Data Plan </Text>
         <View  style={[ this.state.dataplanIdHasError? Styles.hasError:{borderColor:"black", borderWidth:0.8, borderRadius:5}]}> 
        <Picker
        selectedValue={ this.state.dataplanId}
          onValueChange={(itemValue, itemIndex) => this.setState({dataplanId:itemValue})}
        >
           <Picker.Item label=" Select Data Plan" value=""/>
          { dataplan.map((item, index)=>(<Picker.Item key={index} label ={ item.plan_name + "    -   "  +'\u20A6' + item.amount } value={item.plan_id} />

        ))}</Picker></View><Text style={{color:'red'}}>{this.state.dataplanIdError}</Text></View> 

        <View style ={Styles.FormGroup}>
    
        <TouchableOpacity 
       onPress={this.HandleBuydataplan}
           style={ Styles.nextButton}  >
            <Text style= {Styles.nextText}>
             Buy Data Plan Now
            </Text>
          </TouchableOpacity>
    
        </View>


        <View>
    
     
    <AwesomeAlert style={{
    
      modalContainer:{backgroundColor:'green'}, 
    }}
      show={success}
      
      showProgress={true}
      useNativeDriver={true}
    
      customView={ <View>
        <Text>
          <Feather 
        style={{color:'green', padding:10}} 
                   name="check-circle"
                   color="green"
                   size={50}
             />
              </Text>
              
              </View>}
      message="Transaction Successfull"
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={true}
    
      fontSize = {20}
      messageStyle= {{  color:'green', textAlign:'center', fontSize:18, padding:10}}
      titleStyle={{fontSize:25, padding:0, margin:0}}
      
    
      contentContainerStyle={{width:400 }}
      cancelText="No, cancel"
      confirmText="OK, Proceed"
      confirmButtonColor="green"

      onConfirmPressed={() => {
        this.Hide()
      }}
    />
    </View>

     </ScrollView>
        )

    };

};

function MapStateToProps(state){
    return{
     dataplan:state.dat.Dataplan ,
     success:state.dat.datasuccess,
     loading:state.dat.dataloading,
     errorMgs:state.dat.errorMgs  
    };
}

export default connect( MapStateToProps, {GetMtndata, ClearErrorMgs, BuyData})(MtndataScreen);

const Styles= StyleSheet.create({

    Container:{
         flex:1, flexDirection:"column",  margin:20
},
TextInput:{ borderColor:"black", borderWidth:0.8, borderRadius:5, padding:10 },
hasError:{ borderColor:'red',borderWidth:1, borderRadius:5,},
FormGroup:{ marginTop:30 },
Label:{marginBottom:5},
nextButton:{ backgroundColor:"#282828",borderRadius:10, marginBottom:20,  padding:15 },
nextText:{ color:"white", textAlign:'center', fontSize:20},
});