import {combineReducers} from 'redux'

const songsReducer =()=> {
    return [
        {title:'No Scrubs', duration:'4:05'},
        {title:'abc', duration:'2:30'},
        {title:'I want it that way', duration:'1:30'},
    ]
}

const selectedSongReducer =  (selecedSong=null,action) =>{
    if (action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selecedSong;
}

export default combineReducers ({
    songs:songsReducer,
    selecedSong:selectedSongReducer
})