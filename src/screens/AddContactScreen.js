import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Colors, Spacing } from "../constants/colors";
import Button from "../components/Button";

export default function AddContactScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Validation", "Name is required");
      return;
    }
    if (!phone.trim()) {
      Alert.alert("Validation", "Phone number is required");
      return;
    }

    setSaving(true);
    try {
      // Save logic will be connected to Google Contacts API
      setTimeout(() => {
        Alert.alert("Success", `${name} has been saved`, [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      }, 500);
    } catch (err) {
      Alert.alert("Error", "Failed to save contact");
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Contact</Text>
          <Text style={styles.headerSub}>Will be synced to your Google account</Text>
        </View>

        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe"
          value={name}
          onChangeText={setName}
          autoFocus
        />

        <Text style={styles.label}>Phone Number *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. +251911223344"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Email (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. john@example.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Button
          title={saving ? "Saving..." : "Save to Google Contacts"}
          onPress={handleSave}
          loading={saving}
          style={{ marginTop: Spacing.xl }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  form: { padding: Spacing.lg },
  header: { marginBottom: Spacing.lg, alignItems: "center" },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: Colors.text },
  headerSub: { fontSize: 13, color: Colors.textSecondary, marginTop: Spacing.xs },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: Spacing.xs,
    marginTop: Spacing.md,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: Spacing.md,
    fontSize: 16,
  },
});
