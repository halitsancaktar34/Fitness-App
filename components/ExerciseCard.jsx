import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import { ExerciseContext } from "../context/ExerciseContext";

export default function ExerciseCard({ item, router, index }) {
  const [isMarked, setIsMarked] = useState();
  const { addToBookmarks, bookmarks } = useContext(ExerciseContext);
  const handlePress = () => {
    addToBookmarks(item);
    setIsMarked(!isMarked);
  };

  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
      style={{ width: wp(48), height: hp(28) }}
    >
      <TouchableOpacity
        className="py-3 space-y-2"
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
      >
        <View
          className="bg-neutral-200 shadow rounded-[25px]"
          style={{ width: wp(44), height: hp(22) }}
        >
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            className="rounded-[25px]"
            style={{ width: wp(44), height: hp(22) }}
          />
          <TouchableOpacity
            className="absolute right-3 top-1 p-1"
            onPress={handlePress}
          >
            {item.isMarked || isMarked ? (
              <FontAwesome name="bookmark" size={hp(3.5)} color={"black"} />
            ) : (
              <FontAwesome name="bookmark-o" size={hp(3.5)} color={"black"} />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide capitalize"
        >
          {item?.name.length > 20 ? item.name.slice(0.2) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
