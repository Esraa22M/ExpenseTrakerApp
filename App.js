import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainerWrapper } from "./src/navigation/navigation-container.navigations";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AuthContextProvider } from "./src/store/auth.context";
import { InputsContextProvider } from "./src/store/inputs.context";
import { ExpenseContextProvider } from "./src/store/expenses.context";
import FlatButton from "./src/ui/flat-button/flat-button.components";
SplashScreen.preventAutoHideAsync();
export default function App() {
	const [loaded, error] = useFonts({
		"Inter-Black": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}
	return (
		<View style={styles.container}>
			<AuthContextProvider>
			<ExpenseContextProvider>
				<InputsContextProvider>
					<StatusBar style="auto" />
					<FlatButton>esrasa</FlatButton>
					<NavigationContainerWrapper />
				</InputsContextProvider>
			</ExpenseContextProvider></AuthContextProvider>
		</View>
	);
}
styles = StyleSheet.create({ container: { flex: 1 } });
