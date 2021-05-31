import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Song from "../../types/song";
import { ReactComponent as PlayButtonIcon } from '../../images/play_circle_outline_black.svg';
import { ReactComponent as PauseButtonIcon } from '../../images/pause_circle_outline_black.svg';
import { ReactComponent as DeleteIcon } from '../../images/delete_outline_black.svg';
import styles from './playlist.module.scss';
import { ACTIONS } from "../../state/actions";
import Button from "../Button/Button";

const Playlist = () => {
    const { playlist } = useSelector((state: RootState) => state.playlist);
    const { currentAudio, playing } = useSelector((state: RootState) => state.playback);
    const dispatch = useDispatch();

    const onPlayClick = (audio: Song) => {
        dispatch({
            type: ACTIONS.PLAY_PAUSE,
            payload: audio
        });
    }

    const onDeleteClick = (id: string) => {
        dispatch({
            type: ACTIONS.REMOVE_SONG,
            payload: id
        });
        dispatch({
            type: ACTIONS.PLAY_PAUSE,
            payload: { id: '', audio: '', name: '' }
        })
    }

    const renderSongs = (songs: Array<Song>) => {
        return songs.map(({ name, id }, i: number, arr) => {
            return (
                <div className={styles.container} key={id}>
                    <div className={styles.songName}>{name}</div>
                    <div className={styles.buttonContainer}>
                        <Button type="invisible" onClick={() => onPlayClick(arr[i])}>
                            {currentAudio.id === id && playing ? <PauseButtonIcon /> : <PlayButtonIcon />}
                        </Button>
                        <Button type="invisible" onClick={() => onDeleteClick(id)}>
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>
            );
        })
    }

    return (
        <>
            <section className={playlist.length !== 0 ? '' : styles.empty}>
                {playlist.length !== 0
                    ? renderSongs(playlist)
                    : <span>No Songs Found!</span>
                }
            </section>
        </>
    )
}

export default Playlist
