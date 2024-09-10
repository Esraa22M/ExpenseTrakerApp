import { View, Text } from "react-native";
import { AuthForm } from "../../../components/Auth/auth-form/auth-form.components";
export const LoginScreen = () => {
	return (
		<View >
			<AuthForm isLogin={true}/>
		</View>
	);
};
