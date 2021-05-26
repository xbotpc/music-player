import { combineReducers } from "redux";
import playback from './playbackReducer';
import playlist from './playlistReducer';

export const rootReducer = combineReducers({ playback, playlist })