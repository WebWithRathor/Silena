gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:.7
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var cpg=gsap.timeline();
cpg.from("#c-page h1",{
  opacity:0,
  stagger:0.5,
  duration:1
})
cpg.from("#c-page img",{
  opacity:0,
})
cpg.to("#c-page h1",{
  opacity:0,
  stagger:0.5
})
cpg.to("#c-page img",{
  opacity:0,
})
cpg.to("#cover-page",{
  width:0,
  duration:1

})
var arr =[ 
  {h1:"SILENA, YOUR SOULFUL HOTEL",imgs:"https://www.silena.com/fileadmin/_processed_/8/7/csm_16-Silena-Soulful-Hotel-Vals-Suedtirol_dc4e3bc6f8.jpg.webp",p1:"COME AS YOU ARE. BE AS YOU ARE. BREATHE IN. BREATHE OUT. YOU ARE HELD WHEN YOU’RE WITH US. WITH A FRIENDLY SMILE. WITH A SYMPATHETIC EAR. IN AN ENVIRONMENT THAT OFFERS COUNTLESS OPPORTUNITIES.",p2:"You have consciously taken time for yourself. Time for a break. Everything you need for this time is you. We provide the framework. Rituals from South-East Asia, culinary impulses from South Tyrol, pure nature outside of your door, a warm spa area or books from all over the world. As soon as you are here with us, you can allow yourself to just enjoy as you leave your daily life behind. Let go, close your eyes and let yourself fall.",icon:"https://www.silena.com/fileadmin/templates/images/logoMain.svg",h2:"YOUR SOULFUL HOTEL",splash:"https://www.silena.com/fileadmin/templates/images/patterns/silena-kreis250.png"},
  {h1:"SOUTH TYROL & SOUTH-EAST ASIA",imgs:"https://www.silena.com/fileadmin/_processed_/7/4/csm_HQ-Unikateur-HotelSilena-_Tiberio-Sorvillo_63A7875_2de960996a.jpg.webp",p1:"EVERYTHING IN THE WORLD HAS ITS NECESSARY OPPOSITE. THE SILENA AS WELL CONSISTS OF TWO CONTRASTING CULTURES: SOUTH TYROL AND SOUTH-EAST ASIA.",p2:"Our name as well, SILENA, is also a joining of opposites. It is a melding of the first names of the host siblings SImon and MagdaLENA. Indeed, their worlds could not be more different. Simon is deeply rooted in his home of South Tyrol. For generations, his ancestors have lived in the alpine region Rio di Pusteria. Magdalena loves to travel and lost her heart in South-East Asia. This is how the hotel presents itself: deeply-rooted with wings. Yin and yang.",icon:"",h2:"SOUTH TYROL & SOUTH-EAST ASIA",splash:"https://www.silena.com/fileadmin/templates/images/patterns/silena-kreis250.png"},
  {h1:"ONSEN POOL ON THE ROOFTOP",imgs:"https://www.silena.com/fileadmin/_processed_/f/b/csm_220808_SILENA_PR-130_1eec9a78c9.jpg.webp",p1:"FLOAT ABOVE IT ALL. FEEL THE FREEDOM OF IMMERSING YOURSELF IN 40-DEGREE WATER. YOU’VE ARRIVED. THE WATER AND WARMTH CONVEY A FEELING OF WEIGHTLESSNESS, ALLOWING YOU TO BE IN THE HERE AND NOW.",p2:"In many areas of Japan, bathing in an onsen pool is regarded as a common courtesy. After accomplishing the day’s work, people wash themselves and sit together in the warmth of 40-degree water. Our onsen pool is located on the rooftop. Follow the Japanese tradition and bathe in South Tyrolean spring water as you gaze out onto the mountains. Feel your body warming and relaxing. Come to yourself in the onsen pool.",icon:"",h2:"ROOFTOP ONSEN POOL",splash:"https://www.silena.com/fileadmin/templates/images/patterns/silena-kreis250.png"}
]
var clutter = "";
arr.forEach(function (elem,index) {
  
  clutter+=`<div class="pages" id="page${elem,index}">
  <img src="${elem.icon}" alt="">
  
  <div class="splash">
  <img src="${elem.splash}" alt="">
  </div>
  <div class="gol">
  <img src="${elem.imgs}" alt="">
  </div>
  <div class="content">
      <div class="box1">
          <h1>${elem.h1}</h1>
          <p>${elem.p1}</p>
      </div>
      <div class="box2">
          <p>${elem.p2}</p>
          <h1>
          <div class="circle"></div>${elem.h2}</h1>
      </div>
  </div>
</div>`
})
document.querySelector("#page").innerHTML = clutter;
gsap.to("#page0>img",{
  opacity:0,
  scale:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    start:"top 0%",
    end:"top -50%",
    scrub:1
  }
})
gsap.from("#navbar",{
  color:"#655B50",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    start:"top 0%",
    end:"top -100%",
    scrub:3
  }
})
gsap.to("#page0  .gol",{
  width:"27vw",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    pin:true,
    start:"top 0%",
    end:"top -50%",
    scrub:1,
  }
})
gsap.from("#page0 .splash img",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    start:"top 0%",
    end:"top -50%",
    scrub:1
  }
})
gsap.from("#page0 .box1",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    start:"top -2%",
    end:"top -20%",
    scrub:1
  }
})
gsap.from("#page0 .box2",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page0",
    start:"top-2.20%",
    end:"top -20%",
    scrub:1
  }
})
gsap.to("#page1 .gol",{
  width:"27vw",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    pin:true,
    start:"top 0%",
    end:"top -100%",
    scrub:1
  }
})
gsap.to("#navbar",{
  color:"#655B50",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    start:"top 0%",
    end:"top -100%",
    scrub:1
  }
})
gsap.from("#page1 .splash img",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    start:"top -1%",
    end:"top -50%",
    scrub:1
  }
})
gsap.from("#page1 .box1",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    start:"top -2%",
    end:"top -20%",
    scrub:1
  }
})
gsap.from("#page1 .box2",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page1",
    start:"top -2.2%",
    end:"top -20%",
    scrub:1
  }
})
gsap.to("#navbar",{
  color:"#EAE3D1",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top 10%",
    end:"top -50%",
    scrub:1
  }
})
gsap.to("#page2 .gol",{
  width:"27vw",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    pin:true,
    start:"top 0%",
    end:"top -50%",
    scrub:1
  }
})
gsap.from("#page2 .splash img",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top -1%",
    end:"top -20%",
    scrub:1
  }
})
gsap.from("#page2 .box1",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top -2%",
    end:"top -20%",
    scrub:1
  }
})
gsap.from("#page2 .box2",{
  y:200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    start:"top -2.2%",
    end:"top -20%",
    scrub:1
  }
})

