import timerbeep from '../assets/audios/time-passing-sound-effect-fast-clock-108403.mp3'

export  function loadBeep (){
  const audio = new Audio(timerbeep);
  audio.load();
  return ()=>{
    audio.currentTime =0;
    audio.play ();
  };
}