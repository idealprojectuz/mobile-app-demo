import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StatusBarStyle,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Search from "@/components/search";
import Slider from "@/components/slider";
import { Headertop } from "@/components/headertop";
import CategoriesBar from "@/components/categories";
import { Homeproducts } from "@/components/homeproducts";
// import { setStatusBarStyle } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className=" flex-1 bg-[#fff]   ">
        {/* <View className=" h-full w-full"> */}
        <StatusBar
          // animated={true}
          // backgroundColor="#000"
          // barStyle={"dark-content"}
          // backgroundColor={""}
          barStyle={"dark-content"}
          networkActivityIndicatorVisible={true}
          showHideTransition={"slide"}
          hidden={false}
          animated={true}
          className="text-black"
        />
        <View className=" w-[90%] pb-3 mx-auto  ">
          <Headertop />
          <Search />
        </View>

        <ScrollView className="mt-[10px] py-[15px]  bg-gray-50 ">
          <View className="bg-white  rounded-[15px]">
            <Slider />
            <CategoriesBar />
            <Homeproducts />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
// });
