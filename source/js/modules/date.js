const bannerDates = document.querySelectorAll('[data-date="1"]');

const script = (lng) => {
  bannerDates.forEach((bannerDate) => {
    let date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };

    if (lng === 'ru') {
      bannerDate.innerText = date.toLocaleString('ru', options);
    } else {
      bannerDate.innerText = date.toLocaleString('en-US', options);
    }
  });
};

export {script};
