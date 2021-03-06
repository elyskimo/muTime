import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import Constants from "expo-constants";
import InfoItem from "./InfoItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";

export default class Weather extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    firebase.auth().signOut().then(() => {
      console.log("User signed out");
      this.props.navigation.navigate("Login");
    }).catch((err) => {
      console.log(err);
    });    
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.logout} title="Log out"/>
        {/* <Text style={[styles.paragraph, styles.whiteColor]}>MuTime</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Second")}
        >
          <MaterialCommunityIcons
            name="weather-partlycloudy"
            size={150}
            color="white"
          />
        </TouchableOpacity>
        <Text style={[styles.subtitle, styles.whiteColor]}>Partly Cloudy</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Modal")}
        >
          <Text style={[styles.temp, styles.whiteColor]}>86.1°</Text>
        </TouchableOpacity>
        <View style={styles.infos}>
          <InfoItem title="Temp:" info="86.1 F (30.1 C)" />
          <InfoItem title="Relative Humidity:" info="70%" />
          <InfoItem title="Dewpoint:" info="75 F (24 C)" />
          <InfoItem title="Visibility:" info="10.0" />
          <InfoItem title="Heat Index:" info="95 F (35C)" lastOne={true} />
        </View>
        <StatusBar barStyle="light-content" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infos: {
    backgroundColor: "rgba(0,0,0,0.4)",
    minHeight: 100,
    width: "90%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#582454",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontWeight: "bold",
    margin: 12,
    fontSize: 18
  },
  temp: {
    margin: 24,
    fontSize: 56
  },
  whiteColor: {
    color: "white"
  }
});
