import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons , FontAwesome5, AntDesign  } from '@expo/vector-icons';
import MainPage from '../pages/mainPages/MainPage';
import OtherPage from '../pages/otherPages/OtherPage';
import ThirdPage from '../pages/thirdPages/ThirdPage';

const Tab = createBottomTabNavigator();

const BottomNav = ():any =>{
    return (
      <Tab.Navigator>
  
        <Tab.Screen name="Home" component={MainPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <FontAwesome5 name="boxes" color="black" size={24} />
            ),
          }}
        />
  
        <Tab.Screen name="otherPage" component={OtherPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <AntDesign name="shoppingcart" size={24} color="black" />
            )
          }}
        />
  
        <Tab.Screen name="thirdPage" component={ThirdPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="person" size={24} color="black" />
            )
          }}
        />
  
      </Tab.Navigator>
    );
}

export default BottomNav