import React from "react";
import { useState } from "react";

let Songs = ["despacito", "memories", "hall of fame", "faded", "baby"];
let i = 0;

export default function Playlist() {
  const [CurrentSong, setCurrentSong] = useState(Songs[i]);
  const [index, setIndex] = useState(i);
  console.log(index, i, Songs.length);
  let NextSong = () => {
    let newindex = index + 1;
    if (newindex <= Songs.length - 1) {
      setCurrentSong(Songs[newindex]);
      setIndex(newindex);
    } else {
      setCurrentSong(Songs[0]);
      setIndex(0);
    }
  };

  let PrevSong = () => {
    let newindex = index - 1;
    if (newindex > -1) {
      setCurrentSong(Songs[newindex]);
      setIndex(newindex);
    } else {
      setCurrentSong(Songs[Songs.length - 1]);
      setIndex(Songs.length - 1);
    }
  };

  let ShuffleSongs = () => {
    let ran = Math.floor(Math.random() * Songs.length);
    setCurrentSong(Songs[ran]);
    setIndex(ran);
  };

  return (
    <div>
      <button onClick={PrevSong}>Prev</button>
      <h1>{CurrentSong}</h1>
      <button onClick={NextSong}> Next </button>
      <button onClick={ShuffleSongs}>Shuffle </button>
    </div>
  );
}
