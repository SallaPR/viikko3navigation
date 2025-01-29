import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function CustomNavigationBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={title} />
        </>
      ) : (
        <>
        <Appbar.Content title={title} />
        <TouchableOpacity onPress={() => navigation.navigate("Second")}>
          <MaterialIcons
            name="arrow-forward"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        
        </>
      )}
      
    </Appbar.Header>
  );
}
