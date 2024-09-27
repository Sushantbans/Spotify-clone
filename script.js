console.log("welcome to Soptify");
//Initialize the vaiable
let songIndex=0;
let masterplay= document.getElementById('masterplay');
let audioElement = new Audio('songs/Metamorphosis.mp3');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemplay = document.getElementsByClassName('songItemplay')
// audioElement.play();
 //Array for song 
 let songs=[
    {songName : "Metamorphosis", filpath:"songs/1.mp3",coverpath:"cover/download.jpeg"},
    {songName : "Aam Jahe Munde - Parmish Verma", filpath:"songs/2.mp3",coverpath:"cover/download (1).jpeg"},
    {songName : "Lean On", filpath:"songs/3.mp3",coverpath:"cover/lean.jpg"},
    {songName : "Let-Me-Love-You", filpath:"songs/4.mp3",coverpath:"cover/let.jpeg"},
    {songName : "Old-Town-Road", filpath:"songs/5.mp3",coverpath:"cover/old.jpeg"},
    {songName : "One Love - Shubh", filpath:"songs/6.mp3",coverpath:"cover/download (2).jpeg"},
    {songName : "Closer-x-Apna-Bana-Le-Mashup", filpath:"songs/7.mp3",coverpath:"cover/download (5).jpeg"},
    {songName : "Brown-Rang-Honey Singh", filpath:"songs/8.mp3",coverpath:"cover/download (4).jpeg"},
    {songName : "Tauba Tauba", filpath:"songs/9.mp3",coverpath:"cover/download (3).jpeg"},
    {songName : "People-Libianca", filpath:"songs/10.mp3",coverpath:"cover/people.jpeg"},
 ]

songItem.forEach((element ,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

 
 //Handel play/pause click
 masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();           //for play music
        masterplay.classList.remove('fa-circle-play');   // play button remove pause button add
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
    })
//Listen to events
audioElement.addEventListener('timeupdate',()=>{

    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value= progress;
    

});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value  * audioElement.duration /100;
});

const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element )=>{

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element )=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      
      songIndex= parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src=`songs/${songIndex+1}.mp3`;
      mastersongName.innerText = songs[songIndex].songName;
      
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity =1;
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        
        songIndex =0;
    }else{
        
        songIndex +=1;
    }

    
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
      songItemplay.classList.remove('fa-circle-play');
      songItemplay.classList.add('fa-circle-pause');
  
})

document.getElementById('Previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      mastersongName.innerText = songs[songIndex].songName;
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
})