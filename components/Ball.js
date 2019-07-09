import React from "react";
import { View, Text } from "react-native";


class Ball extends React.Component {
    render(){
    return(
     <View style={Styles.ballContainer}>
         <Text style={Styles.textStyle} >Some Text 2</Text>
     </View>);

}

}


const Styles = {
    ballContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        margin: 20,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center"
    }

}

export default Ball;