gsap.to("#navbar",{
  color:"#655B50",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    scrub:1,
    start:"top 0%",
    end:"top -50%"
  }
})
var tm =gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    pin:true,
    scrub:1,
    start:"top 0%",
    end:"top -50%"
  }
})
gsap.to("#navbar",{
  color:"#EAE3D1",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    scrub:1,
    start:"top 0%",
  }
})
tm
.to("#photu svg",{
  scale:80,
  duration:1
})
.to(".conts",{
  color:"#EAE3D1",
  delay:-1
  
})
.from("#cont2>img",{
  scale:0,
  opacity:0,
  
})

var pg4 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 0%",
    pin:true,
    scrub:2,
  },
})
pg4.to("#navbar",{
  color:"#EAE3D1",
  
})
pg4.to("#page5",{
  top:"0%",

})
pg4.to("#navbar",{
  color:"#655B50",
})
var pg6 = ``;
var page6s =[
    {img:"https://content.additive-apps.tech/silena-com/media/3aa03bf0-8bdf-423f-89b5-3fa891505aec?ts=1678103727&af=1&t=800x800",h1:"HONEYMOON - RELAX AND SIT BACK"},
    {img:"https://content.additive-apps.tech/silena-com/media/1ea6ebfe-45d9-44d9-b928-0e751a746e68?ts=1678103711&af=1&t=800x800",h1:"BABYMOON @ SILENA"},
    {img:"https://content.additive-apps.tech/silena-com/media/8b009c7e-5a58-4452-9fe1-1260b069457d?ts=1683098902&af=1&t=800x800",h1:"HONEYMOON - I'M YOUR YIN AND YOU'RE MY YANG"},
    {img:"https://content.additive-apps.tech/silena-com/media/72cc80b4-5b62-40f7-b0c9-c1aea1031dc3?ts=1678103736&af=1&t=800x800",h1:"YOGA, BABY!"},
    {img:"https://content.additive-apps.tech/silena-com/media/660cfff4-38aa-43b4-beca-359501cc9729?ts=1688906232&af=1&t=800x800",h1:"CHRISTMAS AT SILENA"},
    {img:"https://content.additive-apps.tech/silena-com/media/49356b77-4b3f-4cbf-a427-92ee3e2448c3?ts=1689153390&af=1&t=800x800",h1:"SOULFUL EASTER"}
]
page6s.forEach(function(elems,index){
    pg6+=`<div class="bar" id="${index}"></div>`
    
})
document.querySelector(".feeds .bars").innerHTML=pg6;

document.querySelector(".bars").addEventListener("click",function(dets){

     var pg6t= gsap.timeline();
     pg6t.to(".feeds .photo ,.details",{
      scale:0,
      opacity:0,
      duration:1
    })
      setTimeout(() => {
        document.querySelector(".photo img").setAttribute("src",page6s[dets.target.id].img);
        document.querySelector(".details h1").textContent = page6s[dets.target.id].h1
        
      }, 100);
        pg6t.to(".feeds .photo ,.details",{
          scale:1,
          opacity:1,
          duration:1
        })
       
})
gsap.from("#navbar",{
  color:" #655B50",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page7",
    start:"top 0%",
    end:"top -100%",
    scrub:3
  }
})
var fal =0;
document.querySelector("#nav2 h2").addEventListener("click",function(){
  gsap.timeline()
    .to("#menu",{
      right:0
    })
    .from(".fet1 h1",{
      y:200,
      stagger:0.1
    })
  document.querySelector("#menu .cross").addEventListener("click",function(){
    gsap.timeline()
    .to("#menu",{
      right:"-100%"
    })
  })
  gsap.from("#navbar",{
    color:" #655B50",
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page7",
      start:"top 0%",
      end:"top -100%",
      scrub:3
    }
  })
})