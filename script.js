// Initializing Variables
let songIndex = 1
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let seekBar = document.getElementById('seekBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let masterName = document.getElementById('masterName');
let next = document.getElementById('next');
let back = document.getElementById('back');
let gifs = Array.from(document.getElementsByClassName('gifs'));

let sIndex;





const songs = [
    {songName: "Hasley - Without Me", filePath:"songs/1.mp3", coverPath:'covers/1.png', timestamp: '3:10'},
    {songName: "bülow - Sweet Little Lies", filePath:"songs/2.mp3", coverPath:'covers/2.png', timestamp: '2:56'}, 
    {songName: "Kikimoteleba - Tigini ", filePath:"songs/3.mp3", coverPath:'covers/3.png', timestamp: '2:53'},
    {songName: "bülow - Revolver", filePath:"songs/4.mp3", coverPath:'covers/4.png', timestamp: '2:49'},
    {songName: "Alec Benjamin - Outrunning Karma", filePath:"songs/5.mp3", coverPath:'covers/5.png', timestamp: '3:09'},
    {songName: "Daya - Bad Girl (JVKE Remix)", filePath:"songs/6.mp3", coverPath:'covers/6.png', timestamp: '2:46'},
    {songName: "Daya - Insomnia", filePath:"songs/7.mp3", coverPath:'covers/7.png', timestamp: '2:58'},
    {songName: "Rovalio - Bikhra ft. Abdul Hannan", filePath:"songs/8.mp3", coverPath:'covers/8.png', timestamp: '2:48'},
    {songName: "Requested By: Uzair POLAR 😂🤣", filePath:"songs/9.mp3", coverPath:'covers/9.png', timestamp: '1:24'},
]

    songItems.forEach((element, i)=>{
        element.getElementsByTagName('img')[0].src = songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
        element.getElementsByClassName('timeStamp')[0].innerText = songs[i].timestamp;
    })

// Play-Pause
    masterPlay.addEventListener('click', () =>{
        if (audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
            gifs[songIndex -1].classList.remove('gifs')
            sIndex.classList.remove('fa-play');
            sIndex.classList.add('fa-pause');
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity = 0;
            gifs[songIndex -1].classList.add('gifs')
            sIndex.classList.remove('fa-pause');
            sIndex.classList.add('fa-play');
            
        }
    })
    //Time-Update
    audioElement.addEventListener('timeupdate', () =>{
        //Seek-Bar
         progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
         seekBar.value = progress;
    })
    
    
    seekBar.addEventListener('change', ()=>{
        audioElement.currentTime = seekBar.value * audioElement.duration/100;
    })

    const makeAllPlays = ()=>{
        songItemPlay.forEach((element)=>{
            element.classList.add('fa-play');
        })
        gifs.forEach((element)=>{
            element.classList.add('gifs');
        })
    }
    songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        e.target.classList.add('padfix');
        
        gifs[index -1].classList.remove('gifs');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterName.innerText = songs[index -1].songName;

    })
 })

 next.addEventListener('click', () =>{
    
    if (songIndex>=9) {
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
//  trying to make pause apear when next and gifs
    sIndex = document.getElementById(songIndex);
    masterName.innerText = songs[songIndex -1].songName;
    gifs[songIndex-1].classList.remove('gifs');
    // rest of the code
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    sIndex.classList.remove('fa-play');
    sIndex.classList.add('fa-pause');

 })

 back.addEventListener('click', () =>{

    if (songIndex<=1){
        songIndex = 9; 
    }
    else{
        songIndex-=1;
    }
    makeAllPlays();
    //my experiment
    sIndex = document.getElementById(songIndex);
    sIndex.classList.remove('fa-play');
    sIndex.classList.add('fa-pause');
    
    gifs[songIndex-1].classList.remove('gifs');
    //rest of code
    masterName.innerText = songs[songIndex -1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');


 })

