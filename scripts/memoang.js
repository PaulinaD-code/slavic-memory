let cart1 = document.getElementById('cart-1');
let cart2 = document.getElementById('cart-2');
let cart3 = document.getElementById('cart-3');
let cart4 = document.getElementById('cart-4');
let cart5 = document.getElementById('cart-5');
let cart6 = document.getElementById('cart-6');
let cart7 = document.getElementById('cart-7');
let cart8 = document.getElementById('cart-8');
let cart9 = document.getElementById('cart-9');
let cart10 = document.getElementById('cart-10');
let cart11 = document.getElementById('cart-11');
let cart12 = document.getElementById('cart-12');
let cart13 = document.getElementById('cart-13');
let cart14 = document.getElementById('cart-14');

let plachta1 = document.getElementById('plachta-1');
let plachta2 = document.getElementById('plachta-2');
let plachta3 = document.getElementById('plachta-3');
let plachta4 = document.getElementById('plachta-4');
let plachta5 = document.getElementById('plachta-5');
let plachta6 = document.getElementById('plachta-6');
let plachta7 = document.getElementById('plachta-7');
let plachta8 = document.getElementById('plachta-8');
let plachta9 = document.getElementById('plachta-9');
let plachta10 = document.getElementById('plachta-10');
let plachta11 = document.getElementById('plachta-11');
let plachta12 = document.getElementById('plachta-12');
let plachta13 = document.getElementById('plachta-13');
let plachta14 = document.getElementById('plachta-14');

let title1 = document.getElementById('title-1');
let title2 = document.getElementById('title-2');
let title3 = document.getElementById('title-3');
let title4 = document.getElementById('title-4');
let title5 = document.getElementById('title-5');
let title6 = document.getElementById('title-6');
let title7 = document.getElementById('title-7');
let title8 = document.getElementById('title-8');
let title9 = document.getElementById('title-9');
let title10 = document.getElementById('title-10');
let title11 = document.getElementById('title-11');
let title12 = document.getElementById('title-12');
let title13 = document.getElementById('title-13');
let title14 = document.getElementById('title-14');

let image1 = document.getElementById('image-n-1');
let image2 = document.getElementById('image-n-2');
let image3 = document.getElementById('image-n-3');
let image4 = document.getElementById('image-n-4');
let image5 = document.getElementById('image-n-5');
let image6 = document.getElementById('image-n-6');
let image7 = document.getElementById('image-n-7');
let image8 = document.getElementById('image-n-8');
let image9 = document.getElementById('image-n-9');
let image10 = document.getElementById('image-n-10');
let image11 = document.getElementById('image-n-11');
let image12 = document.getElementById('image-n-12');
let image13 = document.getElementById('image-n-13');
let image14 = document.getElementById('image-n-14');

let grid1 = document.getElementById('grid-01');
let grid2 = document.getElementById('grid-02');
let grid3 = document.getElementById('grid-03');
let grid4 = document.getElementById('grid-04');
let grid5 = document.getElementById('grid-05');
let grid6 = document.getElementById('grid-06');
let grid7 = document.getElementById('grid-07');
let grid8 = document.getElementById('grid-08');
let grid9 = document.getElementById('grid-09');
let grid10 = document.getElementById('grid-10');
let grid11 = document.getElementById('grid-11');
let grid12 = document.getElementById('grid-12');
let grid13 = document.getElementById('grid-13');
let grid14 = document.getElementById('grid-14');

let cartContainer = document.getElementById('cart-group-container');
let cartSettings = document.getElementById('cart-setting');
let checkPoints = document.getElementById('memory-points');
let textPoint = document.getElementById('memo-points');
let level2 = document.getElementById('opportunity-memory');
let restartGame = document.getElementById('restart-memory-game');

let wins = 0;
let loses = 0;
point = 0;

