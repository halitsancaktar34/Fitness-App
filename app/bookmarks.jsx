import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ExerciseContext } from "../context/ExerciseContext";
import ExerciseList from "../components/ExerciseList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function bookmarks() {
  const { addToBookmarks, bookmarks } = useContext(ExerciseContext);
  const router = useRouter();
  
  return (
    <SafeAreaView>
      <View className="mx-4 space-y-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-rose-500 justify-center items-center pr-1 rounded-full"
          style={{ height: hp(5.5), width: wp(12), marginVertical: hp(2) }}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color={"white"} />
        </TouchableOpacity>
        <Text
          className="capitalize font-semibold text-neutral-700"
          style={{ fontSize: hp(3) }}
        >
          Bookmarks
        </Text>
      
      <View className="mb-6">
        <ExerciseList data={bookmarks} />
      </View>
      </View>
    </SafeAreaView>
  );
}
