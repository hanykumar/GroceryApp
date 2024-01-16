import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();



const TabNavigator = (props) => {
    // const buttonNativeFeedback = ({ children, style, ...props }) => (
    //   <TouchableNativeFeedback
    //     {...props}
    //     background={TouchableNativeFeedback.Ripple("#00000022", true)}>
    //     <View style={style}>{children}</View>
    //   </TouchableNativeFeedback>
    // );
    const tabBarStyle = {
        height: 80,
        padding: 10, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fdd33f2'
    }
  
    const options = {
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: tabBarStyle,
    }
    return (
      <Tab.Navigator
        screenOptions={options}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveBackgroundColor: 'black',
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Home}
        />
      </Tab.Navigator>
    );
  };
  
  export default TabNavigator;