let creatures = {
  Leszy: {
    name: "Leshy", //1
    image: 'memo-img image-11'
  },

  Północnica: {
    name: "Midnight Lady", //2
    image: 'memo-img image-12'
  },

  Południca: {
    name: "Moon Lady", //3
    image: 'memo-img image-13'
  },

  Topielica: {
    name: "Drowned Woman",//4
    image: 'memo-img image-14'
  },

  Czart: {
    name: " Devil ",//5
    image: 'memo-img image-15'
  },

  Wodnik: {
    name: "Aquarius",//6
    image: 'memo-img image-16'
  },

  Alkonost: {
    name: "Alkonost",//7 eye-visible
    image: 'memo-img image-17'
  },

  Wilkołak: {
    name: " Werewolf ",//8
    image: 'memo-img image-18'
  },

  Żmij: {
    name: "Viper Man",//9 eye-visible
    image: 'memo-img image-19'
  },

  Latawiec: {
    name: "Kite Bird",//10
    image: 'memo-img image-20'
  },

  BabaJaga: {
    name: " Yaga Witch ",//11
    image: 'memo-img image-21'
  },

  BorowaCiotka: {
    name: "Boron's Aunt",//12 eye-visible
    image: 'memo-img image-22'
  },

  Nocnica: {
    name: " Night Lady ",//13
    image: 'memo-img image-23'
  },

  Wampir: {
    name: " Vampire ",//14
    image: 'memo-img image-24'
  },

  Ażdacha: {
    name: "Azdacha",//15
    image: 'memo-img image-25'
  },

  Sirin: {
    name: ` Sirin `,//16
    image: 'memo-img image-26'
  },

  Bies: {
    name: " Devil2 ",//17 Bies
    image: 'memo-img image-27'
  },

  Grzenia: {
    name: "Gzenya",//18 eye-visible
    image: 'memo-img image-29'
  },

  Strzyga: {
    name: " Vampire Girl",//19
    image: 'memo-img image-30'
  },

  Mamuna: {
    name: "Mamoona",//20
    image: 'memo-img image-28'
  },

  Wiła: { //21
    name: "Wila",
    image: 'memo-img image-31'
  },

  Chała: { //22
    name: " Challah ",
    image: 'memo-img image-32'
  },

  Brzeginia: { //23
    name: "Shore Woman",
    image: 'memo-img image-33'
  },

  Ognik: { //24
    name: "Flame",
    image: 'memo-img image-34'
  },

  Wieszczy: { //25
    name: "Prophetic",
    image: 'memo-img image-35'
  },
  
  Licho: { //26
    name: "Deuce",
    image: 'memo-img image-36'
  },

  Płanetnik: { //27
    name: "Cloud Lord",
    image: 'memo-img image-37'
  },

  Raróg: { //28
    name: "Rarog",
    image: 'memo-img image-38'
  },

  Rokitnik: { //29
    name: "Sea Buckthorn",
    image: 'memo-img image-39'
  },

  Boginka: { //30
    name: "Nymph",
    image: 'memo-img image-40'
  }

}

/* grid pairs 

1 - 12
2 - 13
3 - 14
4 - 9
5 - 11
6 - 8
7 - 10

*/

function creatureSet(number, title, img){
 // let title;
 // let img;
  let creature;
  
  if(number === 0 || number === 1){
    creature = creatures.Leszy;
    //img.className = ''
  }else if(number === 2){
    creature = creatures.Północnica;
  } else if(number === 3){
    creature = creatures.Południca;
  }else if( number === 4){
    creature = creatures.Topielica;
  }else if( number === 5){
    creature = creatures.Czart;
  }else if( number === 6){
    creature = creatures.Wodnik;
  }else if(number === 7){
    creature = creatures.Alkonost;
  }else if(number === 8){
    creature = creatures.Wilkołak;
  }else if(number === 9){
    creature = creatures.Żmij;
  }else if(number === 10){
    creature = creatures.Latawiec;
  }else if(number === 11){
    creature = creatures.BabaJaga;
  }else if(number === 12){
    creature = creatures.BorowaCiotka;
  }else if(number === 13){
    creature = creatures.Nocnica;
  }else if(number === 14){
    creature = creatures.Wampir;
  }else if(number === 15){
    creature = creatures.Ażdacha;
  }else if(number === 16){
    creature = creatures.Sirin;
  }else if(number === 17){
    creature = creatures.Bies;
  }else if(number === 18){
    creature = creatures.Grzenia;
  }else if(number === 19){
    creature = creatures.Strzyga;
  }else if(number === 20){
    creature = creatures.Mamuna;
  } else if(number === 21){
    creature = creatures.Wiła;
  } else if(number === 22){
    creature = creatures.Chała;
  }else if(number === 23){
    creature = creatures.Brzeginia;
  }else if(number === 24){
    creature = creatures.Ognik;
  }else if(number === 25){
    creature = creatures.Wieszczy;
  }else if(number === 26){
    creature = creatures.Licho;
  }else if(number === 27){
    creature = creatures.Płanetnik;
  }else if(number === 28){
    creature = creatures.Raróg;
  }else if(number === 29){
    creature = creatures.Rokitnik;
  }else if(number === 30){
    creature = creatures.Boginka;
  }

  title.textContent = creature.name;
  img.className = creature.image;
}

