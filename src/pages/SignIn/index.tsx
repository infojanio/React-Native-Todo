import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';
import OneSignal from 'react-native-onesignal'; //Chave do OneSignal -> App ID: 222edae0-754b-4bcb-8f84-58ffdb251dcd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303293',
  },
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 28,
    color: '#FFF',
  },
});

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useAuth();
  console.log(signed); //inicia com logado (false)
  console.log(user);

  //Notificações push
  useEffect(() => {
    OneSignal.init('222edae0-754b-4bcb-8f84-58ffdb251dcd');

    OneSignal.addEventListener('opened', onOpened);

    return () => OneSignal.removeEventListener('opened', onOpened);
  }, []);

  function onOpened(result) {
    console.log('Message: ', result.notification.payload.body);
    console.log('Result: ', result);
  }

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Teste Weverkley </Text>

      <Button title=" logar" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
