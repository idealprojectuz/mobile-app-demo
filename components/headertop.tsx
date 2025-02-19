// import React from "react";
// import {
//   Image,
//   Modal,
//   View,
//   Text,
//   TouchableOpacity,
//   Linking,
//   Alert,
//   Platform,
//   ActionSheetIOS,
// } from "react-native";
// import { IconSymbol } from "./ui/IconSymbol.ios";
// import { HapticTab } from "./HapticTab";
// import { useDispatch } from "react-redux";
// import { setLanguage as setsLanguage } from "@/redux/slice/configSlice";
// export const Headertop = () => {
//   const phoneNumbers = [
//     { label: "Menejer 1", number: "tel:+998933816699" },
//     { label: "Menejer 2", number: "tel:+998933826699" },
//   ];
//   const [languages, setLanguages] = React.useState([
//     {
//       flag: "🇺🇿",
//       label: "O'zbekcha",
//       code: "uz",
//       active: true,
//     },
//     {
//       flag: "🇷🇺",
//       label: "Русский",
//       code: "ru",
//       active: false,
//     },
//     {
//       flag: "🇺🇸",
//       label: "English",
//       code: "us",
//       active: false,
//     },
//   ]);
//   const handleCall = () => {
//     if (Platform.OS === "ios") {
//       // iOS uchun ActionSheet chiqarish
//       ActionSheetIOS.showActionSheetWithOptions(
//         {
//           options: [...phoneNumbers.map((p) => p.label), "Bekor qilish"],
//           cancelButtonIndex: phoneNumbers.length,
//         },
//         (buttonIndex) => {
//           if (buttonIndex < phoneNumbers.length) {
//             Linking.openURL(phoneNumbers[buttonIndex].number).catch((err) =>
//               Alert.alert(
//                 "Xatolik yuz berdi",
//                 "Iltimos qaytadan urinib ko'ring"
//               )
//             );
//           }
//         }
//       );
//     } else {
//       Alert.alert(
//         "Raqamni tanlang",
//         "",
//         phoneNumbers.map((p) => ({
//           text: p.label,
//           onPress: () => Linking.openURL(p.number),
//         }))
//       );
//     }
//   };

//   // const handleChangeLanguage = () => {
//   //   if (Platform.OS == "ios") {
//   //     ActionSheetIOS.showActionSheetWithOptions(
//   //       {
//   //         options: [
//   //           ...languages.map((l) => l.flag + " " + l.label),
//   //           "Bekor qilish",
//   //         ],
//   //         cancelButtonIndex: languages.length,
//   //       },
//   //       (buttonIndex) => {
//   //         setLanguages((prev) =>
//   //           prev.map((el) => ({
//   //             ...el,
//   //             active: el.code == languages[buttonIndex].code ? true : false,
//   //           }))
//   //         );
//   //         console.log(buttonIndex);
//   //       }
//   //     );
//   //   } else {
//   //     Alert.alert(
//   //       "Tilni tanlang",
//   //       "",
//   //       languages.map((p) => ({
//   //         text: p.flag + " " + p.label,
//   //         onPress: () => {},
//   //       }))
//   //     );
//   //   }
//   // };
//   const dispatch = useDispatch();
//   const handleChangeLanguage = () => {
//     if (Platform.OS === "ios") {
//       ActionSheetIOS.showActionSheetWithOptions(
//         {
//           options: [
//             ...languages.map((l) => l.flag + " " + l.label),
//             "Bekor qilish",
//           ],
//           cancelButtonIndex: languages.length,
//         },
//         (buttonIndex) => {
//           if (buttonIndex < languages.length) {
//             setLanguages((prev) =>
//               prev.map((el) => ({
//                 ...el,
//                 active: el.code === languages[buttonIndex].code,
//               }))
//             );
//             dispatch(setsLanguage(languages[buttonIndex].code));
//           }
//         }
//       );
//     } else {
//       Alert.alert(
//         "Tilni tanlang",
//         "",
//         languages.map((l) => ({
//           text: l.flag + " " + l.label,
//           onPress: () => {
//             setLanguages((prev) =>
//               prev.map((el) => ({
//                 ...el,
//                 active: el.code === l.code,
//               }))
//             );
//             dispatch(setsLanguage(l.code));
//           },
//         }))
//       );
//     }
//   };

