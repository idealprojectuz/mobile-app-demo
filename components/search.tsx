import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Vibration,
} from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import * as Haptics from "expo-haptics"; // Expo Haptics kutubxonasini import qilish
import { HapticTab } from "./HapticTab";
import { useTranslation } from "react-i18next";
const options = {
  enableVibrateFallback: true, // Ba'zi qurilmalarda oddiy vibratsiyaga o‘tish
  ignoreAndroidSystemSettings: false, // Android tizim sozlamalariga moslashish
};

export default function Search() {
  const { t } = useTranslation();
  t("search_placeholder");
  return (
    // <View className=" flex gap-[10px] flex-row h-[43px]   ">
    <View className=" flex  flex-row h-[43px]  gap-[10px] ">
      <TextInput
        className={`w-[85%]   bg-[#F2F3F5] px-2 h-full text-[14px]   text-[#000] rounded-[12px]`}
        placeholder={t("search_placeholder")}
        placeholderTextColor={"#7B7F86"}
      />

      <HapticTab
        onLongPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // O‘rtacha haptic feedback
        }}
        className="w-[15%] h-full flex flex-row justify-center items-center bg-[#F2F3F5] rounded-[12px]">
        <IconSymbol
          name="bell.badge"
          size={32}
          color="#7B7F86"
          weight="medium"
        />
      </HapticTab>
    </View>
  );
}
