import { InitialPlaylistState } from "../../types/InitialPlaylistState";
import { ACTIONS } from '../actions';
import { playlistState } from "../initialState";

interface Action {
    type: string,
    payload: any
}

const playlistReducer = (state = playlistState, { type = '', payload }: Action): InitialPlaylistState => {
    switch (type) {
        case ACTIONS.ADD_SONG:
            return {
                ...state,
                playlist: [...state.playlist, ...payload]
            }

        case ACTIONS.REMOVE_SONG:
            const filteredList = state.playlist.filter((x) => x.id !== payload);
            return {
                ...state,
                playlist: filteredList,
            }

        default:
            return state;
    }
}

export default playlistReducer;