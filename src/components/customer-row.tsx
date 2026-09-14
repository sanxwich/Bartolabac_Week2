import { Text, View } from "react-native";

type CustomerRowProps = { name: string; balance: number; lastPaid: string };

export function CustomerRow({ name, balance }: CustomerRowProps) {
  return (
    <View
      style={{
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Text>₱ {balance.toFixed(2)}</Text>
      <Text>Last Paid: {balance.toFixed(2)}</Text>
    </View>
  );
}
