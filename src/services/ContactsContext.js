import React, { createContext, useContext, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ContactsContext = createContext();

const STORAGE_KEY = "@abe_garage_contacts";

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setContacts(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to load contacts", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addContact = useCallback(async (contact) => {
    try {
      const newContact = { ...contact, id: Date.now().toString() };
      const updated = [...contacts, newContact];
      setContacts(updated);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newContact;
    } catch (err) {
      console.error("Failed to add contact", err);
      throw err;
    }
  }, [contacts]);

  const deleteContact = useCallback(async (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, [contacts]);

  const syncToGoogle = useCallback(async (accessToken) => {
    const { createContact } = await import("./GoogleContactsService");
    const results = [];
    for (const contact of contacts) {
      try {
        const result = await createContact(accessToken, contact);
        results.push({ contact, success: true, result });
      } catch (err) {
        results.push({ contact, success: false, error: err });
      }
    }
    return results;
  }, [contacts]);

  return (
    <ContactsContext.Provider
      value={{ contacts, loading, loadContacts, addContact, deleteContact, syncToGoogle }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) throw new Error("useContacts must be used within ContactsProvider");
  return context;
}
