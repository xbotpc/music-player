import { InitialPlaybackState } from "../../types/initialPlaybackState";
import { ACTIONS } from '../actions';
import { playbackState } from "../initialState";

interface Action {
    type: string,
    payload: any
}

const audioReducer = (state = playbackState, { type = '', payload }: Action): InitialPlaybackState => {
    switch (type) {
        case ACTIONS.PLAY_PAUSE:
            return {
                ...state,
                currentAudio: payload,
                playing: !state.playing || state.currentAudio.audio !== payload.audio
            }

        default:
            return state;
    }
}

export default audioReducer;