function setTable(){
 let randomNum = Math.floor(Math.random() * 10)
 console.log(randomNum)

 if(randomNum >= 0 && randomNum <= 5){
    cartContainer.className = 'cart-group-container-memory';
    num = 'row';
    console.log(`Zastosowano podział kart row`);
 } else if(randomNum > 5 && randomNum <= 10){
    cartContainer.className = 'cart-group-container-memory-rewerse';
    console.log(`Zastosowano podział kart row-reverse`);
 }
}


function setCarts(){

  setTable()

  ile= 7;
  zilu= 30;

  monster=new Array();
  for ( i=0; i<ile; i++) {
    los = Math.round(Math.random()*(zilu-1))+1;
    jest=false;
    for (j=0; j<monster.length; j++ ) if (monster[j]==los) {jest=true;}
    if (jest) {i--;} else {monster[i]=los;}
  }

  console.log(monster);

  creatureSet(monster[0], title1, image1);
  creatureSet(monster[0], title12, image12);

  creatureSet(monster[1], title2, image2);
  creatureSet(monster[1], title13, image13);
  
  creatureSet(monster[2], title3, image3);
  creatureSet(monster[2], title14, image14);
  
  creatureSet(monster[3], title4, image4);
  creatureSet(monster[3], title9, image9);

  creatureSet(monster[4], title5, image5);
  creatureSet(monster[4], title11, image11);
  
  creatureSet(monster[5], title6, image6);
  creatureSet(monster[5], title8, image8);
  
  creatureSet(monster[6], title7, image7);
  creatureSet(monster[6], title10, image10);

}

cartSettings.addEventListener('click', ()=> {
  showCarts();
  //cartContainer.className = 'cart-group-container-memory';
  setCarts();
  hideCarts();
  cartSettings.className = 'invisible';
  checkPoints.className = 'sum-btn';
  restartGame.className = 'restart';
})

function checkCart(creature, el1, cart1, cart2){
  
  creature.className = 'displayed-none';
  point++;

  if(el1.className === 'displayed-none'){
    console.log('Dopasowanie');
    wins++;
    point;

    cart1.className = 'displayed-none';
    cart2.className = 'displayed-none';
  } else if (el1.className === 'plachta js-plachta'){
    console.log('Brak dopasowania');
    loses++;
    point--;

    plachta1.className = 'plachta js-plachta';
    plachta2.className = 'plachta js-plachta';
    plachta3.className = 'plachta js-plachta';
    plachta4.className = 'plachta js-plachta';
    plachta5.className = 'plachta js-plachta';
    plachta6.className = 'plachta js-plachta';
    plachta7.className = 'plachta js-plachta';
    plachta8.className = 'plachta js-plachta';
    plachta9.className = 'plachta js-plachta';
    plachta10.className = 'plachta js-plachta'; 
    plachta11.className = 'plachta js-plachta';
    plachta12.className = 'plachta js-plachta';
    plachta13.className = 'plachta js-plachta';
    plachta14.className = 'plachta js-plachta'; 

    creature.className = 'displayed-none';
  }

  if(
    (cart1.className === 'memo-cart') ||
    (cart2.className === 'memo-cart') ||
    (cart3.className === 'memo-cart') ||
    (cart4.className === 'memo-cart') ||
    (cart5.className === 'memo-cart') ||
    (cart6.className === 'memo-cart') ||
    (cart7.className === 'memo-cart') ||
    (cart8.className === 'memo-cart') ||
    (cart9.className === 'memo-cart') ||
    (cart10.className === 'memo-cart') ||
    (cart11.className === 'memo-cart') ||
    (cart12.className === 'memo-cart') ||
    (cart13.className === 'memo-cart') ||
    (cart14.className === 'memo-cart')
  ){
    (grid1.className = 'grid') &&
    (grid2.className = 'grid') &&
    (grid3.className = 'grid') &&
    (grid4.className = 'grid') &&
    (grid5.className = 'grid') &&
    (grid6.className = 'grid') &&
    (grid7.className = 'grid') &&
    (grid8.className = 'grid') &&
    (grid9.className = 'grid') &&
    (grid10.className = 'grid') &&
    (grid11.className = 'grid') &&
    (grid12.className = 'grid') &&
    (grid13.className = 'grid') &&
    (grid14.className = 'grid') 
  } else if(
    (cart1.className === 'displayed-none') &&
    (cart2.className === 'displayed-none') &&
    (cart3.className === 'displayed-none') &&
    (cart4.className === 'displayed-none') &&
    (cart5.className === 'displayed-none') &&
    (cart6.className === 'displayed-none') &&
    (cart7.className === 'displayed-none') &&
    (cart8.className === 'displayed-none') &&
    (cart9.className === 'displayed-none') &&
    (cart10.className === 'displayed-none') &&
    (cart11.className === 'displayed-none') &&
    (cart12.className === 'displayed-none') &&
    (cart13.className === 'displayed-none') &&
    (cart14.className === 'displayed-none')
  ){
    (grid1.className = 'displayed-none') &&
    (grid2.className = 'displayed-none') &&
    (grid3.className = 'displayed-none') &&
    (grid4.className = 'displayed-none') &&
    (grid5.className = 'displayed-none') &&
    (grid6.className = 'displayed-none') &&
    (grid7.className = 'displayed-none') &&
    (grid8.className = 'displayed-none') &&
    (grid9.className = 'displayed-none') &&
    (grid10.className = 'displayed-none') &&
    (grid11.className = 'displayed-none') &&
    (grid12.className = 'displayed-none') &&
    (grid13.className = 'displayed-none') &&
    (grid14.className = 'displayed-none') 
  }

}

