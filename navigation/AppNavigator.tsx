import { createStackNavigator } from 'react-navigation';
import RepositoryScreen from '../screens/RespositoryScreen';

export default createStackNavigator({
  Home: {
    screen: RepositoryScreen,
  },
});
