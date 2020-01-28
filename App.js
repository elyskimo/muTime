import * as React from "react";
import Weather from "./components/Weather";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SecondScreen from "./components/SecondScreen";
import Times from "./components/Time";
import Profile from "./components/Profile";
import Modal from "./components/Modal";

const StackNav = createStackNavigator({
  Weather: {
    screen: Weather
  },
  Second: {
    screen: SecondScreen
  }
});


const TimesStack = createStackNavigator({
  
  Times: {
    screen: Times
  }
});

const ProfileStack = createStackNavigator({
 
  Profile: {
    screen: Profile
  }
});

const TabNav = createBottomTabNavigator({
  Home: {
    screen: StackNav,
    navigationOptions: {
      title: "Weather",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="home" size={30} color={tintColor} />
      )
    }
  },
  Times: {
    screen: TimesStack,
    navigationOptions: {
      title: "Time",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="timer-sand" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="face-profile" size={30} color={tintColor} />
      )
    }
  },
});

const AppStack = createStackNavigator(
  {
    Root: {
      screen: TabNav
    },
    Modal: {
      screen: Modal
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(AppStack);
