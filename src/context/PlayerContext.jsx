const { createContext, useRef } = require("react");

export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{
    const audioRef = useRef();

    const contextValue ={
        audioRef
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.childern}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;