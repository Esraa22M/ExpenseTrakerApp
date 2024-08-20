import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainerWrapper } from "./src/navigation/navigation-container.navigations";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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
			<StatusBar style="auto" />
			<NavigationContainerWrapper />
		</View>
	);
}
styles = StyleSheet.create({ container: { flex: 1 } });
