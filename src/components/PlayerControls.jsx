import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function PlayerControls({ isPlaying, setIsPlaying, skipSong  }) {
    return (
        <div className='c-player--controls'>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faBackward} onClick={() => { skipSong(false) }} />
            </button>
            <button className='play-btn' onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} title={isPlaying ? 'Pause' : 'Play'} />
            </button>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faForward} onClick={() => { skipSong(true) }} />
            </button>

        </div>
    )
}

export default PlayerControls
