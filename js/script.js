// Step One 
// declare the elements that you will interact with, get the buttons to display values in the input field using eventlistner
let tinyButton = document.querySelector('#baby_circle1');
const output = document.querySelector('#magicText')

tinyButton.addEventListener('click', function(){
 output.value = 'When was the last time you lied?'
 tinyButton.style.backgroundColor = 'salmon';
})

let tinyButton2 = document.querySelector('#baby_circle2');
tinyButton2.addEventListener('click', function(){
    output.value = "Call your crush up and ask him out"
    tinyButton2.style.backgroundColor = 'salmon';
})

let tinyButton3 = document.querySelector('#baby_circle3');
tinyButton3.addEventListener('click', function(){
    output.value = 'Have you ever cheated on someone?'
    tinyButton3.style.backgroundColor = 'salmon';
})

let tinyButton4 = document.querySelector('#baby_circle4');
tinyButton4.addEventListener('click', function(){
    output.value = 'When was the last time you cried?'
    tinyButton4.style.backgroundColor = 'salmon';
})

let tinyButton5 = document.querySelector('#baby_circle5');
tinyButton5.addEventListener('click', function(){
    output.value = 'What are your top three turn-ons?'
    tinyButton5.style.backgroundColor = 'salmon';
})

//Try using Array to get the Truth and Dares listed and use the event listner to display them 
let tinyButton6 = document.querySelector('#baby_circle6')
let tinyButton7 = document.querySelector('#baby_circle7')
let tinyButton8 = document.querySelector('#baby_circle8')
let tinyButton9 = document.querySelector('#baby_circle9')
let tinyButton10 =document.querySelector('#baby_circle10')

 const trueDare = ['Throw an ice cube under your shirt and hold still for 30 seconds','Tell us your most embarrassing vomit story.','Whats your biggest fear?','What was the worst things you have done at work?','Show your unshaven legs'] 
 for(i=0;i < trueDare.length; i++){
     tinyButton6.addEventListener('click', function(){
        output.value= trueDare[0]
        tinyButton6.style.backgroundColor = 'salmon';
     })   
 }
 for(i=0;i < trueDare.length; i++){
    tinyButton7.addEventListener('click', function(){   
       output.value= trueDare[1]  
       tinyButton7.style.backgroundColor = 'salmon';
    })   
}
for(i=0;i < trueDare.length; i++){
    tinyButton8.addEventListener('click', function(){
        output.value= trueDare[2]
        tinyButton8.style.backgroundColor = 'salmon';
    })   
}  

for(i=0;i < trueDare.length; i++){
    tinyButton9.addEventListener('click', function(){
       output.value= trueDare[3]  
       tinyButton9.style.backgroundColor = 'salmon';
    })   
}

for(i=0;i < trueDare.length; i++){
    tinyButton10.addEventListener('click', function(){   
       output.value= trueDare[4]  
       tinyButton10.style.backgroundColor = 'salmon';
    })   
}

// Try using the for each loop to display the items in the array using buttons 
let tinyButton11 = document.querySelector('#baby_circle11')
let tinyButton12 = document.querySelector('#baby_circle12')
let tinyButton13 = document.querySelector('#baby_circle13')
let tinyButton14 = document.querySelector('#baby_circle14')
let tinyButton15 =document.querySelector('#baby_circle15')

const dareTrue = ['What terrible movie or show is your guilty pleasure?','Read the last text message you sent out loud.','What is the longest you have ever gone without showering?','Do as many push-ups as you can in one minute.','Do you pee in pools?']
dareTrue.forEach (function (item){
    tinyButton11.addEventListener('click', function(){
    output.value = dareTrue[0]
    tinyButton11.style.backgroundColor = 'salmon';
    })   
})

dareTrue.forEach (function (item){
    tinyButton12.addEventListener('click', function(){
    output.value = dareTrue[1]
    tinyButton12.style.backgroundColor = 'salmon';
    })   
})

dareTrue.forEach (function (item){
    tinyButton13.addEventListener('click', function(){
    output.value = dareTrue[2]
    tinyButton13.style.backgroundColor = 'salmon';
    })   
})

dareTrue.forEach (function (item){
    tinyButton14.addEventListener('click', function(){
    output.value = dareTrue[3]
    tinyButton14.style.backgroundColor = 'salmon';
    })   
})

dareTrue.forEach (function (item){
    tinyButton15.addEventListener('click', function(){
    output.value = dareTrue[4]
    tinyButton15.style.backgroundColor = 'salmon';
    })   
})
 
// The last five
let tinyButton16 = document.querySelector('#baby_circle16')
let tinyButton17 = document.querySelector('#baby_circle17')
let tinyButton18 = document.querySelector('#baby_circle18')
let tinyButton19 = document.querySelector('#baby_circle19')
let tinyButton20 =document.querySelector('#baby_circle20')

const falTrue= ['What is the last excuse you used to cancel plans?','What is the weirdest thing you have ever done in public?','Have you ever stolen anything?','Let another player tickle you but do not laugh!','Show off your best dance moves for the full duration of a song.']
for(i=0;i<falTrue.length;i++){
    tinyButton16.addEventListener('click', function(){
        output.value= falTrue[0];
        tinyButton16.style.backgroundColor = 'salmon';
    })
}
for(i=0;i<falTrue.length;i++){
    tinyButton17.addEventListener('click', function(){
        output.value= falTrue[1];
        tinyButton17.style.backgroundColor = 'salmon';
    })
}
for(i=0;i<falTrue.length;i++){
    tinyButton18.addEventListener('click', function(){
        output.value= falTrue[2];
        tinyButton18.style.backgroundColor = 'salmon';
    })
}
for(i=0;i<falTrue.length;i++){
    tinyButton19.addEventListener('click', function(){
        output.value= falTrue[3];
        tinyButton19.style.backgroundColor = 'salmon';
    })
}
for(i=0;i<falTrue.length;i++){
    tinyButton20.addEventListener('click', function(){
        output.value= falTrue[4];
        tinyButton20.style.backgroundColor = 'salmon'; 
    })
}


/* The checkboxes, If the player clicks on yes, he can not click on no, and when he clicks on no, he can not click on  yes
I could not achieve this with the checkboxes*/
let crowdCheer = new Audio("/audio/Outdoor-Audience-Cheering-www.fesliyanstudios.com.mp3")
let yesClick= document.querySelector('#yes');
yesClick.addEventListener('click', function(){
    crowdCheer.play()
   let check = document.querySelector('#yes').checked;
    if ( check == true){
        confetti({
            particleCount: 800
          });
          confetti(
              {
                  spread:400
              }
          )

          confetti();  setTimeout(() => {
            confetti.repeat(count);
          }, 10000);
    }
   
})

let evilLaugh = new Audio("/audio/Evil-Laugh-A1-www.fesliyanstudios.com.mp3")
let noClick= document.querySelector('#no');
noClick.addEventListener('click', function (){
    evilLaugh.play()  
    if (noClick.checked) {
        document.querySelector('#yes').disabled= true
    }
    else{
        document.querySelector('#yes').disabled= false
    }     
})





