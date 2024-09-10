import { View, Text } from "react-native";
import { AuthForm } from "../../../components/Auth/auth-form/auth-form.components";
export const SingupScreen = () => {
	return (
		<View>
			<AuthForm isLogin={false}/>
		</View>
	);
};
