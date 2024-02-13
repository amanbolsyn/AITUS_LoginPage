import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.window}>

    

      <View style={styles.body} >
        <Image style = {styles.ImageStyle} 
              source={require('./assets/AITU_logo.png')} />
        <TextInput
           style={styles.TextInputStyle}
           placeholder="Username / email" />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Password" />
        <TouchableOpacity onPress={() => console.log("Forgot password was pressed")}>
          <Text style={styles.linkStyle}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ButtonStyle}>
        <Button title="Sign In" onPress = {() => console.log("Sign In was pressed")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    width: "100%",
    flex: 3, 
    justifyContent:"flex-end",
    alignItems: "center",
  },

  ImageStyle: {
      marginBottom: 30,
      opacity: 0.5
  },

  TextInputStyle: {
    borderWidth: 1,
    width: 250,
    padding: 7,
    margin: 7,
  },

  linkStyle: {
    width: 250,
    color: "blue",
    marginLeft: 7,
    marginRight: 7,
   
  },

  ButtonStyle: {
     flex: 2,
     width: 250,
     justifyContent:"center" ,
  },



});
