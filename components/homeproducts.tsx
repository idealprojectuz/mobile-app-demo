import axios from "axios";
import React, { useEffect } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProductCard from "./ui/productCard";
import { request } from "@/config/request";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const productsdata = [{}, {}, {}];
export const Homeproducts = () => {
  const [data, setData] = React.useState<any>([]);
  const getProducts = async () => {
    try {
      const res = await request.get("/products", {
        params: {
          _fields: "id,name,slug,images,sale_price,regular_price,price,status",
          status: "publish",
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const dispatch = useDispatch();

  return (
    <View>
      <Text className="text-[22px] mt-5 font-bold ml-4 mb-[10px]">
        O'tkazib yubormang, xarid qiling
      </Text>
      <View className=" w-[98%] pb-3 mx-auto  ">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {productsdata?.map((el: any, index: number) => (
            <ProductCard
              key={index}
              image={
                "https://afex.uz/wp-content/uploads/2024/11/pizza-pech-AFP10.jpg"
              }
              newPrice={el.price}
              oldPrice={el.price}
              discount={12}
              title={el.title}
            />
          ))}
        </ScrollView>
        <View className="h-[500px] flex justify-center flex-col"></View>
      </View>
    </View>
  );
};
