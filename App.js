/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
import { Home } from './src/Home';
import { Login } from './src/Login';
import { News } from './src/News';
import { Profile } from './src/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getData } from './src/AsyncStoraGe/getData';
import { Provider } from 'react-redux';
import { store } from './src/store/store'

const Tab = createBottomTabNavigator();
 const Stack = createStackNavigator(); 

 function createStakeHome() {
   return (
       <Stack.Navigator
       >
        <Stack.Screen 
        name="Home" 
        component={Home}
        initialParams={{ 
        ititemId: 0,
        title: 'Главная',
        }}
        options={{
          headerTitle: 'Главная',
          headerStyle: styles.headers,
          headerTintColor: '#fff'
        }}
        />

       </Stack.Navigator>
   );
 }; 
 

 function createStakeNews() {
  return (
      <Stack.Navigator>
      <Stack.Screen 
          name='News' 
          component={News}
          initialParams={{ 
          ititemId: 1,
          switchis: true
          }}
          options={{
            headerTitle: 'Новости',
            headerStyle: styles.headers,
            headerTintColor: '#fff'
          }}
          /> 
     </Stack.Navigator>
   );
 }; 

 function createStakeProfile() {
  const [data, setData] = useState([])
  const user = '12345'
  useEffect(() => {
    getData(user).then(val => {
      // got value here
      setData(val)
  }).catch(e => {
      // error
      console.log(e);
  });

  })
  
console.log(data)
  return (
      <Stack.Navigator>
        {data === null?
        <Stack.Screen 
        name='Login' 
        component={Login}
        initialParams={{ 
        ititemId: 1,
        switchis: true
        }}
        options={{
          headerTitle: 'Вход',
          headerStyle: styles.headers,
          headerTintColor: '#fff'
        }}
        /> :
        <Stack.Screen 
        name='Profile' 
        component={Profile}
        initialParams={{ 
        ititemId: 1,
        switchis: true
        }}
        options={{
          headerTitle: 'Профиль',
          headerStyle: styles.headers,
          headerTintColor: '#fff'
        }}
        /> 
        }
     </Stack.Navigator>
   );
 }; 

 const MyTabs = ({}) => {
  
  return(
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#0fbe3b',
    }}
  >
      <Tab.Screen
        name="Home"
        component={createStakeHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-react" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={createStakeNews}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-newspaper-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={createStakeProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" color={color} size={size}/>
          ),
        }}
      />
  </Tab.Navigator>
  )
}

 export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.content}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </View>
    </Provider>
  );
}

 const styles = StyleSheet.create({
  content: {
      flex: 1
  },
  headers: {
    backgroundColor: '#0fbe3b',
  }
})
