
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const button = document.querySelector('#adamaki')
keys.forEach(key=>{
    key.addEventListener('click',()=> {
        playNote(key)
    })
})

document.addEventListener('keydown',e=>{
    if(e.repeat) return
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

button.addEventListener('click',()=>{
        playAdamaki()
})
function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    //so i can spam the key like a normal piano
    noteAudio.currentTime = 0;
    noteAudio.play()
    key.classList.add('active')
    //remove active as soon as audio clip ends
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active')
    })
    
}

function playAdamaki(){
const chaos = [0,1,2,3,4,5,6,7,8,9,10,11]

const randkey = Math.floor(Math.random(chaos)*chaos.length)
    playNote(keys[randkey])
}