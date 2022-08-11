import React from 'react'
import {View,Text,StyleSheet,Pressable,Button} from 'react-native'

const Calculator = () => {

    const [a, seta] = React.useState();
    const [b, setb] = React.useState();
    const [symbol, setsymbol] = React.useState();

    function handlefive() {
        seta(5)
    }

    function handleseven() {
        setb(7)
    }

    function calculate() {
        return a + b
    }
    return ( 
        <View style={{width:"100%",justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'grey',width:'70%'}}>
                <Text style={Styles.text}>{a}{symbol }{ b}</Text>
            </View>
            <View style={{margin:10}}>
                <Text style={Styles.text}>{ calculate()}</Text>
            </View>
          
                <View style={{flexDirection:'row'}}>
                <Button onPress={() =>
                    setsymbol("+")
            } title='+' />
                <Button onPress={() => {
                    setsymbol("-")
                }} title='-'/>
                </View>
               
            <View style={{ flexDirection: 'row' }}>
              
                <View style={{marginHorizontal:10}}>
                <Button title='5'
                    onPress={handlefive}
                    />
                    </View>
                <Button title='7'
                    onPress={handleseven}
                    style={Styles.text} />
                    
            </View>
        </View>
     );
}
 

const Styles = StyleSheet.create({
    text: {
        fontSize: 30,
        backgroundColor:"grey"
    }
});
export default Calculator;