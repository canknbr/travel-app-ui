import { View, Text } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import DestinationCard from "./DestinationCard";
const Destinations = () => {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return <DestinationCard key={index} item={item} />;
      })}
    </View>
  );
};

export default Destinations;
