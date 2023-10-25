let h_hand = document.querySelector('.h_hand');
let m_hand = document.querySelector('.m_hand');
let s_hand = document.querySelector('.s_hand');
let digital_clock = document.querySelector('.digital_clock');
let select = document.querySelectorAll("select");
let set_alarm = document.querySelector('.set_alarm');
let isAlarm , timeSet;
let ring= new Audio("./01.mp3");

for(let i = 12;i>=1;i--){
    if(i<10){
        i = `0${i}`;
    }

   let  option = `<option value="${i}">${i}</option>`;
   select[0].firstElementChild.insertAdjacentHTML('afterend',option);
}


for(let i = 59;i>=1;i--){
    if(i<10){
        i = `0${i}`;
    }

   let  option = `<option value="${i}">${i}</option>`;
   select[1].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i = 0; i<2;i++){
    let ampm = 'AM';
    if(i==1){
        ampm ='AM';
    }else{
        ampm = 'PM';
    }
    let  option = `<option value="${ampm}">${ampm}</option>`;
    select[2].firstElementChild.insertAdjacentHTML('afterend',option);
}

setInterval(() => {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    let hr_rotate = 30 * h + m / 2;
    let mn_rotate = 6 * m;
    let sc_rotate = 6 * s;


    h_hand.style.transform = `rotate(${hr_rotate}deg)`;
    m_hand.style.transform = `rotate(${mn_rotate}deg)`;
    s_hand.style.transform = `rotate(${sc_rotate}deg)`;
    digital_clock.innerHTML = date.toLocaleTimeString();

    let ampm = 'AM';
    if(h>=12){
        h = h-12;
        ampm = 'PM'; 
        
    }
    if(h<=9){
        h = `0${h}`;
    }
    if(m<=9){
        m  = `0${m}`
    }

    if(isAlarm ===`${h}:${m} ${ampm}`){
        console.log("true");
        ring.play();
    }else{
        console.log("false");
    }

},1000);

set_alarm.addEventListener('click', () =>{
    
    if(timeSet){
        ring.pause();
        isAlarm ="";
        select.forEach((element)=>{
            element.classList.remove('disabled');
            set_alarm.innerText = 'Set Alarm'; 

        })
        return(timeSet = false);
    }

     let time  =   `${select[0].value}:${select[1].value} ${select[2].value}`;
    //  console.log(time);
    isAlarm = time;
    timeSet = true;

    select.forEach((element)=>{
        element.classList.add('disabled');
    })

    set_alarm.innerText = 'Clear Alarm'; 

    })