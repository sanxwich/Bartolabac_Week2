import { useState } from "react";
import { Button, FlatList, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomerRow } from "@/components/customer-row";
import { SEED } from "@/data/customers";

export default function CustomerScreen() {
  const [customers, setCustomers] = useState(SEED);
  const [query, setQuery] = useState("");
  const shown = customers.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );
  function addWalkIn() {
    const id = Date.now();
    const walkIn = { id, name: "Walk-in", balance: 0, lastPaid: "Never" };
    setCustomers([...customers, walkIn]);
  }
  const total = shown.reduce((sum, c) => sum + c.balance, 0);
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Customers</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search customers.."
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <Text style={{ fontSize: 18 }}>Total owed: ₱ {total.toFixed(2)}</Text>
      <Button title="Add Walk-in" onPress={addWalkIn} />

      <FlatList
        data={shown}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CustomerRow {...item} />}
        ListEmptyComponent={<Text>No customers match "{query}"</Text>}
      />
    </SafeAreaView>
  );
}
