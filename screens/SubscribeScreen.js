import * as React from "react";
import { useState } from "react";
import { validateEmail } from "../utils";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";

// const onChangeEmail = () => {
//   const check = validateEmail(email);
// };

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const checkEmail = validateEmail(email);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="interactive">
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            source={require("../assets/little-lemon-logo-grey.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.headerText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Type your Email"
          style={styles.input}
        />

        <Pressable
          style={[checkEmail && styles.btn, !checkEmail && styles.disablebtn]}
          disabled={!checkEmail}
          onPress={() => {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }}
        >
          <Text style={styles.btntxt}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    // marginTop: 20,
  },
  img: {
    height: 150,
    width: 150,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  btn: {
    backgroundColor: "#333333",
    height: 46,
    width: "86%",
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "center",
  },
  disablebtn: {
    backgroundColor: "grey",
    height: 46,
    width: "86%",
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnV: {
    backgroundColor: "pink",
    height: 46,
    width: "86%",
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "center",
    // position: "relative",
    // top: 140,
  },
  btntxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    height: 50,
    width: "86%",
    borderRadius: 8,
    padding: 5,
    margin: 30,
  },
});
