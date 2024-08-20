import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageExpense } from "../screens/manageExpenses/manage-expenses.screens";
import { BottomTabNavigator } from "./bottom-tap-navigation.navigations";
const Stack = createNativeStackNavigator();
export const StackNavigator = () => (
	<Stack.Navigator initialRouteName="ExpenseOverView">
		<Stack.Screen name="ManageExpense" component={ManageExpense} />
        <Stack.Screen name="ExpenseOverView" component={BottomTabNavigator} options={{headerShown:false}}  />
	</Stack.Navigator>
);
