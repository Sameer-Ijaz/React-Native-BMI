import React from 'react';
import { View, Text, TextInput,StyleSheet, Button } from 'react-native';

const Input = (props) => {
    const [height, setheight] = React.useState(0);
    const [weight, setweight] = React.useState(0);
    const [BMI, setBMI] = React.useState(0);

    function handleheight(height) {
        setheight(height);
    }

    function handleweight(weight) {
        setweight(weight)
    };

   
    return (
        <View style={Styles.container}>
            <Text>Height(m)</Text>
            <View style={Styles.inputText}>
                <TextInput placeholder='e.g 1.80' onChangeText={handleheight} />
                </View>
            <Text>Weight(kg)</Text>
            <View style={Styles.inputText}>
                <TextInput placeholder='e.g 96' onChangeText={handleweight} />
            </View>

            <Button title='Calculate BMI' onPress={() => {
                props.calculateBMI(height, weight);
            }} />
        </View>
     )
    };


const Styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    inputText: {
        borderWidth: 1,
        borderColor: "#cccc",
        marginBottom: 10,
        width: '70%',
        padding:13,
        backgroundColor: '#e4d0ff',
        color: '120438',
        borderRadius:6
        
    }
})
 
export default Input;