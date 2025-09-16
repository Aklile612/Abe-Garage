import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Colors, Spacing } from "../constants/colors";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import { useContacts } from "../services/ContactsContext";

export default function ContactsScreen({ navigation }) {
  const { contacts, loadContacts, deleteContact } = useContacts();
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  const filtered = contacts.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.phone?.includes(q)
    );
  });

  const handleLongPress = (contact) => {
    Alert.alert(
      "Delete Contact",
      `Remove ${contact.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteContact(contact.id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} />
      {filtered.length === 0 ? (
        <EmptyState
          icon="📇"
          title={search ? "No results found" : "No contacts yet"}
          message={search ? "Try a different search term" : "Add your first contact to get started"}
        />
      ) : (
        <FlatList
          data={filtered}
          renderItem={({ item }) => (
            <ContactCard contact={item} onLongPress={handleLongPress} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  list: { padding: Spacing.md, paddingTop: 0 },
});
