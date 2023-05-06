/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ToDoList from './src/ToDoList';

AppRegistry.registerComponent(appName, () => ToDoList);
