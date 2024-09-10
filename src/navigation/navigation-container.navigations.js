import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./stack-navigation.navigations";
import { styles } from "./navigation.styles";
import { SafeAreaView } from "react-native-safe-area-context";
export const NavigationContainerWrapper = () => {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</SafeAreaView>
	);
};