cart1.addEventListener('click', ()=>{
  checkCart(plachta1, plachta12, cart1, cart12);
  grid1Point = point;
  console.log(`Punkty grid1: ${grid1Point}`);
})

cart2.addEventListener('click', ()=>{
  checkCart(plachta2, plachta13, cart2, cart13);
  grid2Point = point;
  console.log(`Punkty grid2: ${grid2Point}`);
})

cart3.addEventListener('click', ()=>{
  checkCart(plachta3, plachta14, cart3, cart14);
  grid3Point = point;
  console.log(`Punkty grid3: ${grid3Point}`);
})

cart4.addEventListener('click', ()=>{
  checkCart(plachta4, plachta9, cart4, cart9);
  grid4Point = point;
  console.log(`Punkty grid4: ${grid4Point}`);
})

cart5.addEventListener('click', ()=>{
  checkCart(plachta5, plachta11, cart5, cart11);
  grid5Point = point;
  console.log(`Punkty grid5: ${grid5Point}`);
})

cart6.addEventListener('click', ()=>{
  checkCart(plachta6, plachta8, cart6, cart8);
  grid6Point = point;
  console.log(`Punkty grid6: ${grid6Point}`);
})

cart7.addEventListener('click', ()=>{
  checkCart(plachta7, plachta10, cart7, cart10);
  grid7Point = point;
  console.log(`Punkty grid7: ${grid7Point}`);
})

cart8.addEventListener('click', ()=>{
  checkCart(plachta8, plachta6, cart8, cart6);
  grid8Point = point;
  console.log(`Punkty grid8: ${grid8Point}`);
})

cart9.addEventListener('click', ()=>{
  checkCart(plachta9, plachta4, cart9, cart4);
  grid9Point = point;
  console.log(`Punkty grid9: ${grid9Point}`);
})

cart10.addEventListener('click', ()=>{
  checkCart(plachta10, plachta7, cart10, cart7);
  grid10Point = point;
  console.log(`Punkty grid10: ${grid10Point}`);
})

cart11.addEventListener('click', ()=>{
  checkCart(plachta11, plachta5, cart11, cart5);
  grid11Point = point;
  console.log(`Punkty grid11: ${grid11Point}`);
})

cart12.addEventListener('click', ()=>{
  checkCart(plachta12, plachta1, cart12, cart1);
  grid12Point = point;
  console.log(`Punkty grid12: ${grid12Point}`);
})

cart13.addEventListener('click', ()=>{
  checkCart(plachta13, plachta2, cart13, cart2);
  grid13Point = point;
  console.log(`Punkty grid13: ${grid13Point}`);
})

cart14.addEventListener('click', ()=>{
  checkCart(plachta14, plachta3, cart14, cart3);
  grid14Point = point;
  console.log(`Punkty grid14: ${grid14Point}`);
})

