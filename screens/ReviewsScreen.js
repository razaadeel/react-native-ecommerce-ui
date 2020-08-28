import React from "react";
import { Button, Rating, ThemeProvider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { StyleSheet, View, Text, FlatList } from "react-native";

const theme = {
  colors: {
    primary: "#000",
  },
};

const reviewsData = [
  {
    name: "Paul Gascoigne",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    rating: 3,
  },
  {
    name: "Paulo Gascoigne",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    rating: 5,
  },
];

export default class ReviewsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      marginHorizontal: 24,
      elevation: 0,
    },
    title: "Reviews",
    headerTitleStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 18,
      textAlign: "center",
      flex: 1,
    },
    headerLeft: (
      <Button
        containerStyle={{
          marginLeft: 0,
        }}
        buttonStyle={{
          paddingVertical: 10,
          paddingRight: 20,
        }}
        type="clear"
        onPress={() => {
          navigation.goBack();
        }}
        icon={<Ionicons name="ios-arrow-back" size={20} color="#000" />}
      />
    ),
  });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <Button
              onPress={() => this.props.navigation.navigate("WriteReview")}
              buttonStyle={styles.saveButton}
              titleStyle={styles.titleButtonStyle}
              title="NEW REVIEW"
              containerStyle={styles.saveButtonContainer}
            />
            <FlatList
              keyExtractor={(item, index) => item.name}
              data={reviewsData}
              renderItem={({ item }) => (
                <View style={styles.reviewItemCard}>
                  <Rating
                    imageSize={20}
                    readonly
                    startingValue={item.rating}
                    style={styles.ratingContainer}
                  />
                  <Text style={styles.reviewerName}>{item.name}</Text>
                  <Text style={styles.reviewText}>{item.review}</Text>
                </View>
              )}
            />
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
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  contentContainer: {},
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  saveButton: {
    marginTop: 24,
    justifyContent: "space-around",
    borderRadius: 0,
    height: 55,
    marginBottom: 32,
  },
  titleButtonStyle: {
    fontFamily: "work-sans-bold",
    fontSize: 18,
    flex: 1,
    textTransform: "uppercase",
  },
  ratingContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  reviewItemCard: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  reviewerName: {
    fontFamily: "work-sans-semibold",
    fontSize: 21,
    marginVertical: 20,
  },
  reviewText: {
    fontFamily: "work-sans",
    fontSize: 14,
  },
});
