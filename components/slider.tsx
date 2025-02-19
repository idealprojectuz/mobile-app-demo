import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

export default function Slider() {
  const { width } = Dimensions.get("window");

  return (
    <View
      className="flex flex-row justify-center mt-[0px]"
      // dataSet={{ kind: "basic-layouts", name: "parallax" }}

      // style={{ flex: , justifyContent: "center", alignItems: "center" }}
    >
      <Carousel
        // loop
        width={width}
        height={250}
        autoPlay={true}
        data={defaultDataWith6Colors}
        scrollAnimationDuration={1500}
        mode="parallax"
        // snapEnabled={true}

        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
        }}
        renderItem={({ item }) => {
          // <View
          //   style={{
          //     flex: 1,
          //     justifyContent: "center",
          //     alignItems: "center",
          //     backgroundColor: item,
          //     borderRadius: 15,
          //     overflow: "hidden",
          //   }}>
          // console.log(item);
          return (
            <Image
              className="w-full h-[230px] object-cover rounded-[12px]"
              source={{
                uri: "https://picsum.photos/617/343",
              }}
            />
          );
          // </View>
        }}
      />
    </View>
  );
}
