const counter_form = document.getElementById('counter_form');
const stopBtn = document.getElementById('stopBtn');
const progressPer = document.getElementById('progressPer');
const counter = document.querySelector('.counter');
const msg = document.querySelector('.msg');
let alerm = document.getElementById('alerm');


let count;

counter_form.onsubmit = (e) => {
    e.preventDefault();

    clearInterval(count);

    // Get Form Data 
    let form_data = new FormData(e.target);
    let { date, time } = Object.fromEntries(form_data.entries());

    // Get Time 
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

    if( !date || !time ){
        msg.innerHTML = setAlert('All fields are required!!');
    }else{
        count = setInterval(() => {

            timeCounter(date, time, counter, alerm);

            let proBar = progressBar(start_time, end_time);

            if( proBar > 0 && proBar < 30){
                progressPer.style.backgroundColor = 'red';
            }else if( proBar >= 30 && proBar < 60 ){
                progressPer.style.backgroundColor = 'blue';
            }else{
                progressPer.style.backgroundColor = 'green';
            }

            proBar && (progressPer.style.display = 'block');
            progressPer.style.width = `${proBar}%`;
            
        }, 1000)
    }

    

}

stopBtn.onclick = (e) => {
    e.preventDefault();
    alerm.pause();
}