import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function PlayerControls({ isPlaying, setIsPlaying, skipSong, audio }) {
    const [volume, setVolume] = useState(1);
    const [seeking, setSeeking] = useState(0);
    const [muted, setMuted] = useState(!true);

    
    useEffect(() => {
        if (isPlaying) {
            const currentTimeInterval = setInterval(() => {
                setSeeking(audio.currentTime);
            }, 500)
        }
    }, [isPlaying, skipSong])
    
    const handleChangeVolume = (event) => {
        setVolume(event.target.value)
        if (isPlaying) {
            audio.volume = volume
            if(muted === false) {
                audio.muted = false
            }
        }
    }

    const handleChange = (event) => {
        setSeeking(event.target.value)
        if (isPlaying) {
            audio.currentTime = seeking
          
        }
    }

    const handelSetMuted = (event) => {
        if(isPlaying){
            audio.muted = event
            setMuted(!muted)
        }
    }

    return (
        <div className='c-player--controls'>
            <div>

            </div>
            <div className='c-player--control'>
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
            <div className='c-player--controls--range'>
                <div className='c-player--controls--currentTime'>
                    <input type="range" max={isPlaying ? audio.duration :
                        '0'} min='0' step='1' value={seeking} onChange={(e) => handleChange(e)} />
                </div>
                <div className='c-player--controls--volume'>
                    <input type="range" max='1' min='0' step='0.1' value={volume} onChange={(e) => handleChangeVolume(e)} />
                    <button className='volume-btn'>
                        <FontAwesomeIcon icon={audio?.muted ? faVolumeOff : faVolumeUp} onClick={() => { handelSetMuted(muted) }} />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default PlayerControls
