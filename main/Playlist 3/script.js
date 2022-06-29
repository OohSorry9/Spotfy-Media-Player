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
let cover = document.getElementById('cover');

let sIndex;
let pfp = document.getElementById('pfp');


const songs = [
    {songName: "Divine - 3:59AM (Edit Audio)", filePath:"songs/1.mp3", coverPath:'covers/1.png', timestamp: '0:48', pfp:'1.png'},
    {songName: "Brown Munde - AP Dhillon (Lofi)", filePath:"songs/2.mp3", coverPath:'covers/2.png', timestamp: '5:16', pfp:'2.png'}, 
    {songName: "Shareh - Attachments", filePath:"songs/3.mp3", coverPath:'covers/3.png', timestamp: '2:33', pfp:'3.png'},
    {songName: "The Weekend - Save Your Tears", filePath:"songs/4.mp3", coverPath:'covers/4.png', timestamp: '4:08', pfp:'4.png'},
    {songName: "The Neighbourhood - Pretty Boy", filePath:"songs/5.mp3", coverPath:'covers/5.png', timestamp: '4:48', pfp:'5.png'},
    {songName: "Nicky Youre, dazy - Sunroof", filePath:"songs/6.mp3", coverPath:'covers/6.png', timestamp: '3:26', pfp:'6.png'},
    {songName: "Alan Walker & Ava Max - Alone, Pt. II", filePath:"songs/7.mp3", coverPath:'covers/7.png', timestamp: '4:05', pfp:'7.png' },
    {songName: "Phir Milenge - Faisal x Young Stunners", filePath:"songs/8.mp3", coverPath:'covers/8.png', timestamp: '5:35', pfp:'8.png'},
    {songName: "カネコアヤノ - Kaneko Ayano", filePath:"songs/9.mp3", coverPath:'covers/9.png', timestamp: '2:59', pfp:'9.png'},
    {songName: "Let Me Down Slowly - Alec Benjamin", filePath: "songs/10.mp3", coverPath:"covers/10.png",timestamp:"2:58", pfp: '10.png'},
    {songName: "Versity Fanclub - Zero", filePath: "songs/10.mp3", coverPath:"covers/11.png",timestamp:"2:56", pfp: '11.png' }
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timeStamp')[0].innerText = songs[i].timestamp;
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.add('fa-play');
    })
    gifs.forEach((element)=>{
        element.classList.add('gifs');
    })

}
function clearCover (){
    cover.classList.remove('pfp1');
    cover.classList.remove('pfp2');
    cover.classList.remove('pfp3');
    cover.classList.remove('pfp4');
    cover.classList.remove('pfp5');
    cover.classList.remove('pfp6');
    cover.classList.remove('pfp7');
    cover.classList.remove('pfp8');
    cover.classList.remove('pfp9');
    cover.classList.remove('pfp10');
    cover.classList.remove('pfp11');
    pfp.classList.remove('pfp1');
    pfp.classList.remove('pfp2');
    pfp.classList.remove('pfp3');
    pfp.classList.remove('pfp4');
    pfp.classList.remove('pfp5');
    pfp.classList.remove('pfp6');
    pfp.classList.remove('pfp7');
    pfp.classList.remove('pfp8');
    pfp.classList.remove('pfp9');
    pfp.classList.remove('pfp10');
    pfp.classList.remove('pfp11');
}

// Play-Pause
    masterPlay.addEventListener('click', () =>{
        if (audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
            gifs[songIndex -1].classList.remove('gifs')
            songItemPlay[songIndex - 1].classList.remove('fa-play');
            songItemPlay[songIndex - 1].classList.add('fa-pause');
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity = 0;
            gifs[songIndex -1].classList.add('gifs')
            songItemPlay[songIndex -1].classList.remove('fa-play');
            songItemPlay[songIndex -1].classList.add('fa-pause');
            makeAllPlays();
            
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


songItemPlay.forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    e.target.classList.add('padfix');
    
    gifs[index -1].classList.remove('gifs');
    gif.style.opacity= 1;
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    masterName.innerText = songs[index -1].songName;

})
})

next.addEventListener('click', () =>{

if (songIndex>=11) {
    songIndex = 1;
}
else{
    songIndex+=1;
}
let test = `pfp${songIndex}`;
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
clearCover()
cover.classList.add(test);
pfp.classList.add(test);
})

back.addEventListener('click', () =>{

if (songIndex<=1){
    songIndex = 11; 
}
else{
    songIndex-=1;
}
let test = `pfp${songIndex}`;
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
clearCover()
cover.classList.add(test)
pfp.classList.add(test);
})

