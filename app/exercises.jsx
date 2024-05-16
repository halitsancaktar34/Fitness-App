import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, []);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: wp(12), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color={"white"} />
      </TouchableOpacity>
      {/* Exercise List Section */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          className="capitalize font-semibold text-neutral-700"
          style={{ fontSize: hp(3) }}
        >
          {item.name} Exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
