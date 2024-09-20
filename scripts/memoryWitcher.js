let memoCartGhoul = document.getElementById('ghoul');
let memoCartHarpia = document.getElementById('harpia');
let memoCartGryf = document.getElementById('gryf');
let memoCartPoln = document.getElementById('polnocica');
let memoCartWiwerna = document.getElementById('wiwerna');
let memoCartAlp = document.getElementById('alp');
let memoCartSukkub = document.getElementById('sukkub');
let memoCartAlp2 = document.getElementById('alp1');
let memoCartPoln2 = document.getElementById('polnocica1');
let memoCartSukkub2 = document.getElementById('sukkub1');
let memoCartWiwerna2 = document.getElementById('wiwerna1');
let memoCartGhoul2 = document.getElementById('ghoul1');
let memoCartHarpia2 = document.getElementById('harpia1');
let memoCartGryf2 = document.getElementById('gryf1');

let ghoul = document.getElementById('ghoul-11');
let harpia = document.getElementById('harpia-11');
let gryf = document.getElementById('gryf-11');
let polnocnica = document.getElementById('polnocnica-11');
let wiwerna = document.getElementById('wiwerna-11');
let alp = document.getElementById('alp-11');
let sukkub = document.getElementById('sukkub-11');
let polnocnica2 = document.getElementById('polnocnica-12');
let sukkub2 = document.getElementById('sukkub-12');
let wiwerna2 = document.getElementById('wiwerna-12');
let ghoul2 = document.getElementById('ghoul-12');
let harpia2 = document.getElementById('harpia-12');
let gryf2 = document.getElementById('gryf-12');
let alp2 = document.getElementById('alp-12');

let ghoulImg = document.getElementById('ghoul-image'); // 
let harpiaImg = document.getElementById('harpia-image'); //
let gryfImg = document.getElementById('gryf-image'); //
let polnocnicaImg = document.getElementById('polnocnica-image'); //
let wiwernaImg = document.getElementById('wiwerna-image'); //
let alpImg = document.getElementById('alp-image'); //
let sukkubImg = document.getElementById('sukkub-image');
let alp2Img = document.getElementById('alp-2-image'); //
let polnocnica2Img = document.getElementById('polnocnica-2-image'); //
let sukkub2Img = document.getElementById('sukkub-2-image');
let wiwerna2Img = document.getElementById('wiwerna-2-image'); //
let ghoul2Img = document.getElementById('ghoul-2-image'); //
let harpia2Img = document.getElementById('harpia-2-image'); //
let gryf2Img = document.getElementById('gryf-12'); //

let gridGhoul = document.getElementById('grid-ghoul');
let gridHarpia = document.getElementById('grid-harpia');
let gridGryf = document.getElementById('grid-gryf');
let gridPln = document.getElementById('grid-pln');
let gridWiwerna = document.getElementById('grid-wiwerna');
let gridAlp = document.getElementById('grid-alp');
let gridSukkub = document.getElementById('grid-sukkub');
let gridAlp2 = document.getElementById('grid-alp2');
let gridPln2 = document.getElementById('grid-pln2');
let gridSukkub2 = document.getElementById('grid-sukkub2');
let gridWiwerna2 = document.getElementById('grid-wiwerna2');
let gridGhoul2 = document.getElementById('grid-ghoul2');
let gridHarpia2 = document.getElementById('grid-harpia2');
let gridGryf2 = document.getElementById('grid-gryf2');

let nextLevel = document.getElementById('opportunity-memory');

let memoryPoints = document.getElementById('memo-points');
let resultBtn = document.getElementById('memory-points');
let restartMemory = document.getElementById('restart-memory-game');
let memoryAnswer = document.getElementById('memory-answer-container');

let wins = 0;
let loses = 0;
point = 0;

