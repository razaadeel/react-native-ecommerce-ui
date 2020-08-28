import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import { Button, ThemeProvider, Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const theme = {
  colors: {
    primary: "#000",
  },
};

const productsDataWomen = [
  {
    key: "1",
    title: "Sweatshirt with Gucci basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/Product_0fa46fdc-c507-4ebc-b3b8-ee350f7f08c8_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "2",
    title: "Sweatshirt with Barber basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/8303969428_2_1_1.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "3",
    title: "Sweatshirt with Lacoste basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/5408231050_2_5_1.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "4",
    title: "Sweatshirt with Versace print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/product-image-930557789_greys_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
];

const productsDataMen = [
  {
    key: "1",
    title: "Sweatshirt with Gucci basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Catty-Back-Black-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "2",
    title: "Sweatshirt with Barber basquiat print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/Product_01_fb04f962-9a33-4a96-bb20-e8f7f9c731d3_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "3",
    title: "Sweatshirt with Lacoste basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/product_01_3e23188e-6a88-4ffe-b99c-52b233901739_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "4",
    title: "Sweatshirt with Versace print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/BLONDE-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
];

const productsData = [
  {
    key: "1",
    title: "Sweatshirt with Gucci basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Catty-Back-Black-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "2",
    title: "Sweatshirt with Barber basquiat print",
    picture:
      "https://wondermedia.ru/wp-content/uploads/2017/12/Product_01_fb04f962-9a33-4a96-bb20-e8f7f9c731d3_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "3",
    title: "Sweatshirt with Lacoste basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/product_01_3e23188e-6a88-4ffe-b99c-52b233901739_900x.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
  {
    key: "4",
    title: "Sweatshirt with Versace print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/BLONDE-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
];

const productsDataFirstItem = [
  {
    key: "1",
    title: "Sweatshirt with Gucci basquiat print",
    picture: "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Medical-Front-Yellow-800x1200.jpg",
    price: "$ 32",
    oldprice: "$ 64",
  },
];

const brandsData = [
  {
    title: "Nike",
  },
  {
    title: "Adidas",
  },
  {
    title: "Gucci",
  },
  {
    title: "Bottega Veneta",
  },
  {
    title: "Ralf Lauren",
  },
  {
    title: "Miu Miu",
  },
  {
    title: "Supreme",
  },
  {
    title: "Acne",
  },
  {
    title: "Moschino",
  },
  {
    title: "Giorgio Armani",
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 0,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomWidth: 0,
      marginHorizontal: 24,
      elevation: 0,
    },
    headerTransparent: true,
    title: "",
    headerTitleStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 18,
      textAlign: "center",
      flex: 1,
    },
    headerLeft: null,
  });

  render() {
    return (
      <ThemeProvider theme={theme}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <View style={styles.headerBannerContainer}>
              <Text style={styles.headerTextStyle}>Spend More Save more</Text>
              <View style={styles.discountBannerContainer}>
                <FlatList
                  data={[
                    { text: "5% for Women T-shirts" },
                    { text: "5% for Women" },
                    { text: "5% for Women T-shirts" },
                  ]}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View style={styles.saleBannerTextContainer}>
                      <Text style={styles.saleBannerText}>{item.text}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.categoryBannerContainer}
              onPress={() => this.props.navigation.navigate("ParentCategories")}
              // onPress={() => this.props.navigation.dispatch(
              //     NavigationActions.setParams({
              //         params: { name: this.setState.name + 1 },
              //         key: 'Cart',
              //       })
              // )}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://wondermedia.ru/wp-content/uploads/2017/12/6932456251_1_1_1.jpg",
                }}
                style={styles.backgroundContainer}
              >
                <Text style={styles.textInsideCategory}>WOMEN</Text>
              </ImageBackground>
            </TouchableOpacity>
            <FlatList
              style={styles.productsGridContainer}
              data={productsDataWomen}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.productGridItem}
                  onPress={() => this.props.navigation.navigate("Product")}
                >
                  <Image style={styles.imageProductGridItem} source={{ uri: item.picture }} />
                  <View style={[styles.titleProductGridItemContainer]}>
                    <Text style={[styles.titleProductGridItem]}>{item.title}</Text>
                  </View>
                  <View style={styles.priceRowRelated}>
                    <Text style={styles.actualPriceRelated}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <Button
              buttonStyle={styles.categoryDiscountBanner}
              titleStyle={styles.titleCategoryDiscountBanner}
              title="Women Discounts"
              icon={<Ionicons name="ios-arrow-round-forward" size={20} color="#000" />}
              iconRight
              onPress={() => this.props.navigation.navigate("DiscountProducts")}
            />
            <TouchableOpacity
              style={styles.categoryBannerContainer}
              onPress={() => this.props.navigation.navigate("ParentCategories")}
            >
              <ImageBackground
                source={{
                  uri:
                    "https://wondermedia.ru/wp-content/uploads/2017/12/New-Wave-Self-White-Back-800x1200.jpg",
                }}
                style={styles.backgroundContainer}
              >
                <Text style={styles.textInsideCategory}>MEN</Text>
              </ImageBackground>
            </TouchableOpacity>
            <FlatList
              style={styles.productsGridContainer}
              data={productsDataMen}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.productGridItem}
                  onPress={() => this.props.navigation.navigate("Product")}
                >
                  <Image style={styles.imageProductGridItem} source={{ uri: item.picture }} />
                  <View style={[styles.titleProductGridItemContainer]}>
                    <Text style={[styles.titleProductGridItem]}>{item.title}</Text>
                  </View>
                  <View style={styles.priceRowRelated}>
                    <Text style={styles.actualPriceRelated}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.brandsContainer}>
              <View style={styles.brandsHeaderContainer}>
                <Text style={styles.brandsHeaderText}>Brands</Text>
                <Button
                  buttonStyle={styles.brandsHeaderButton}
                  titleStyle={styles.brandsHeaderText}
                  title="View All"
                  icon={<Ionicons name="ios-arrow-round-forward" size={20} color="#000" />}
                  iconRight
                />
              </View>
              <FlatList
                style={styles.tagsContainer}
                keyExtractor={(item, index) => item.title}
                data={brandsData}
                numColumns={4}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Text style={styles.tagStyle}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.brandsHeaderContainer}>
              <Text style={styles.brandsHeaderText}>New Arrivals</Text>
            </View>
            <View style={styles.newArrivalsContainer}>
              <FlatList
                style={styles.productsGridContainer}
                data={productsDataFirstItem}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={styles.productGridItem}
                    onPress={() => this.props.navigation.navigate("Product")}
                  >
                    <Image
                      style={styles.imageProductGridItemFirst}
                      source={{ uri: item.picture }}
                    />
                    <View style={styles.priceRowRelated}>
                      <Text style={styles.actualPriceRelatedFirst}>{item.price}</Text>
                    </View>
                    <View style={[styles.titleProductGridItemContainer]}>
                      <Text style={[styles.titleProductGridItemFirst]}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <FlatList
                style={styles.productsGridContainer}
                data={productsData}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={styles.productGridItem}
                    onPress={() => this.props.navigation.navigate("Product")}
                  >
                    <Image style={styles.imageProductGridItem} source={{ uri: item.picture }} />
                    <View style={[styles.titleProductGridItemContainer]}>
                      <Text style={[styles.titleProductGridItem]}>{item.title}</Text>
                    </View>
                    <View style={styles.priceRowRelated}>
                      <Text style={styles.actualPriceRelated}>{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ThemeProvider>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerBackButton: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  headerBannerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  headerTextStyle: {
    fontFamily: "work-sans-bold",
    fontSize: 48,
    textAlign: "center",
    zIndex: 10,
    lineHeight: 48,
    textTransform: "uppercase",
  },
  discountBannerContainer: {
    paddingVertical: 28,
    zIndex: 1,
    height: 180,
    flex: 1,
    width: "100%",
    backgroundColor: "#61ED7B",
    justifyContent: "space-around",
    marginTop: -70,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  saleBannerTextContainer: {
    paddingVertical: 8,
    marginLeft: 18,
    width: "50%",
    borderBottomWidth: 1,
  },
  saleBannerText: {
    fontFamily: "work-sans-semibold",
    fontSize: 12,
  },
  rightSalesTextContainer: {},
  categoryBannerContainer: {
    marginVertical: 24,
  },
  backgroundContainer: {
    height: 395,
    justifyContent: "center",
    alignItems: "center",
  },
  textInsideCategory: {
    fontFamily: "work-sans-bold",
    fontSize: 48,
    textTransform: "uppercase",
  },
  productsGridContainer: {
    marginHorizontal: -8,
    flexDirection: "column",
  },
  productGridItem: {
    flex: 0.5,
    marginHorizontal: 8,
    marginBottom: 24,
  },
  imageProductGridItem: {
    width: "100%",
    height: 230,
  },
  priceRowRelated: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  actualPriceRelated: {
    fontFamily: "work-sans-bold",
    fontSize: 15,
    color: "#000",
    marginRight: 8,
  },
  oldPriceRelated: {
    fontFamily: "work-sans-bold",
    fontSize: 9,
    color: "#646464",
    textDecorationLine: "line-through",
  },
  titleProductGridItemContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleProductGridItem: {
    maxWidth: 130,
    fontFamily: "work-sans",
    fontSize: 12,
    textAlign: "center",
  },
  titleButtonStyle: {
    fontFamily: "work-sans-bold",
    fontSize: 9,
    flex: 2,
    paddingBottom: 0,
    paddingTop: 0,
  },
  appleLogoButtonContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  priceInsideButtonText: {
    fontFamily: "work-sans-bold",
    fontSize: 9,
    color: "#fff",
  },
  categoryDiscountBanner: {
    backgroundColor: "#F05829",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 0,
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  titleCategoryDiscountBanner: {
    textAlign: "left",
    fontFamily: "work-sans-bold",
    fontSize: 18,
    color: "#000",
  },
  brandsContainer: {
    backgroundColor: "#f8f8f8",
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  brandsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 16,
  },
  brandsHeaderText: {
    fontFamily: "work-sans",
    fontSize: 14,
    color: "#000",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 16,
  },
  brandsHeaderButton: {
    backgroundColor: "transparent",
    padding: 0,
  },
  tagsContainer: {
    paddingVertical: 26,
  },
  tagStyle: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 13,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
    fontFamily: "work-sans-semibold",
    fontSize: 12,
  },
  newArrivalsContainer: {
    marginTop: 32,
  },
  imageProductGridItemFirst: {
    width: "100%",
    height: 390,
  },
  actualPriceRelatedFirst: {
    fontFamily: "work-sans-bold",
    fontSize: 21,
    color: "#000",
  },
  titleProductGridItemFirst: {
    maxWidth: 130,
    fontFamily: "work-sans",
    fontSize: 18,
    textAlign: "center",
  },
});
