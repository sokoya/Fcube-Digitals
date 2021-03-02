
import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Image, Alert } from "react-native";
import { connect } from "react-redux";
import { GetAirtelndata} from "../../Redux/Actions/Electricity.action";
import { Picker } from "@react-native-community/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ValidateEmptyField, ValidatePhone } from "../../_helper/Validation";

class PayelectricityScreen extends Component {
 
    constructor(props){
        super(props)
    };

    state={
        dataplanIdError:'',

        /////////////
        dataplanIdHasError:false, 
         userPhone:'',
    
       dataplanId:'',
      userPhoneError:'',

       /////////////
       userPhoneHasError:false, };
    componentDidMount(props){
     this.getdataplan();
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
    HandleBuydataplan =()=>{
      
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
        Alert.alert(this.state.dataplanId, this.state.userPhone)

    };

    getdataplan= async()=>{  await this.props.GetAirtelndata();}
    render(){

        const {dataplan} = this.props;
      //  console.log(dataplan)
        global.currentScreenIndex = 'HomeScreen';
        return(
            <View style={Styles.Container}>
                <Text style={{color:'red'}}>{}</Text>
        <View style ={Styles.FormGroup}>
        <View style={{ alignItems: 'center' }}>
              <Image
              source={require('../../assets/logo.png')}
                style={{
                  width: '50%',
                  height: 80,
                  resizeMode: 'contain',
                  margin: 10,
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
        >{ dataplan.map((item, index)=>(<Picker.Item label ={ item.plan_name + "              -           "  +'\u20A6' + item.amount } value={item.plan_id} />

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
        </View>
        )

    };

};

function MapStateToProps(state){
    return{
     dataplan:state.dp.Dataplan   
    };
}

export default connect( MapStateToProps, {GetAirtelndata,})(PayelectricityScreen);

const Styles= StyleSheet.create({

    Container:{
         flex:1, flexDirection:"column",  margin:20
},
TextInput:{ borderColor:"black", borderWidth:0.8, borderRadius:5, padding:10 },
hasError:{ borderColor:'red',borderWidth:1, borderRadius:5,},
FormGroup:{ marginTop:50 },
Label:{marginBottom:5},
nextButton:{ backgroundColor:"#282828",borderRadius:10, marginBottom:20,  padding:15 },
nextText:{ color:"white", textAlign:'center', fontSize:20},
});