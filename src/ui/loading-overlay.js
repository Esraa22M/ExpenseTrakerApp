import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles.constants";
export const LoadingOverLay = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={GlobalStyles.colors.primary100} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" , padding:24},
});
