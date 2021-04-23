import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';


function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0
                }

                return temp
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length - 1
                }

                return temp
            })
        }
    }

    return (
        <div className='c-player'>
            <audio ref={audioEl} src={props.songs[props.currentSongIndex].src} onEnded={() => skipSong(true)}></audio>
            <h4>Playing now </h4>
            <PlayerDetails
                song={props.songs[props.currentSongIndex]}
                isPlaying={isPlaying} />
            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
                audio={audioEl.current}
            />
            <p>next up: <strong>{props.songs[props.nextSongIndex].title}</strong> by <strong>{props.songs[props.nextSongIndex].artist}</strong></p>
        </div>
    )
}

export default Player
