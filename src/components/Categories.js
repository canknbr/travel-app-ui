import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categoriesData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text
          className="font-semibold text-neutral-700"
          style={{
            fontSize: wp(6),
          }}>
          Categories
        </Text>
        <TouchableOpacity>
          <Text
            className=""
            style={{
              color: theme.text,
              fontSize: wp(4),
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="space-x-4">
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2">
              <Image
                source={cat.image}
                style={{
                  width: wp(20),
                  height: wp(20),
                  borderRadius: wp(4),
                }}
              />
              <Text
                className="text-neutral-700 font-bold tracking-wide"
                style={{
                  fontSize: wp(3),
                }}>
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
