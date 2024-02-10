import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/Pages/Home";
import AllNotifications from "./app/Components/AllNotifications";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerTitle: "All Notifications" }}
          name="AllNotifications"
          component={AllNotifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
