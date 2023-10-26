import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants/index";
import { theme } from "../theme";
const SortCategories = () => {
  const [active, setActive] = useState("All");
  return (
    <View className="flex-row justify-around items-center mx-4 p-2 px-4 bg-neutral-100 rounded-full">
      {sortCategoryData.map((item, index) => {
        const isActive = item === active;

        const activeButton = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setActive(item)}
            className={`p-3 px-4 rounded-full flex ${activeButton}`}>
            <Text
              style={{
                color: isActive ? theme.text : "rgba(0,0,0,.5)",
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategories;
