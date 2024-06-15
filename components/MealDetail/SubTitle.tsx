import { StyleSheet, Text, TextProps } from "react-native";

export default function SubTitle({ children }: TextProps) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 4,
    marginHorizontal: 12,
    fontWeight: "bold",
    color: "#e2b497",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 1,
  },
});
