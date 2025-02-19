import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  image: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
}

export default function ProductCard({
  image,
  title,
  oldPrice,
  newPrice,
  discount,
}: Props) {
  return (
    <View className="w-[200px] h-[300px] bg-[#f2f3f5] rounded-[14px] mr-4 p-2">
      <View className="bg-[#fff] rounded-[12px] h-[180px] flex items-center justify-center">
        <Image source={{ uri: image }} className="w-full h-[150px]" />
      </View>
      <View className="mt-1">
        <Text className="text-[13px] font-[600] text-[#434343]">{title}</Text>
      </View>
    </View>
  );
}
