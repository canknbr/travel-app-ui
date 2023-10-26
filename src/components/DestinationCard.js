import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
const DestinationCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...item })}
      style={{
        width: wp(44),
        height: wp(65),
      }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5 ">
      <Image
        source={item.image}
        style={{
          width: wp(44),
          height: wp(65),
          borderRadius: 40,
        }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(3,105,161,.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        onPress={() => setIsLiked((prev) => !prev)}
        style={{
          backgroundColor: "rgba(255,255,255,.4)",
        }}
        className="absolute top-1 right-3 rounded-full p-3">
        <HeartIcon size={wp(5)} color={isLiked ? "red" : "white"} />
      </TouchableOpacity>
      <Text
        className="text-white font-semibold"
        style={{
          fontSize: wp(4),
        }}>
        {item.title}
      </Text>
      <Text
        className="text-white"
        style={{
          fontSize: wp(2.5),
        }}>
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};

export default DestinationCard;
