const progress=document.querySelector('.reading-progress');
const journey=document.querySelector('.lesson-list');
const lessons=[...document.querySelectorAll('.lesson')];
let pending=false;
function update(){const h=document.documentElement;const y=window.scrollY;progress.style.transform=`scaleX(${Math.min(1,y/Math.max(1,h.scrollHeight-innerHeight))})`;const r=journey.getBoundingClientRect();journey.style.setProperty('--journey',`${Math.max(0,Math.min(100,(innerHeight*.65-r.top)/r.height*100))}%`);lessons.forEach(e=>e.classList.toggle('passed',e.getBoundingClientRect().top<innerHeight*.65));pending=false}
addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update();
