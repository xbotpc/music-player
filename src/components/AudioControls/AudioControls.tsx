import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AudioNoteIcon } from '../../images/audioNote.svg';
import { ReactComponent as PauseButtonIcon } from '../../images/pause_black.svg';
import { ReactComponent as PlayButtonIcon } from '../../images/play_arrow_black.svg';
import { ReactComponent as SkipNextIcon } from '../../images/skip_next_black.svg';
import { ReactComponent as SkipPreviousIcon } from '../../images/skip_previous_black.svg';
import { ACTIONS } from '../../state/actions';
import { RootState } from '../../state/store';
import Song from '../../types/song';
import Button from '../Button/Button';
import styles from './audioControls.module.scss';

const AudioControls = () => {
    const { currentAudio, playing } = useSelector((state: RootState) => state.playback);
    const dispatch = useDispatch();

    const onPlayPauseClick = (song: Song) => {
        dispatch({
            type: ACTIONS.PLAY_PAUSE,
            payload: song
        })
    }

    const onNextClick = (song: Song) => {
        dispatch({
            type: ACTIONS.PLAY_PAUSE,
            payload: song
        })
    }

    const onPreviousClick = (song: Song) => {
        dispatch({
            type: ACTIONS.PLAY_PAUSE,
            payload: song
        })
    }

    return (
        <>
            {currentAudio.audio !== '' || playing ?
                <footer className={`${currentAudio.audio !== '' || playing ? styles.playing : ''}`}>
                    <AudioNoteIcon />
                    <h2>{currentAudio.name}</h2>
                    <div className={styles.controls}>
                        <Button type="invisible" onClick={() => { onPreviousClick(currentAudio) }}>
                            <SkipPreviousIcon />
                        </Button>
                        <Button type="invisible" onClick={() => { onPlayPauseClick(currentAudio) }}>
                            {playing ? <PauseButtonIcon /> : <PlayButtonIcon />}
                        </Button>
                        <Button type="invisible" onClick={() => { onNextClick(currentAudio) }}>
                            <SkipNextIcon />
                        </Button>
                    </div>
                </footer>
                : null}
        </>
    )
}

export default AudioControls
