console.log("Welcome to Spotify");

//Initialize the variables
let songIndex=0;
let audioElement=new Audio("songs/music1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem")) ;
let mastersongInfo = document.getElementById("mastersongInfo");

let songs=[
    {songName:"Baari- Bilal Saeed", filepath:"songs/music1.mp3", coverPath:"covers/cover1.jpg"},
    {songName:"Kyon- Barfi", filepath:"songs/music2.mp3", coverPath:"covers/cover2.jpg"},
    {songName:"Mere Sohneya - Kabir Singh", filepath:"songs/music3.mp3", coverPath:"covers/cover3.jpg"},
    {songName:"Chand Chupa", filepath:"songs/music4.mp3", coverPath:"covers/cover4.jpg"},
    {songName:"Chand Chupa", filepath:"songs/music5.mp3", coverPath:"covers/cover5.jpg"},
    {songName:"Chand Chupa", filepath:"songs/music6.mp3", coverPath:"covers/cover6.jpg"},
    {songName:"Chand Chupa", filepath:"songs/music7.mp3", coverPath:"covers/cover7.jpg"},
]

songItems.forEach((element , i)=>{
    //console.log(element , i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

 //audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
    
})

//listen to events

audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);           //  prcntg = (curnt tym / duratn) * 100
    myProgressBar.value=progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;         
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
        
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        //console.log(e);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        audioElement.src=`songs/music${songIndex+1}.mp3`;
        mastersongInfo.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })

})  

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/music${songIndex+1}.mp3`;
    mastersongInfo.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/music${songIndex+1}.mp3`;
    mastersongInfo.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})





