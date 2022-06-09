import { 
    combineReducers, 
    ActionReducer,
    ActionReducerMap, 
    createSelector, 
    createFeatureSelector, 
    META_REDUCERS
} from '@ngrx/store';
import { UserInfo } from '../models/userinfo';

import * as fromUserInfo from '../store/userinfo.reducer';
