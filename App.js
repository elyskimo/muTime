import * as React from "react";
import Weather from "./components/Weather";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SecondScreen from "./components/SecondScreen";
import Settings from "./components/Settings";
import Times from "./components/Time";
import Profile from "./components/Profile";
import Modal from "./components/Modal";
import List from "./components/List";
import Login from "./components/Login";
import Loading from "./components/Loading";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArR4NEV9OZMVbqo2it7CXlp1Fn24DIbKs",
  authDomain: "mutime-da479.firebaseapp.com",
  databaseURL: "https://mutime-da479.firebaseio.com",
  projectId: "mutime-da479",
  storageBucket: "mutime-da479.appspot.com",
  messagingSenderId: "218843166640",
  appId: "1:218843166640:web:e6f04d7797ff5934958875",
  measurementId: "G-4Z40VCFQEV"
};

firebase.initializeApp(firebaseConfig);

const StackNav = createStackNavigator({
  Weather: {
    screen: Weather
  },
  Second: {
    screen: SecondScreen
  },
  List: {
    screen: List
  }
});

const SettingsNav = createStackNavigator({
  Settings: {
    screen: Settings
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

const SwitchNav = createSwitchNavigator({
  Loading,
  Login,
  TabNav
});

const AppStack = createStackNavigator(
  {
    Root: {
      screen: SwitchNav
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
