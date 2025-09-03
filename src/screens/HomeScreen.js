import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors, Spacing } from "../constants/colors";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Abe Garage</Text>
        <Text style={styles.heroSubtitle}>
          Save your contacts securely and stay connected
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate("AddContact")}
        >
          <Text style={styles.ctaText}>Add New Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Contacts")}
        >
          <Text style={styles.actionIcon}>📖</Text>
          <Text style={styles.actionTitle}>My Contacts</Text>
          <Text style={styles.actionDesc}>View saved contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("AddContact")}
        >
          <Text style={styles.actionIcon}>➕</Text>
          <Text style={styles.actionTitle}>Add New</Text>
          <Text style={styles.actionDesc}>Save a phone number</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.actionIcon}>⚙️</Text>
          <Text style={styles.actionTitle}>Settings</Text>
          <Text style={styles.actionDesc}>Manage preferences</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  hero: {
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: Spacing.sm,
  },
  heroSubtitle: {
    fontSize: 16,
    color: Colors.white,
    opacity: 0.9,
    textAlign: "center",
    marginBottom: Spacing.lg,
  },
  ctaButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 28,
  },
  ctaText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  quickActions: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  actionCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: { fontSize: 28, marginRight: Spacing.md },
  actionTitle: { fontSize: 18, fontWeight: "600", color: Colors.text },
  actionDesc: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
});