//   return (
//     <View className="flex flex-row justify-between items-center">
//       <Image
//         // source={{
//         //   uri: require("@/assets/images/logo.jpg"),
//         //   cache: "force-cache",
//         // }}
//         source={require("@/assets/images/logo.jpg")}
//         className="w-[100px] h-[50px] object-cover"
//       />
//       <View className="flex flex-row gap-[10px]">
//         <HapticTab
//           onPress={handleChangeLanguage}
//           className="w-[32px]  h-[32px] bg-[#F2F3F5] flex flex-row justify-center items-center rounded-[12px]">
//           <Text>{languages.find((el) => el.active == true)?.flag}</Text>
//         </HapticTab>
//         <HapticTab
//           onPress={handleCall}
//           className="w-[32px]  h-[32px] bg-[#F2F3F5] flex flex-row justify-center items-center rounded-[12px]">
//           <IconSymbol style={{}} color="black" name="phone.arrow.up.right" />
//         </HapticTab>
//       </View>
//     </View>
//   );
// };

import React from "react";
import {
  Image,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ActionSheetIOS,
} from "react-native";
import { IconSymbol } from "./ui/IconSymbol.ios";
import { HapticTab } from "./HapticTab";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage as setsLanguage } from "@/redux/slice/configSlice";
import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";

export const Headertop = () => {
  const { i18n } = useTranslation();
  const phoneNumbers = [
    { label: "Menejer 1", number: "tel:+998933816699" },
    { label: "Menejer 2", number: "tel:+998933826699" },
  ];

  const languages = [
    {
      flag: "🇺🇿",
      label: "O'zbekcha",
      code: "uz",
    },
    {
      flag: "🇷🇺",
      label: "Русский",
      code: "ru",
    },
    {
      flag: "🇺🇸",
      label: "English",
      code: "en",
    },
  ];

  const activeLanguage = useSelector(
    (state: RootState) => state.configSlice.language
  );
  // const activeLanguage = "ru";
  const dispatch = useDispatch();

  const handleCall = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [...phoneNumbers.map((p) => p.label), "Bekor qilish"],
          cancelButtonIndex: phoneNumbers.length,
        },
        (buttonIndex) => {
          if (buttonIndex < phoneNumbers.length) {
            Linking.openURL(phoneNumbers[buttonIndex].number).catch(() =>
              Alert.alert(
                "Xatolik yuz berdi",
                "Iltimos qaytadan urinib ko'ring"
              )
            );
          }
        }
      );
    } else {
      Alert.alert(
        "Raqamni tanlang",
        "",
        phoneNumbers.map((p) => ({
          text: p.label,
          onPress: () => Linking.openURL(p.number),
        }))
      );
    }
  };

  const handleChangeLanguage = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [
            ...languages.map((l) => l.flag + " " + l.label),
            "Bekor qilish",
          ],
          cancelButtonIndex: languages.length,
        },
        (buttonIndex) => {
          if (buttonIndex < languages.length) {
            dispatch(setsLanguage(languages[buttonIndex].code));
          }
        }
      );
    } else {
      Alert.alert(
        "Tilni tanlang",
        "",
        languages.map((l) => ({
          text: l.flag + " " + l.label,
          onPress: () => dispatch(setsLanguage(l.code)),
        }))
      );
    }
  };

  const handleLoadLanguage = async () => {
    await i18n.changeLanguage(activeLanguage);
  };
  React.useEffect(() => {
    handleLoadLanguage();
  }, [activeLanguage]);
  return (
    <View className="flex flex-row justify-between items-center">
      <Image
        source={require("@/assets/images/logo.jpg")}
        className="w-[100px] h-[50px] object-cover"
      />
      <View className="flex flex-row gap-[10px]">
        <HapticTab
          onPress={handleChangeLanguage}
          className="w-[32px] h-[32px] bg-[#F2F3F5] flex flex-row justify-center items-center rounded-[12px]">
          <Text>{languages.find((l) => l.code === activeLanguage)?.flag}</Text>
        </HapticTab>
        <HapticTab
          onPress={handleCall}
          className="w-[32px] h-[32px] bg-[#F2F3F5] flex flex-row justify-center items-center rounded-[12px]">
          {/* <IconSymbol style={{}} color="black" name="phone.arrow.up.right" /> */}
          <Image
            source={require("@/assets/icons/phone.arrow.up.right.svg")}
            width={20}
            height={20}
          />
        </HapticTab>
      </View>
    </View>
  );
};
