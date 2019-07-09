import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity,  Animated, // provides methods for animating components
  Easing  } from 'react-native';
import { createBottomTabNavigator, createAppContainer,  } from 'react-navigation';

import avater from "../../assests/images/avater.jpg"
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';




 
class HomeScreen extends React.Component {

 
  static navigationOptions = {
      tabBarIcon : <Icon name={"home"} size={25} />,
      tabBarLabel: "Home",
  }
 
  
  componentDidMount(){

  }


  openGithub = () => {
    let url = "https://github.com/nahidmbstu"
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  openTwitter =() => {
    let url = "https://twitter.com/MirthfulNahid"
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  openLinkedIn = () => {
    let url = "https://www.linkedin.com/in/md-nahid-hasan-293617142/";
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));

  }

 
  render() {



    return (
      <View style={{ flex: 1,  paddingHorizontal: 15, paddingVertical: 15, backgroundColor: "#FFFFFF"  }}>
        <View style={{ flexDirection: "row", elevation:3, borderColor:"transparent", borderWidth:1, backgroundColor:"#FFFFFF", borderRadius: 10, paddingVertical: 20, paddingHorizontal: 10 }}>
        <Image source={avater} style={{ height: 100, width: 100, borderRadius:50,  }} />
        <View style={{ flex: 1,flexDirection: "column" }}>
        <Text style={{  
            fontSize: 22,
            fontWeight: '600',
            color: "#333",
            fontFamily: "Montserrat-Bold",
            flexWrap: "wrap",
            paddingHorizontal: 10,
            letterSpacing: 1.1
          }} >
            NAHID HASAN 
        </Text>

           <Text style={{ flexWrap: "wrap", fontSize: 18, letterSpacing: 1.2, paddingHorizontal: 10,   }}>Developer, Human Being, Family Man  </Text>
           <Text style={{ fontSize: 14,letterSpacing: 1.2, paddingHorizontal: 10, }}>Dhaka, BD  </Text>
           </View>

        </View>
        <View style={{ flexDirection: "row",paddingVertical: 10, alignItems: "center" }}>
           <View style={{  width: 50, height: 50, borderRadius: 25, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
           <Icon2 name="graduation-cap" size={25} color={"#FFF"} />
           </View>
           <View style={{ paddingHorizontal: 30 }}>

           <Text style={{  
            fontSize: 16,
            fontFamily: "Montserrat",
            flexWrap: "wrap",
            fontWeight: "700",
            letterSpacing: 1.2

          }}>BSC in ICT, MBSTU  </Text>
           </View>

        </View>
        <View style={{ flexDirection: "row", paddingVertical: 15 }}>
          <Text  style={{  
            fontSize: 18,
            fontFamily: "Montserrat",
            flex: 1, 
            flexWrap: "wrap",
            letterSpacing: 1.2
          }}>EXPERIENCE: </Text>
          <Text style={{  
            fontSize: 16,
            fontFamily: "Montserrat",
            flex: 1, 
            flexWrap: "wrap",
            fontWeight: "700",
            letterSpacing: 1.2
          }}>2 years  </Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 15 }}>
        <Text  style={{  
            fontSize: 18,
            fontFamily: "Montserrat",
            flex: 1, 
            flexWrap: "wrap",
            fontWeight: "400",
            letterSpacing: 1.2
          }}>SKILLS : </Text>
          <Text style={{  
            fontSize: 16,
            fontFamily: "Montserrat",
            flex: 1, 
            flexWrap: "wrap",
            fontWeight: "700",
            letterSpacing: 1.2
          }}>ES6, REACT JS, NODE JS, REACT NATIVE, PYTHON, PHP </Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 15, justifyContent: "space-around" }}>
            <Icon name="social-github" size={30} color={"#333"} onPress={this.openGithub}  />
            <Icon name="social-linkedin" size={30} color={"#283e4a"} onPress={this.openLinkedIn}  />
            <Icon name="social-twitter" size={30} color={"lightblue"} onPress={this.openTwitter}  />
        </View>
        <View style={{ flexDirection: "row", overflow: "hidden", justifyContent: "center"}} >
          <Animated.Image 
          source={require("../../assests/images/welcome.png")} 
          style={{ height: 150, width:150 }} resizeMode="contain" 
          />
        </View>
      </View>
    );
  }
}

class BlogScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon : <Icon name={"docs"} size={25} />,
    tabBarLabel: "Blog"
}
  
  
openMedium = () => {
  let  url = "https://medium.com/@mirthfulnahid";
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));

}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF" }}>
        <Image source={require("../../assests/images/blog.png")} style={{ flex:1, maxWidth: 400, maxHeight: 400}} resizeMode="contain" />
            
        <Text style={{ fontSize: 20, fontFamily:"Poppins", fontWeight: "800",letterSpacing: 1.2, lineHeight: 65  }} > Comming Soon Here!</Text>
        <Text style={{ color: "lightblue", fontWeight: "700",letterSpacing: 1.2 }} onPress={this.openMedium}> READ ON MEDIUM </Text>
      </View>
    );
  }
}

class ContactScreen extends React.Component {


  static navigationOptions = {
    tabBarIcon : <Icon name={"phone"} size={25} />,
    tabBarLabel: "Contact"
  }

  state = {
    showNumber: false
  }

  blinkPhone = () => {
    this.setState({ showNumber: true }, () => {
      setTimeout(() => {
         this.setState({ showNumber: false })
      }, 3000)
    })
  }


    render() {
      return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
         <Image source={require("../../assests/images/contact.png")} style={{flex:1, maxHeight: 450, width: undefined}} resizeMode="contain"  />
          <Text style={{ fontSize: 24, fontFamily: "Poppins", paddingVertical: 15, fontWeight: "700", letterSpacing: 1.2 }}>Contact </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins", letterSpacing: 1.2 }}>Email: nahid.mbstu.ict@gmail.com </Text>
          { this.state.showNumber ? 
          <Text style={{ fontSize: 20, fontFamily: "Poppins", marginVertical: 15 }}> Send An Email :) </Text>
          : 
          <TouchableOpacity onLongPress={this.blinkPhone} style={{ justifyContent: "center", paddingHorizontal: 20, paddingVertical: 15, borderWidth: 1, borderColor: "#333", marginVertical: 15 }} >
            <Text style={{ fontWeight: "700", letterSpacing: 1.4 }}>Tap to see phone</Text>
          </TouchableOpacity>
          } 
        </View>
      );
    }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Blog: BlogScreen,
  Contact: ContactScreen
  }, {
  
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }

 );

export default createAppContainer(TabNavigator);