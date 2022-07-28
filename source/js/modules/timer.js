const timers = document.querySelectorAll('[data-timer="1"]');

export const timerSet = (lng) => {
  timers.forEach((timer) => {
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds() + 10);

    // id таймера
    let timerId = null;

    // склонение числительных
    function declensionNum(num, words) {
      if (lng === 'ru') {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
      } else {
        return words[num === 1 ? 0 : 1];
      }
    }

    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
        window.location.href = 'http://google.com';
      }

      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      if (lng === 'ru') {
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      } else {
        $minutes.dataset.title = declensionNum(minutes, ['minute', 'minutes']);
        $seconds.dataset.title = declensionNum(seconds, ['second', 'seconds']);
      }
    }

    // получаем элементы, содержащие компоненты даты
    const $minutes = timer.querySelector('.timer__minutes');
    const $seconds = timer.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
};
