import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllExpense } from "../screens/allExpenses/all-expenses.screens";
import { RecentExpense } from "../screens/recentExpenses/recent-expenses.screens";
import { GlobalStyles } from "../constants/styles.constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native";
import { styles } from "./navigation.styles";
import { useContext } from "react";
import { InputContext } from "../store/inputs.context";
import { IconButton } from "../ui/icon-button/icon-button.components";
const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
	const { setInputs } = useContext(InputContext);
	return (
		<SafeAreaView style={styles.container}>
			<BottomTab.Navigator
				screenOptions={({ navigation }) => ({
					headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
					headerTintColor: GlobalStyles.colors.primary50,
					tabBarStyle: { backgroundColor: GlobalStyles.colors.dark100 },
					tabBarActiveTintColor: GlobalStyles.colors.primary100,
					tabBarInactiveTintColor: GlobalStyles.colors.primary50,
					headerRight: ({ tintColor }) => {
						return (
							<IconButton
								name="add"
								size={24}
								color={tintColor}
								onPress={() => {
									setInputs({
										title: {value: "", isValid:true},
										amount: {value: "", isValid:true},
										date: { value: "" , isValid:true},
										description: { value: "", isValid:true },
									});
									navigation.navigate("ManageExpense");
								}}
							/>
						);
					},
				})}
			>
				<BottomTab.Screen
					name="Recent Expense"
					component={RecentExpense}
					options={{
						tabBarLabel: "Recent",
						title: "Recent Expense",
						tabBarIcon: ({ color, size }) => (
							<FontAwesome6
								name="money-bill-trend-up"
								size={24}
								color={color}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="All Expense"
					component={AllExpense}
					options={{
						tabBarLabel: "All",
						title: "All Expense",
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="money" size={24} color={color} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</SafeAreaView>
	);
};
