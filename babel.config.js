// module.exports = function (api) {
//   api.cache(true);
//   return {
//     // presets: ["babel-preset-expo"],
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel",
//     ],
//     plugins: ["nativewind/babel"], // NativeWind uchun plugin
//   };
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
