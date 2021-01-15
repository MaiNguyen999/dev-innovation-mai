import { combineReducers, createStore } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import {  themeReducer, rangeSliderReducer } from '../../redux/reducers/index';
//import { sidebarReducer, themeReducer, rtlReducer, rangeSliderReducer } from '../../redux/reducers/index';

const reducer = combineReducers({
  // form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  // sidebar: sidebarReducer,
  // rtl: rtlReducer,
  priceValue: rangeSliderReducer(''),
  priceValue2: rangeSliderReducer('2'),
  priceValue3: rangeSliderReducer('3'),
  priceValue4: rangeSliderReducer('4'),
  priceValue5:rangeSliderReducer('5'),
  priceValue6:rangeSliderReducer('6')
});

const store = createStore(reducer);

export default store;
