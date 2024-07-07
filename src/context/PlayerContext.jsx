import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBar = useRef();
    const seekBackground = useRef();

    const [isMuted, setisMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [song, setSong] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            seconds: 0,
            minutes: 0
        },
        totalTime: {
            seconds: 0,
            minutes: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }
    
    const playSongs = async (id)=>{
        await setSong(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const prev = async ()=>{
        if(song.id > 0) {
            await setSong(songsData[song.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async ()=>{
        if(song.id < songsData.length - 1) {
            await setSong(songsData[song.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    
    const jumpSong = async (e)=>{

        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBackground.current.offsetWidth) * audioRef.current.duration);
    }

    const manageVolume = async (e) =>{
        const vol = e.target.value;
        setVolume(vol);
        audioRef.current.volume = vol;
    }

    const muteSong = ()=>{
        if(audioRef.current.volume === 0){
            setVolume(1);
            audioRef.current.volume = 1;
        } else {
            audioRef.current.volume = 0;
        }

    }

    useEffect(() => {

        audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100 )) +"%";
            setTime({
                currentTime: {
                    seconds: Math.floor(audioRef.current.currentTime % 60),
                    minutes: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime: {
                    seconds: Math.floor(audioRef.current.duration % 60),
                    minutes: Math.floor(audioRef.current.duration / 60)
                }
            })
        }

    })

    const contextValue = {
        audioRef,
        seekBar,
        seekBackground,
        song, setSong,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playSongs,
        prev, next,
        jumpSong,
        volume, manageVolume,
        isMuted, muteSong, setisMuted

    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;