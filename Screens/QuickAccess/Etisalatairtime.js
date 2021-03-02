import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

class EtisalatairtimeScreen extends Component {
 
    constructor(props){
        super(props)
    };

    render(){
        global.currentScreenIndex = 'HomeScreen';
        return(
            <View>
                <Text> Buy Airtime Screen</Text>
            </View>
        )

    };

};

export default EtisalatairtimeScreen;