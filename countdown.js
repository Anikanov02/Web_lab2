(function () {
    let countDownDate = new Date("December, 31, 2022 00:00:00");
    setInterval(() => {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        document.querySelector('.days__countdown').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.querySelector('.hours__countdown').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.querySelector('.minutes__countdown').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.querySelector('.seconds__countdown').textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000)
}());