checkPoints.addEventListener('click', ()=>{
  textPoint.textContent = `Nie ukończyłeś jeszcze gry.`
  
  sumPoint = grid1Point + grid2Point + grid3Point + grid4Point + grid5Point + grid6Point + grid7Point + grid8Point + grid9Point + grid10Point + grid11Point + grid12Point + grid13Point + grid14Point

  if(sumPoint && wins === loses){
    textPoint.textContent = `Congratulations. You have made it to the next stage.`
    level2.className = 'new-opportunity';
  } else if(sumPoint && wins < loses
  ){
    textPoint.textContent = `The game used too many re-attempts to match cards. You failed to advance to the next stage.`
  } 
})

function clearUp(cart, plachta, grid, title, img ){
  cart.className = 'memo-cart';
  plachta.className = 'plachta';
  grid.className = 'grid';
  title.textContent = '';
  img.className = "memo-img";
}


function cleanTable(){
  cartContainer.className = 'cart-group-container-memory-invisibles'
  wins = 0;
  loses = 0;
  point = 0;
  delete sumPoint;

  textPoint.textContent = ` `;
  level2.className = 'new-opportunity-hidden';

  clearUp(cart1, plachta1, grid1, title1, image1);
  clearUp(cart2, plachta2, grid2, title2, image2);
  clearUp(cart3, plachta3, grid3, title3, image3);
  clearUp(cart4, plachta4, grid4, title4, image4);
  clearUp(cart5, plachta5, grid5, title5, image5);
  clearUp(cart6, plachta6, grid6, title6, image6);
  clearUp(cart7, plachta7, grid7, title7, image7);
  clearUp(cart8, plachta8, grid8, title8, image8);
  clearUp(cart9, plachta9, grid9, title9, image9);
  clearUp(cart10, plachta10, grid10, title10, image10);
  clearUp(cart11, plachta11, grid11, title11, image11);
  clearUp(cart12, plachta12, grid12, title12, image12);
  clearUp(cart13, plachta13, grid13, title13, image13);
  clearUp(cart14, plachta14, grid14, title14, image14);

  delete grid1Point;
  delete grid2Point;
  delete grid3Point;
  delete grid4Point;
  delete grid5Point;
  delete grid6Point;
  delete grid7Point;
  delete grid8Point;
  delete grid9Point;
  delete grid10Point;
  delete grid11Point;
  delete grid12Point;
  delete grid13Point;
  delete grid14Point;

}

restartGame.addEventListener('click', ()=> {
  cleanTable();
  cartContainer.className = 'cart-group-container-memory-invisible';
  cartSettings.className = 'cart-setting';
  checkPoints.className = 'invisible';
  restartGame.className = 'invisible';
})

function showCarts(){
  document.getElementById('cart-1').disabled = true;
  document.getElementById('cart-2').disabled = true;
  document.getElementById('cart-3').disabled = true;
  document.getElementById('cart-4').disabled = true;
  document.getElementById('cart-5').disabled = true;
  document.getElementById('cart-6').disabled = true;
  document.getElementById('cart-7').disabled = true;
  document.getElementById('cart-8').disabled = true;
  document.getElementById('cart-9').disabled = true;
  document.getElementById('cart-10').disabled = true;
  document.getElementById('cart-11').disabled = true;
  document.getElementById('cart-12').disabled = true;
  document.getElementById('cart-13').disabled = true;
  document.getElementById('cart-14').disabled = true;
  
  document.querySelectorAll('.js-plachta')
  .forEach((item)=>{
    item.className = 'plachta-off js-plachta'
  })
}


function hideCarts(){
  setTimeout(()=>{
    document.querySelectorAll('.js-plachta')
      .forEach((plachta)=>{
        plachta.className = 'plachta js-plachta';
      })

      document.getElementById('cart-1').disabled = false;
      document.getElementById('cart-2').disabled = false;
      document.getElementById('cart-3').disabled = false;
      document.getElementById('cart-4').disabled = false;
      document.getElementById('cart-5').disabled = false;
      document.getElementById('cart-6').disabled = false;
      document.getElementById('cart-7').disabled = false;
      document.getElementById('cart-8').disabled = false;
      document.getElementById('cart-9').disabled = false;
      document.getElementById('cart-10').disabled = false;
      document.getElementById('cart-11').disabled = false;
      document.getElementById('cart-12').disabled = false;
      document.getElementById('cart-13').disabled = false;
      document.getElementById('cart-14').disabled = false;
  }, 5000);

}