function checkCart(creature, el1, cart1, cart2 ){
  creature.className = 'displayed-none';
  point++;
  
  if(el1.className === 'displayed-none'){
    console.log('Dopasowanie');
    wins++;
    point;

    cart1.className = 'displayed-none';
    cart2.className = 'displayed-none';
  } else if (el1.className === 'plachta'){
    console.log('Brak dopasowania');
    loses++;
    point--;

    ghoul.className = 'plachta';
    harpia.className = 'plachta';
    gryf.className = 'plachta';
    polnocnica.className = 'plachta';
    wiwerna.className = 'plachta';
    alp.className = 'plachta';
    sukkub.className = 'plachta';
    polnocnica2.className = 'plachta';
    sukkub2.className = 'plachta';
    wiwerna2.className = 'plachta'; 
    ghoul2.className = 'plachta';
    harpia2.className = 'plachta';
    gryf2.className = 'plachta';
    alp2.className = 'plachta'; 

    creature.className = 'displayed-none';
  }

  if(
    (memoCartGhoul.className === 'memo-cart') ||
    (memoCartHarpia.className === 'memo-cart') ||
    (memoCartGryf.className === 'memo-cart') ||
    (memoCartPoln.className === 'memo-cart') ||
    (memoCartWiwerna.className === 'memo-cart') ||
    (memoCartAlp.className === 'memo-cart') ||
    (memoCartSukkub.className === 'memo-cart') ||
    (memoCartAlp2.className === 'memo-cart') ||
    (memoCartPoln2.className === 'memo-cart') ||
    (memoCartSukkub2.className === 'memo-cart') ||
    (memoCartWiwerna2.className === 'memo-cart') ||
    (memoCartGhoul2.className === 'memo-cart') ||
    (memoCartHarpia2.className === 'memo-cart') ||
    (memoCartGryf2.className === 'memo-cart')
  ){
    (gridGhoul.className = 'grid') &&
    (gridHarpia.className = 'grid') &&
    (gridGryf.className = 'grid') &&
    (gridPln.className = 'grid') &&
    (gridWiwerna.className = 'grid') &&
    (gridAlp.className = 'grid') &&
    (gridSukkub.className = 'grid') &&
    (gridAlp2.className = 'grid') &&
    (gridPln2.className = 'grid') &&
    (gridSukkub2.className = 'grid') &&
    (gridWiwerna2.className = 'grid') &&
    (gridGhoul2.className = 'grid') &&
    (gridHarpia2.className = 'grid') &&
    (gridGryf2.className = 'grid') 
  } else if(
    (memoCartGhoul.className === 'displayed-none') &&
    (memoCartHarpia.className === 'displayed-none') &&
    (memoCartGryf.className === 'displayed-none') &&
    (memoCartPoln.className === 'displayed-none') &&
    (memoCartWiwerna.className === 'displayed-none') &&
    (memoCartAlp.className === 'displayed-none') &&
    (memoCartSukkub.className === 'displayed-none') &&
    (memoCartAlp2.className === 'displayed-none') &&
    (memoCartPoln2.className === 'displayed-none') &&
    (memoCartSukkub2.className === 'displayed-none') &&
    (memoCartWiwerna2.className === 'displayed-none') &&
    (memoCartGhoul2.className === 'displayed-none') &&
    (memoCartHarpia2.className === 'displayed-none') &&
    (memoCartGryf2.className === 'displayed-none')
  ){
    (gridGhoul.className = 'displayed-none') &&
    (gridHarpia.className = 'displayed-none') &&
    (gridGryf.className = 'displayed-none') &&
    (gridPln.className = 'displayed-none') &&
    (gridWiwerna.className = 'displayed-none') &&
    (gridAlp.className = 'displayed-none') &&
    (gridSukkub.className = 'displayed-none') &&
    (gridAlp2.className = 'displayed-none') &&
    (gridPln2.className = 'displayed-none') &&
    (gridSukkub2.className = 'displayed-none') &&
    (gridWiwerna2.className = 'displayed-none') &&
    (gridGhoul2.className = 'displayed-none') &&
    (gridHarpia2.className = 'displayed-none') &&
    (gridGryf2.className = 'displayed-none') 
  }
}

memoCartGhoul.addEventListener('click', ()=>{
  checkCart(ghoul, ghoul2, memoCartGhoul, memoCartGhoul2);
  ghoulPoint = point;
  console.log(`Punkty Ghoul: ${ghoulPoint}`);
})

memoCartHarpia.addEventListener('click', ()=>{
  checkCart(harpia, harpia2, memoCartHarpia, memoCartHarpia2);
  harpiaPoint = point;
  console.log(`Punkty Harpia: ${harpiaPoint}`);
})

memoCartGryf.addEventListener('click', ()=>{
  checkCart(gryf, gryf2, memoCartGryf, memoCartGryf2);
  gryfPoint = point;
  console.log(`Punkty Gryfa: ${gryfPoint}`);
})

memoCartPoln.addEventListener('click', ()=>{
  checkCart(polnocnica, polnocnica2, memoCartPoln, memoCartPoln2);
  polnPoint = point;
  console.log(`Punkty Południcy: ${polnPoint}`);
})

memoCartWiwerna.addEventListener('click', ()=>{
  checkCart(wiwerna, wiwerna2, memoCartWiwerna, memoCartWiwerna2);
  wiwernaPoint = point;
  console.log(`Punkty Wiwerny: ${wiwernaPoint}`);
})

memoCartAlp.addEventListener('click', ()=>{
  checkCart(alp, alp2, memoCartAlp, memoCartAlp2);
  alpPoint = point;
  console.log(`Punkty Alpa: ${alpPoint}`);
})

memoCartSukkub.addEventListener('click', ()=>{
  checkCart(sukkub, sukkub2, memoCartSukkub, memoCartSukkub2);
  sukkubPoint = point;
  console.log(`Punkty Sukkuba: ${sukkubPoint}`);
})

memoCartAlp2.addEventListener('click', ()=>{
  checkCart(alp2, alp, memoCartAlp, memoCartAlp2 );
  alp2Point = point;
  console.log(`Punkty Alpa2: ${alp2Point}`);
})

