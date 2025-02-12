import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Search() {
  return (
    <View className="w-[90%] h-[53px] bg-[#ee4747] ml-[20px] mr-[20px] rounded-[12px]">
      <TextInput className="w-full h-full" placeholder="Qidiruv..." />
    </View>
  );
}
