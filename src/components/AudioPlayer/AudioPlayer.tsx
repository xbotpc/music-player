import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Modal from "../Modal/Modal";

const AudioPlayer = () => {
    const { currentAudio, playing } = useSelector((state: RootState) => state.playback);
    const { playlist } = useSelector((state: RootState) => state.playlist);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (playing) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [currentAudio, playing]);

    useEffect(() => {
        if (playlist.filter((x) => x.audio === audioRef.current?.src).length === 0) {
            audioRef.current?.pause();
        }
    }, [playlist]);

    return (
        <Modal id={'hiddenModal'}>
            <audio ref={audioRef} src={currentAudio.audio} >
                Your browser does not support audio playback. Fix your shit.
            </audio>
        </Modal>
    );
}

export default AudioPlayer;
