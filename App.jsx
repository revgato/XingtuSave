import TabNavigator from './src/navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return (
    <NavigationContainer>
    <TabNavigator/>
    </NavigationContainer>
  );
}
