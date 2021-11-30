import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Tabestoon Kootahe", duration: "5:10" },
    { title: "Istade Mordan", duration: "4:30" },
    { title: "Arazel", duration: "6:02" },
    { title: "Tehran Male Mane", duration: "4:34" },
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  const { type, payload } = action;
  if (type === "SONG_SELECTED") {
    return payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
