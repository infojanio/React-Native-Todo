//rotas que o usuário poderá navegar quando estiver autenticado
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import ListTodos from '../pages/ListTodos';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="ListTodos" component={ListTodos} />
  </AppStack.Navigator>
);

export default AppRoutes;
