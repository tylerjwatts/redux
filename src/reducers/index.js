import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { artist: 'Father John Misty', title: 'Smoochie', duration: '4:05' },
        { artist: 'The Smiths', title: 'The Old House', duration: '3:25' },
        { artist: 'Arctic Monkeys', title: 'Tranquility Base Hotel & Casino', duration: '4:36' },
        { artist: 'Blink 182', title: 'First Date', duration: '2:53' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});