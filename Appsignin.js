import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';


export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.jogizz}>Jogizz</Text>
      <Text style={{ height: 16 }}></Text>
      <Text style={styles.welcome}>Welcome back 👋</Text>
      <Text style={{ height: 10 }}></Text>
      <Text>Let's log in. Apply to Jobs!</Text>
      <View>
        <Text style={{ height: 36 }} />
        <TextInput
          style={styles.name}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={{height:30,}}/>
      <View style={styles.horizontalLineContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.horizontalLineText}>or continue with</Text>
        <View style={styles.horizontalLine} />
      </View>
      <View style={{height:30,}}/>
      <View style={styles.imgrow}>
      <Image
      source={require('./assets/Group 56.png')}
      style={{ width: 100, height: 100 }}
    />
      <Image
      source={require('./assets/Group 55.png')}
      style={{ width: 100, height: 100 }}
    />
    <Image
      source={require('./assets/Group 54.png')}
      style={{ width: 100, height: 100 }}
    />
    </View>
    <View style={{height:20,}}/>
    <Text style={{textAlign: 'center',}}>Don't have an account? <Text style={{color: '#0078FF',}}>Register</Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  jogizz: {
    fontSize: 22,
    marginTop: 70,
    color: '#356899',
  },
  welcome: {
    fontSize: 27,
  },
  name: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    marginRight: 35,
  },
  emailInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    marginRight: 35,
  },
  loginButton: {
    height: 70,
    borderRadius: 15,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  horizontalLineText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  imgrow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

});