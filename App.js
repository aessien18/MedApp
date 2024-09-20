import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Screens/Home";
import Comment from "./Screens/Comment";
import Schedule from "./Screens/Schedule";
import Profile from "./Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  <Home></Home>;
  <Comment></Comment>;
  <Schedule></Schedule>;
  <Profile></Profile>;
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Comment"
          component={Comment}
          options={{
            tabBarLabel: "Comment",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
