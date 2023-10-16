

const rotateit=()=>{
    gsap.from(".circular",{
     opacity:1,
     rotation:0,
     rotation:360,
     duration:4,
     repeat:-1,
     ease:"none",
     // delay:0.4,
    
 })

//  gsap.from(".alice",{
//      opacity:-2,
//      duration:1,
//      x:-900,
//      // delay:0.4,
     
//  })



}

  rotateit()


 
 gsap.from("#spe",{
     opacity:-1,
     duration:0.5,
     // delay:0.4,
     x:60
 })
 gsap.from("#nsors",{
     opacity:-1,
     duration:0.5,
     // delay:0.4,
     
 })
 gsap.from(".ecellogo",{
     opacity:-1,
     duration:2,
     // delay:0.4,
     x:-90,
     
 })
 gsap.from(".navElements",{
     opacity:-1,
     duration:2,
     // delay:0.4,
     y:-90,
     
 })
 gsap.from(".grid-items",{
     opacity:-1,
     duration:2,
     // delay:0.4,
     y:90,
     
 })




 let tl=gsap.timeline({
     scrollTrigger:{
         trigger:'.grid-items',
         start:'top 10%',
         end:'100% 10%',
         scrub:true,
         markers:false,
     }
 })
 let tl2=gsap.timeline({
     scrollTrigger:{
         trigger:'.midsection',
         start:'140% 40%',
         end:'190% 40%',
         scrub:true,
         markers:false,
     }
 })

 let tl3=gsap.timeline({
     scrollTrigger:{
         trigger:'.footer',
         start:'10% 90%',
         end:'100% 100%',
         scrub:true,
         markers:false,
     }
 })


 tl3.from('.contactinfo',{
     x:-900,
 })

 tl3.from('.follow span',{
     opacity:0,
 })

 tl3.from('.handles img',{
y:200,
 })

     
 

 tl.to('.odd',{
     x:500,
     // opacity:0
    })
 tl.to('.even',{
  x:-500,
 //  opacity:0
 })


 tl2.to('.midsection',{
     x:700
 })
