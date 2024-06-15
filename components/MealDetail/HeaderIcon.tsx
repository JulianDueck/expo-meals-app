import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, StyleSheet } from "react-native";

type HeaderIconProps = PressableProps & {
  color: string;
  name: keyof typeof Ionicons.glyphMap;
};

export default function HeaderIcon({ color, name, onPress }: HeaderIconProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
