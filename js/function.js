/**
 * Set Alert 
 */
const setAlert = (msg, type="danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}

/**
 * Time Counter Function
 */
const timeCounter = (date, time, counter, alerm = null) => {

    // let start time, end time & order time 
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);
    let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

    // Convert the order_time as the time formate 
    let total_sec = Math.floor(order_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    // Now, Finally Process the time
    let hour = total_hour - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hour * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min* 60);

    if(total_sec <= 0){
        clearInterval(count);
        alerm.play();
    }

    counter.innerHTML = `
        <h4 class="text-center fw-bold">${ total_day } Days : ${hour} Hours : ${min} Minutes : ${sec} Seconds</h4>
    `;
}

/**
 * Count Percentage
 */
const progressBar = (start_time, end_time) => {

    let timeDifferent = end_time - start_time;
    let timeChange = end_time - Date.now();

    return Math.floor((100 *  timeChange) / timeDifferent);
}