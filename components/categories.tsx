import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { HapticTab } from "./HapticTab";
import * as Haptics from "expo-haptics"; // Expo Haptics kutubxonasini import qilish

export default function CategoriesBar() {
  return (
    <View>
      <Text className="text-[22px] font-bold ml-4 mb-[10px]">
        Ommabop kategoriyalar
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HapticTab className="flex mr-5 flex-row w-[190px] items-center justify-between p-2 rounded-[8px]  bg-[#f2f3f5]">
          <Text className="text-wrap  text-[16px] w-[70%]">Telefonlar</Text>
          <Image
            width={50}
            height={50}
            className="w-[50px] "
            source={{
              uri: "https://cdn.mediapark.uz/images/e44c04e8-03db-44dc-9e78-c547cddb8a0b_mediaparkproduct_7.png",
              method: "GET",
            }}
          />
        </HapticTab>
        {Array.from({ length: 5 }).map((_, index) => (
          <HapticTab
            key={index}
            className="flex mr-5 flex-row w-[190px] items-center justify-between p-2 rounded-[8px]  bg-[#f2f3f5]">
            <Text className="text-wrap  text-[16px] w-[70%]">
              Noutbooklar va telefonlar
            </Text>
            <Image
              width={50}
              height={50}
              className="w-[50px] "
              source={{
                uri: "https://cdn.mediapark.uz/images/e44c04e8-03db-44dc-9e78-c547cddb8a0b_mediaparkproduct_7.png",
                method: "GET",
              }}
            />
          </HapticTab>
        ))}
      </ScrollView>
    </View>
  );
}
