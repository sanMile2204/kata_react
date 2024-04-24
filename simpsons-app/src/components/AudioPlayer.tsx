import { useRef } from "react";
import { useState } from "react";
import pause_audio from "../images/pause-music.svg";
import play_audio from "../images/play-music.svg";
import simpsons_song from "../assets/audio/The Simpsons.mp3";
import './AudioPlayer.css';

export default function AudioPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
          <audio ref={audioRef} src={simpsons_song} />
          { 
            isPlaying ? <img src={pause_audio} className="audio" alt="simpsons_song_pause" onClick={togglePlay}></img> : 
            <img src={play_audio} className="audio" alt="simpsons_song_play" onClick={togglePlay}></img>
          }
        </div>
      );
}