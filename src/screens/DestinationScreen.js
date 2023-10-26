import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { theme } from "../theme";
const DestinationScreen = () => {
  const { params } = useRoute();
  const item = params;
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View className="bg-white flex-1">
      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(55),
        }}
      />
      <SafeAreaView className="flex-row items-center justify-between w-full absolute">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-4"
          style={{
            backgroundColor: "rgba(255,255,255,.5)",
          }}>
          <ChevronLeftIcon size={wp(7)} strokeWidth={3} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsLiked((prev) => !prev)}
          className="p-2 rounded-full mr-4"
          style={{
            backgroundColor: "rgba(255,255,255,.5)",
          }}>
          <HeartIcon size={wp(5)} color={isLiked ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-start">
            <Text
              style={{
                fontSize: wp(7),
              }}
              className="font-bold flex-1 text-neutral-700">
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: wp(7),
                color: theme.text,
              }}
              className="font-semibold">
              ${item.price}
            </Text>
          </View>
          <Text
            style={{
              fontSize: wp(3.7),
            }}
            className="text-neutral-700 tracking-wide my-4">
            {item.longDescription}
          </Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon color={"skyblue"} width={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  style={{
                    fontSize: wp(5),
                  }}
                  className="font-bold text-neutral-700">
                  {item.duration}
                </Text>
                <Text className="text-neutral-700 tracking-wide">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon color={"pink"} width={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  style={{
                    fontSize: wp(5),
                  }}
                  className="font-bold text-neutral-700">
                  {item.distance}
                </Text>
                <Text className="text-neutral-700 tracking-wide">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <SunIcon color={"orange"} width={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  style={{
                    fontSize: wp(5),
                  }}
                  className="font-bold text-neutral-700">
                  {item.weather}
                </Text>
                <Text className="text-neutral-700 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.7),
            height: wp(15),
            width: wp(50),
          }}
          className="mb-6 mx-auto flex justify-center items-center rounded-full">
          <Text
            className="text-white font-bold"
            style={{
              fontSize: wp(5),
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationScreen;
