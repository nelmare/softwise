const langRuSection = document.querySelector('[data-lang="ru"]');
const langEngSection = document.querySelector('[data-lang="eng"]');
let params = (new URL(document.location)).searchParams;
export let lng = params.get('lng');

export const languageChange = () => {
  if (lng === 'ru') {
    langRuSection.classList.remove('is-hidden');
    langRuSection.classList.add('is-show');
  } else {
    document.children[0].setAttribute('lang', 'en');
    langEngSection.classList.remove('is-hidden');
    langEngSection.classList.add('is-show');
  }
};
