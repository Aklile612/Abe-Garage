import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Colors, Spacing } from "../constants/colors";

export default function Button({
  title,
  onPress,
  loading = false,
  variant = "primary",
  disabled = false,
  style,
}) {
  const isPrimary = variant === "primary";
  const bgColor = isPrimary ? Colors.primary : Colors.white;
  const textColor = isPrimary ? Colors.white : Colors.primary;
  const borderColor = isPrimary ? Colors.primary : Colors.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: borderColor },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    minHeight: 48,
  },
  disabled: { opacity: 0.5 },
  text: { fontSize: 16, fontWeight: "bold" },
});
