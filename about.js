const CLASSNAME = "-visible";
const TIMEOUT2 = 1500;
const $target2 = $(".title-about");

setInterval(() => {
  $target2.addClass(CLASSNAME);
  setTimeout(() => {
    $target2.removeClass(CLASSNAME);
  }, TIMEOUT2);
}, TIMEOUT2 * 2);

const CLASSNONE = "-visible";
const TIMEOUT1 = 1500;
const $target1 = $(".title-top");

setInterval(() => {
  $target1.addClass(CLASSNONE);
  setTimeout(() => {
    $target1.removeClass(CLASSNONE);
  }, TIMEOUT1);
}, TIMEOUT1 * 2);