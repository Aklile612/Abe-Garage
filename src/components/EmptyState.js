import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Spacing } from "../constants/colors";

export default function EmptyState({ icon, title, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon || "📭"}</Text>
      <Text style={styles.title}>{title || "Nothing here"}</Text>
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.xl,
  },
  icon: { fontSize: 48, marginBottom: Spacing.md },
  title: { fontSize: 20, fontWeight: "600", color: Colors.text, marginBottom: Spacing.sm },
  message: { fontSize: 14, color: Colors.textSecondary, textAlign: "center" },
});
