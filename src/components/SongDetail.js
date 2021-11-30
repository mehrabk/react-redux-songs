import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      {props?.song ? `${props.song.title} | time: ${props.song.duration}` : "Select Song"}
    </div>
  );
};

const mapStateToProps = (state) => {
  // hooking up selectedSong from state
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
