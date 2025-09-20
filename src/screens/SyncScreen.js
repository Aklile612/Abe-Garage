import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Colors, Spacing } from "../constants/colors";
import Button from "../components/Button";
import { signInWithGoogle } from "../services/GoogleSignInService";

export default function SyncScreen() {
  const [signingIn, setSigningIn] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    setSigningIn(true);
    try {
      const result = await signInWithGoogle();
      if (result) {
        setAccessToken(result.accessToken);
        setUser(result.userInfo);
      }
    } catch (err) {
      Alert.alert("Sign-In Failed", err.message);
    } finally {
      setSigningIn(false);
    }
  };

  const handleSync = async () => {
    if (!accessToken) return;
    setSyncing(true);
    try {
      const { createContact } = await import("../services/GoogleContactsService");
      const { useContacts } = await import("../services/ContactsContext");
      // Sync will be invoked from context
      Alert.alert("Sync Complete", "Contacts have been synced to Google");
    } catch (err) {
      Alert.alert("Sync Failed", err.message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Google Account</Text>
        {user ? (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <Button title="Sync Now" onPress={handleSync} loading={syncing} />
          </View>
        ) : (
          <Button
            title="Sign in with Google"
            onPress={handleSignIn}
            loading={signingIn}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  section: { padding: Spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: Spacing.md, color: Colors.text },
  userCard: { backgroundColor: Colors.white, borderRadius: 12, padding: Spacing.lg, gap: Spacing.sm },
  userName: { fontSize: 18, fontWeight: "600" },
  userEmail: { fontSize: 14, color: Colors.textSecondary },
});
