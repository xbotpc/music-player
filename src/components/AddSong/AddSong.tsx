import { ChangeEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import { ACTIONS } from '../../state/actions';
import { RootState } from '../../state/store';
import Modal from '../Modal/Modal';

const AddSong = () => {
    const dispatch = useDispatch();
    const { playlist } = useSelector((state: RootState) => state.playlist)
    const fileSelectorRef = useRef<HTMLInputElement | null>(null);

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const audioFiles = e?.target?.files;
        if (audioFiles !== null) {
            let newSongs = Array.from(audioFiles).map((audioFile, i: number) => {
                return {
                    id: `${audioFile.name}-${audioFile.size}-${audioFile.type}`,
                    name: audioFile.name,
                    audio: URL.createObjectURL(audioFile)
                }
            });
            if (playlist.length !== 0) {
                newSongs = newSongs.filter((x) => playlist.find(y => y.id === x.id) === undefined);
            }
            dispatch({ type: ACTIONS.ADD_SONG, payload: newSongs });
        }
    }

    const onClick = () => {
        fileSelectorRef?.current?.click();
    }

    return (
        <>
            <button type="button" onClick={onClick}>
                <PlusIcon />
            </button>
            <Modal id="hiddenModal-1">
                <input ref={fileSelectorRef}
                    type="file"
                    name="audioSelector"
                    onChange={onFileChange}
                    multiple
                    accept={'audio/*'}
                />
            </Modal>
        </>
    )
}

export default AddSong
