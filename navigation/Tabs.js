import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarActiveTintColor: "black",
      tabBarStyle: { backgroundColor: "tomato" },
    }}
  >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen
      name="Tv"
      component={Tv}
      options={{
        tabBarBadge: 5,
        headerTitleStyle: { color: "tomato" },
      }}
    />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
