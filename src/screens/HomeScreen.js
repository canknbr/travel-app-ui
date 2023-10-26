import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destinations from "../components/Destinations";
const HomeScreen = () => {
  const ios = Platform.OS === "ios";
  const topMargin = ios ? "mt-3" : "mt-10";
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`space-y-6 ${topMargin}`}>
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{
              fontSize: wp(7),
            }}>
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                width: wp(12),
                height: wp(12),
              }}
            />
          </TouchableOpacity>
        </View>
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color={"gray"} />
            <TextInput
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
              placeholder="Search"
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
        <View
          className="mb-4
        ">
          <Categories />
        </View>
        <View className="mb-4">
          <SortCategories />
        </View>
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
