import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, ThemeProvider, Input, Image, CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const theme = {
  colors: {
    primary: "#000",
  },
};

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastShippingChecked: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: "https://wondermedia.ru/wp-content/uploads/2019/06/airmart-2.png",
              }}
            />
          </View>
          <View style={styles.inputsContainer}>
            <Input
              containerStyle={styles.inputContainerGlobal}
              placeholder="gascoigne@gmail.com"
              label="Email"
              labelStyle={styles.inputLabelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputInsideStyle}
              placeholderTextColor="#000"
            />
            <Input
              containerStyle={styles.inputContainerGlobal}
              placeholder="*********"
              label="Password"
              labelStyle={styles.inputLabelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputInsideStyle}
              placeholderTextColor="#000"
              secureTextEntry
            />

            <CheckBox
              activeOpacity={1}
              containerStyle={styles.checkBoxContainer}
              textStyle={{
                fontSize: 12,
                marginLeft: 24,
                color: "#000",
              }}
              fontFamily="work-sans"
              title="Remember me"
              checked={this.state.fastShippingChecked === false}
              onPress={() =>
                this.setState({
                  fastShippingChecked: !this.state.fastShippingChecked,
                })
              }
              checkedIcon={
                <View style={styles.checkBoxIconContainer}>
                  <Ionicons name="ios-checkmark" size={20} color="#fff" />
                </View>
              }
              uncheckedIcon={<View style={styles.emptyBox}></View>}
            />
            <Button
              buttonStyle={styles.saveButton}
              titleStyle={styles.titleButtonStyle}
              title="LOG IN"
              containerStyle={styles.saveButtonContainer}
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Registration")}>
              <Text style={styles.linkText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate("LostPassword")}>
              <Text style={styles.linkText}>Lost your password?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  headerBackButton: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "#E8E8E8",
  },
  logo: {
    height: 26,
    width: 120,
  },
  inputContainerGlobal: {
    flexDirection: "row",
    paddingHorizontal: 0,
    alignItems: "center",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  inputLabelStyle: {
    flex: 24,
    fontFamily: "work-sans",
    fontSize: 12,
    color: "#000",
  },
  inputContainerStyle: {
    flex: 76,
    borderBottomColor: "#000000",
    borderBottomWidth: 0,
    borderLeftColor: "#000000",
    borderLeftWidth: 1,
    height: 21,
    paddingLeft: 24,
    justifyContent: "center",
  },
  addressButtonContainer: {
    flex: 76,
    borderBottomColor: "#000000",
    borderBottomWidth: 0,
    borderLeftColor: "#000000",
    borderLeftWidth: 1,
    borderRadius: 0,
    paddingLeft: 24,
    justifyContent: "center",
  },
  inputInsideStyle: {
    fontFamily: "work-sans-semibold",
    fontSize: 12,
  },
  inputsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginTop: 100,
    marginBottom: 50,
  },
  checkBoxContainer: {
    borderWidth: 0,
    backgroundColor: "#fff",
    padding: 0,
    marginTop: 32,
    marginBottom: 32,
    marginRight: 0,
    marginLeft: 0,
  },
  checkBoxIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    backgroundColor: "#F05829",
  },
  saveButton: {
    justifyContent: "space-around",
    borderRadius: 0,
    height: 55,
    marginBottom: 16,
  },
  titleButtonStyle: {
    fontFamily: "work-sans-bold",
    fontSize: 18,
    flex: 1,
    textTransform: "uppercase",
  },
  linkContainer: {
    flexDirection: "row",
  },
  linkText: {
    fontFamily: "work-sans",
    fontSize: 12,
  },
  verticalLine: {
    borderLeftWidth: 1,
    borderRightColor: "#000",
    marginHorizontal: 16,
  },
  emptyBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#F05829",
  },
});
