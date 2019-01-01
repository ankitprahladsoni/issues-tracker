import { createSwitchNavigator } from 'react-navigation';
import RepositoryScreen from '../screens/RespositoryScreen';

export default createSwitchNavigator({
  Home: {
    screen: RepositoryScreen,
  },
});
