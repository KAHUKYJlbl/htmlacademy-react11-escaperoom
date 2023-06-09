import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { userSlice } from './user/user-slice';
import { questSlice } from './quest/quest-slice';
import { appSlice } from './app/app-slice';
import { myQuestsSlice } from './my-quests/my-quests-slice';
import { bookingSlice } from './booking/booking-slice';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Booking]: bookingSlice.reducer,
  [NameSpace.MyQuests]: myQuestsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
