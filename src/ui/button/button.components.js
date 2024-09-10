import { Pressable, View, Text } from "react-native";
import { styles } from "./button.styles";
export const Button = ({ children, onPress, mode, outerContainerStyle }) => {
	return (
		<View style={outerContainerStyle}>
			<Pressable onPress={onPress} style={({pressed})=>pressed&&styles.pressed}>
				<View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
					<Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};
