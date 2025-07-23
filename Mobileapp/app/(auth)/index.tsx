import { useSocialAuth } from "@/hooks/useSocialAuth";
import {  View,Image, TouchableOpacity,Text, ActivityIndicator } from "react-native";
import GoogleIcon from "../../assets/images/google.png";
import Auth3Image from "../../assets/images/auth3.png";

import { useState } from "react";

export default function Index() {
  
  const { handleSocialAuth } = useSocialAuth();
  const [loadingProvider, setLoadingProvider] = useState<null | "google" | "apple">(null);

  const handleAuth = async (provider: "oauth_google" | "oauth_apple") => {
    setLoadingProvider(provider === "oauth_google" ? "google" : "apple");
    try {
      await handleSocialAuth(provider);
    } finally {
      setLoadingProvider(null);
    }
  };
  return (
        <View className="flex-1 bg-black">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          // demo image
          <View className="items-center">
            <Image
            source={Auth3Image}
            className="size-64"
            resizeMode="contain"
            />
          </View>
          <View className="flex-col gap-2">
            <TouchableOpacity
            className="flex-row items-center justify-center bg-white rounded-full py-3 px-6 border border-gray-300"
            onPress={() => handleAuth("oauth_google")}
            disabled={loadingProvider === "google"}
            style={{
              shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
            }}
            >
              {/* GOOGLE BUTTON */}
              {loadingProvider === "google" ? (
                <ActivityIndicator size={"small"} color={"#4285F4"}/>
              ) : (
                <View className="flex-row items-center justify-center">
                    <Image
                    source={GoogleIcon}
                    className="size-10 mr-3"
                    resizeMode="contain"
                    />
                    <Text className="text-black font-medium text-base">
                      Continue with Google
                    </Text> 
                </View>
                )}
            </TouchableOpacity>
            {/** this is apple icon */}
            <TouchableOpacity
            className="flex-row items-center justify-center bg-white rounded-full py-3 px-6 border border-gray-300"
            onPress={() => handleAuth("oauth_apple")}
            disabled={loadingProvider === "apple"}
            style={{
              shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
            }}
            >
              {loadingProvider === "apple" ? (
                <ActivityIndicator size={"small"} color={"#000"}/>
              ) : (
                <View className="flex-row items-center justify-center">
                    <Image 
                    source={require("../../assets/images/apple.png")}
                    className="size-8 mr-3"
                    resizeMode="contain"
                    />
                    <Text className="text-black font-medium text-base">
                      Continue with Apple
                    </Text> 
                </View>
                )}
            </TouchableOpacity>
          </View>
          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
            {", "}
            <Text className="text-blue-500">Privacy Policy</Text>
            {", and "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}


