import { InitialPlaybackState } from "../types/initialPlaybackState";
import { InitialPlaylistState } from "../types/InitialPlaylistState";

export const playbackState: InitialPlaybackState = {
    playing: false,
    currentAudio: {
        id: '',
        audio: '',
        name: ''
    },
}

export const playlistState: InitialPlaylistState = {
    playlist: []
}