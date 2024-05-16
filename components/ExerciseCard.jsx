import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseCard({ item, router, index }) {
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
