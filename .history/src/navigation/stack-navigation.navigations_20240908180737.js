import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageExpense } from "../screens/manageExpenses/manage-expenses.screens";
import { BottomTabNavigator } from "./bottom-tap-navigation.navigations";
import { GlobalStyles } from "../constants/styles.constants";
import { LoginScreen } from "../screens/auth-screens/login/login.screens";
import { SingupScreen } from "../screens/auth-screens/singup/singup.screens";
const Stack = createNativeStackNavigator();
export const StackNavigator = () => (
	<Stack.Navigator
		initialRouteName="Singup"
		screenOptions={{
			headerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
			headerTintColor: "white",
		}}
	>
		<Stack.Screen
			name="ManageExpense"
			component={ManageExpense}
			options={{ presentation: "modal" }}
		/>
		<Stack.Screen name ="Login" component={LoginScreen}/>
		<Stack.Screen name="Singup" component={SingupScreen } />
		<Stack.Screen
			name="ExpenseOverView"
			component={BottomTabNavigator}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);
