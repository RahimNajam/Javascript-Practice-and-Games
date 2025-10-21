const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock') //dono mai sy koi sy bhi hum select kr skty hain


setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)