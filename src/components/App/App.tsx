import { Provider } from 'react-redux';
import { ReactComponent as SettingsGearIcon } from '../../images/settingsGear.svg';
import store from '../../state/store';
import AddSong from '../AddSong/AddSong';
import AudioControls from '../AudioControls/AudioControls';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Button from '../Button/Button';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.playerContainer}>
          <header>
            <Button onClick={() => { }} styleClass={styles.settingsIcon}>
              <SettingsGearIcon />
            </Button>
            Music Player
            <AddSong />
          </header>
          <Playlist />
          <AudioControls />
        </div>
        <AudioPlayer />
      </div>
    </Provider>
  );
}

export default App;
