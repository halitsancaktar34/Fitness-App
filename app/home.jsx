import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      {/* Top Section */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <TouchableOpacity
             onPress={() => router.push({ pathname: "/bookmarks", })}
            className="bg-neutral-100 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <FontAwesome name="bookmark" size={hp(3)} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* ImageSlider Section */}
      <View>
        <ImageSlider/>
      </View>

      {/* Body Parts Section */}
      <View className='flex-1'>
        <BodyParts/>
      </View>
    </SafeAreaView>
  );
}
