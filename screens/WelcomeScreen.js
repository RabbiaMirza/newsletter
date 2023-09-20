import * as React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import SubscribeScreen from "./SubscribeScreen";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.headerText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text style={styles.btntxt}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    padding: 30,
    textAlign: "center",
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: "#333333",
    height: 50,
    width: "88%",
    borderRadius: 6,
    justifyContent: "center",
    position: "relative",
    top: 140,
  },
  btntxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
