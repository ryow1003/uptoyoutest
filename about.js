const CLASSNAME = "-visible";
const TIMEOUT2 = 1500;
const $target2 = $(".title-about");

setInterval(() => {
  $target2.addClass(CLASSNAME);
  setTimeout(() => {
    $target2.removeClass(CLASSNAME);
  }, TIMEOUT2);
}, TIMEOUT2 * 2);