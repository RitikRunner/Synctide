import { Redirect, Tabs } from 'expo-router'
import {  Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href="/(auth)" />;

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#2596be",
      tabBarInactiveTintColor: "#323232",
          tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E1E8ED",
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
    }}
    >
      <Tabs.Screen
      name='index'
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name="home" />
      }}
      />
      <Tabs.Screen
      name='search'
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name="search" />
      }}
      />
      <Tabs.Screen
      name='notifications'
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name="bell" />
      }}
      />
      <Tabs.Screen
      name='messages'
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name="mail" />
      }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        title:"",
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name="user" />
      }}
      />
    </Tabs>
  )
}
export default TabsLayout