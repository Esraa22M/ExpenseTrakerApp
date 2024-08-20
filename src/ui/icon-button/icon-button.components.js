import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./icon-button.styles";
import { View } from "react-native";
export const IconButton = ({ size, color, name, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
            style={({ pressed }) => [styles.buttonContainer,pressed&&styles.pressed]}

		>
			<View >
				<Ionicons size={size} color={color} name={name} onPress={onPress} />
			</View>
		</Pressable>
	);
};
