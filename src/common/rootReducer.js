import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import aboutUsReducer from '../features/about-us/redux/reducer';
import projectReducer from '../features/project/redux/reducer';
import ourTeamReducer from '../features/our-team/redux/reducer';
import collaborateReducer from '../features/collaborate/redux/reducer';
import activitiesReducer from '../features/activities/redux/reducer';
import partnersReducer from '../features/partners/redux/reducer';
import contactUsReducer from '../features/contact-us/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  aboutUs: aboutUsReducer,
  project: projectReducer,
  ourTeam: ourTeamReducer,
  collaborate: collaborateReducer,
  activities: activitiesReducer,
  partners: partnersReducer,
  contactUs: contactUsReducer,
};

export default combineReducers(reducerMap);