memoCartPoln2.addEventListener('click', ()=>{
  checkCart(polnocnica2, polnocnica, memoCartPoln, memoCartPoln2);
  poln2Point = point;
  console.log(`Punkty Północnicy2: ${poln2Point}`);
})

memoCartSukkub2.addEventListener('click', ()=>{
  checkCart(sukkub2, sukkub, memoCartSukkub, memoCartSukkub2);
  sukkub2Point = point;
  console.log(`Punkty Sukkuba2: ${sukkub2Point}`);
})

memoCartWiwerna2.addEventListener('click', ()=>{
  checkCart(wiwerna2, wiwerna, memoCartWiwerna, memoCartWiwerna2);
  wiwerna2Point = point;
  console.log(`Punkty Wiwerny2: ${wiwerna2Point}`);
})

memoCartGhoul2.addEventListener('click', ()=>{;
  checkCart(ghoul2, ghoul, memoCartGhoul, memoCartGhoul2);
  ghoul2Point = point;
  console.log(`Punkty Ghoula2: ${ghoul2Point}`);
})

memoCartHarpia2.addEventListener('click', ()=>{
  checkCart(harpia2, harpia, memoCartHarpia, memoCartHarpia2 );
  harpia2Point = point;
  console.log(`Punkty Harpii2: ${harpia2Point}`);
})

memoCartGryf2.addEventListener('click', ()=>{
  checkCart(gryf2, gryf, memoCartGryf, memoCartGryf2);
  gryf2Point = point;
  console.log(`Punkty Gryfa2: ${gryf2Point}`);
})

resultBtn.addEventListener('click', ()=>{

  memoryPoints.textContent = `Nie ukończyłeś jeszcze gry.`
  
  sumPoint = ghoulPoint + harpiaPoint + gryfPoint + polnPoint + wiwernaPoint + alpPoint + sukkubPoint + alp2Point + poln2Point + sukkub2Point + wiwerna2Point + ghoul2Point + harpia2Point + gryf2Point

  if(sumPoint && wins === loses){
    memoryPoints.textContent = `Gratuluje. Udało Ci się przejść do kolejnego etapu.`
    nextLevel.className = 'new-opportunity';
  } else if(sumPoint && wins < loses
  ){
    memoryPoints.textContent = `W grze wykorzystano za dużo powtórnych prób dopasowania kart. Nie udało Ci się przejść do kolejnego etapu.`
  } 
})

restartMemory.addEventListener('click', ()=>{
  wins = 0;
  loses = 0;
  point = 0;
  delete sumPoint;

  memoryPoints.textContent = ` `;

  memoCartGhoul.className = 'memo-cart';
  memoCartHarpia.className = 'memo-cart'; 
  memoCartGryf.className = 'memo-cart';
  memoCartPoln.className = 'memo-cart';
  memoCartWiwerna.className = 'memo-cart';
  memoCartAlp.className = 'memo-cart';
  memoCartSukkub.className = 'memo-cart'; 
  memoCartAlp2.className = 'memo-cart';
  memoCartPoln2.className = 'memo-cart';
  memoCartSukkub2.className = 'memo-cart';
  memoCartWiwerna2.className = 'memo-cart';
  memoCartGhoul2.className = 'memo-cart';
  memoCartHarpia2.className = 'memo-cart';
  memoCartGryf2.className = 'memo-cart';

  nextLevel.className = 'new-opportunity-hidden';

  ghoul.className = 'plachta';
  harpia.className = 'plachta';
  gryf.className = 'plachta';
  polnocnica.className = 'plachta';
  wiwerna.className = 'plachta';
  alp.className = 'plachta';
  sukkub.className = 'plachta';
  polnocnica2.className = 'plachta';
  sukkub2.className = 'plachta';
  wiwerna2.className = 'plachta';
  ghoul2.className = 'plachta';
  harpia2.className = 'plachta';
  gryf2.className = 'plachta';
  alp2.className = 'plachta';

  gridGhoul.className = 'grid';
  gridHarpia.className = 'grid';
  gridGryf.className = 'grid';
  gridPln.className = 'grid';
  gridWiwerna.className = 'grid';
  gridAlp.className = 'grid';
  gridSukkub.className = 'grid';
  gridAlp2.className = 'grid';
  gridPln2.className = 'grid';
  gridSukkub2.className = 'grid';
  gridWiwerna2.className = 'grid';
  gridGhoul2.className = 'grid';
  gridHarpia2.className = 'grid';
  gridGryf2.className = 'grid';

  delete ghoulPoint;
  delete harpiaPoint;
  delete gryfPoint;
  delete polnPoint;
  delete wiwernaPoint;
  delete alpPoint;
  delete sukkubPoint;
  delete alp2Point;
  delete poln2Point;
  delete sukkub2Point;
  delete wiwerna2Point;
  delete ghoul2Point;
  delete harpia2Point;
  delete gryf2Point;
})







