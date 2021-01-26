import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";

function LoginScreen(props) {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    return (
    <Screen style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/mii-logo.png')}/>
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        icon="email"
        placeholder="Email"
      />
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder="Password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
