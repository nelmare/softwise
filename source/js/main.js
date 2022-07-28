import {iosVhFix} from './utils/ios-vh-fix';
import {script} from './modules/date';
import {timerSet} from './modules/timer';
import {alertShow} from './modules/alert';
import {lng, languageChange} from './modules/language';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  script(lng);
  timerSet(lng);
  alertShow();
  languageChange();
});
