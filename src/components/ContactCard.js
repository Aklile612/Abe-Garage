import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Spacing } from "../constants/colors";

export default function ContactCard({ contact, onPress, onLongPress }) {
  const initials = (contact.name || "?")
    .split(" ")
    .map((s) => s.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [Colors.primary, Colors.success, Colors.warning, "#9334e6", "#e67c34"];
  const bgColor = colors[contact.id?.length % colors.length];

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(contact)}
      onLongPress={() => onLongPress?.(contact)}
    >
      <View style={[styles.avatar, { backgroundColor: bgColor }]}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.md,
  },
  avatarText: { color: Colors.white, fontSize: 18, fontWeight: "bold" },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600", color: Colors.text },
  phone: { fontSize: 14, color: Colors.textSecondary, marginTop: 2 },
  chevron: { fontSize: 24, color: Colors.border, marginLeft: Spacing.sm },
});
