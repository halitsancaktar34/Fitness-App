import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, TouchableOpacity, Image } from "react-native";

export default function BodyPartCard({ item, index, router }) {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        style={{ width: wp(44), height: hp(22) }}
        className="justify-end p-4 mb-4"
        onPress={() => router.push({ pathname: "/exercises", params: item })}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: hp(22) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
