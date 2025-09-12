import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors, Spacing } from "../constants/colors";

export default function SearchBar({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search contacts..."}
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value ? (
        <Text style={styles.clear} onPress={() => onChangeText("")}>
          ✕
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: Spacing.md,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    height: 44,
  },
  icon: { fontSize: 16, marginRight: Spacing.sm },
  input: { flex: 1, fontSize: 15, color: Colors.text },
  clear: { fontSize: 16, color: Colors.textSecondary, paddingLeft: Spacing.sm },
});
