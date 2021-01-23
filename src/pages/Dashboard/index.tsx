import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';
//estido da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();
  //deslogar
  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button
        title="Listar To do"
        onPress={() => {
          navigation.navigate('ListTodos');
        }}
      />
      <Button title="Deslogar" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
