const Images = [
  'pic/letter1.png',
  'pic/letter2.png',
  'pic/letter3.png',
  'pic/letter4.png'
];
const change = document.querySelector('#change_image');
let i = 0;
function change_main_vidual_background(){
  if(i === Images.length) {
  i = 0;
  };
  change.style.backgroundImage = 'url(' + Images[i] + ')';
  i++;
}
window.setInterval(change_main_vidual_background, 3000);