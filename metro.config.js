// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// // NativeWind bilan birlashtirilgan konfiguratsiya
// module.exports = withNativeWind(
//   {
//     resolver: {
//       assetExts: [...config.resolver.assetExts, "ttf", "svg", "png", "jpg", "gif", "json", "webp", "otf"],
//     },
//     ...config,
//   },
//   { input: "./styles/global.css" } // Bu yerda global CSS fayl yo'li ko'rsatiladi
// );
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// NativeWind bilan birlashtirilgan konfiguratsiya
module.exports = withNativeWind(
  {
    resolver: {
      assetExts: [
        ...config.resolver.assetExts,
        "ttf",
        "svg",
        "png",
        "jpg",
        "gif",
        "json",
        "webp",
        "otf",
      ],
    },
    ...config,
  },
  { input: "./styles/global.css" } // Bu yerda global CSS fayl yo'li ko'rsatiladi
);
