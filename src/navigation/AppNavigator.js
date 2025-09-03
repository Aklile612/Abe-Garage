import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import AddContactScreen from "../screens/AddContactScreen";
import ContactsScreen from "../screens/ContactsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Abe Garage" }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContactScreen}
        options={{ title: "Add Contact" }}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: "My Contacts" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
}
