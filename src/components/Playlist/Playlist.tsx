import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Song from "../../types/song";
import { ReactComponent as PlayButtonIcon } from '../../images/play_circle_outline_black.svg';
import { ReactComponent as DeleteIcon } from '../../images/delete_outline_black.svg';
import styles from './playlist.module.scss';
import { ACTIONS } from "../../state/actions";

const Playlist = () => {
    const playlist = useSelector((state: RootState) => state.playlist.playlist);
    const dispatch = useDispatch();

    const onPlayClick = (audio: string) => {
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
    }

    const renderSongs = (songs: Array<Song>) => {
        return songs.map(({ name, id, audio }, i: number) => {
            return (
                <div className={styles.container} key={id}>
                    <div className={styles.songName}>{name}</div>
                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={() => onPlayClick(audio)}>
                            <PlayButtonIcon />
                        </button>
                        <button type="button" onClick={() => onDeleteClick(id)}>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            );
        })
    }

    return (
        <>
            <section>
                {renderSongs(playlist)}
            </section>
        </>
    )
}

export default Playlist
