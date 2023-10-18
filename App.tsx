/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, Image, Text, TextInput, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// export const val = 23
function App(){

  const [response, setResponse] = useState(false)
  const [text, setText] = useState('')

  const styles = StyleSheet.create({
    
    text:{
      backgroundColor:'teal',
      color:'white',
      paddingVertical:20,
      paddingLeft:40,
      fontSize:28,
      fontWeight:'700',
      fontFamily:'monospace',
    },
    box:{
      // flex:1,
      width:100,
      height:100,
      backgroundColor:'skyblue',
    },
    small:{
      // flex:3,
      width:100,
      height:100,  
      backgroundColor:'teal'
    },
    smaller:{
      // flex:1,
      width:100,
      height:100,
      backgroundColor:'brown'
    },
    container:{
      flex:1,
      flexDirection:'column',
      flexWrap:'wrap',
      alignContent:'flex-start'
    },
  })

  return(
    <ScrollView style={styles.container}>
      {/* <Text style={styles.text}>Hello World App!</Text> */}
      <View style={styles.container}>
      <Image
        source={require('./mountain.jpg')}
      />
      <Text
        style={styles.text}
      >Mountains and Plains</Text>
      </View>
      <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2021/06/10/22/43/jellyfish-6327182_1280.jpg'}} style={{width: 450, height:640}}>
        <Text style={{...styles.text, marginTop:240} }>Background Image</Text>
      </ImageBackground>
    
     

    </ScrollView>
  )
}

export default App;
