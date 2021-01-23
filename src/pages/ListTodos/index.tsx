import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

//estido da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff32e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  ///comments?postId=1

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        Accept: 'aplication/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        console.log(data);
      });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.title}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={ListShow}
      />
    </SafeAreaView>
  );
}

function ListShow(item) {
  const { title, userId, completed } = item.item;

  if (completed === true) {
    return (
      <View>
        <Text style={{ flex: 1, color: '#ff3333', backgroundColor: '#fff32e' }}>
          title={title}
        </Text>
      </View>
    );
  }
  if (completed === false) {
    return (
      <View>
        <Text style={{ flex: 1, color: '#fff32e', backgroundColor: '#ff3333' }}>
          title={title}
        </Text>
      </View>
    );
  }
}
