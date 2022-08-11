import React from 'react';
import { View, Text } from 'react-native';

const Result = (props) => {

    function result() {
        if (props.BMI < 18.5) {
            return "UnderWeight"
        }
        else if (props.BMI> 18.5 && props.BMI< 26) {
            return "Normal"
        }
        else if (props.BMI > 25 && props.BMI < 31) {
            return "OverWeight"
        }
        else if (props.BMI > 31){
            return "Obese"
        }
    }

    return (  
        <View >
            <View style={{marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'300'}}>Your BMI is {props.BMI} and You're {result()}</Text>
                </View>
        </View>
    );
    
}


export default Result;