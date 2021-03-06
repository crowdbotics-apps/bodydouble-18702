import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile75501Navigator from '../features/UserProfile75501/navigator';
import Tutorial75500Navigator from '../features/Tutorial75500/navigator';
import NotificationList75472Navigator from '../features/NotificationList75472/navigator';
import Settings75471Navigator from '../features/Settings75471/navigator';
import Settings75463Navigator from '../features/Settings75463/navigator';
import UserProfile75461Navigator from '../features/UserProfile75461/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile75501: { screen: UserProfile75501Navigator },
Tutorial75500: { screen: Tutorial75500Navigator },
NotificationList75472: { screen: NotificationList75472Navigator },
Settings75471: { screen: Settings75471Navigator },
Settings75463: { screen: Settings75463Navigator },
UserProfile75461: { screen: UserProfile75461Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
