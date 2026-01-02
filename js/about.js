// 3D TILT EFFECT
document.querySelectorAll(".hover-3d").forEach(el=>{
  el.addEventListener("mousemove",e=>{
    const r=el.getBoundingClientRect();
    const x=e.clientX-r.left;
    const y=e.clientY-r.top;
    const rx=((y/r.height)-0.5)*10;
    const ry=((x/r.width)-0.5)*-10;
    el.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  el.addEventListener("mouseleave",()=>{
    el.style.transform="rotateX(0) rotateY(0)";
  });
});
