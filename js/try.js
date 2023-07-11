const items = document.querySelectorAll(".box");
const menus = document.querySelectorAll(".menu");
const overlays = document.querySelectorAll(".ovelay");

const expand = (box, i) => {
  let overlay = box.childNodes[1];
  let menu = box.childNodes[3];

  items.forEach((it, ind) => {
    if(i === ind) return;
    it.clicked = false;
  });

  // item
  gsap.killTweensOf(items);
  gsap.to(items, {
    width : box.clicked ? "10vw" : "8vw",
    duration : 2,
    ease : "elastic(1, .6)"
  });
  gsap.killTweensOf(box);
  box.clicked = !box.clicked;
  gsap.to(box, {
    width : box.clicked ? "25vw" : "10vw",
    duration : 2.5,
    ease : "elastic(1, .3)"
  });

  // ovelay
  gsap.killTweensOf(overlays);
  gsap.to(overlay, {
    opacity: box.clicked ? "1" : "1",
    duration : 2, 
    ease : "elastic(1, .6)"
  });
  gsap.killTweensOf(overlay);
  box.clicked = !box.clicked;
  gsap.to(overlay, {
    opacity : box.clicked ? "1" : "0",
    duration : 2.5,
    ease : "elastic(1, .3)"
  });

  // menu
  gsap.killTweensOf(menus);
  gsap.to(menus, {
    opacity: box.clicked ? "0" : "0",
    duration : 2, 
    ease : "elastic(1, .6)"
  });
  gsap.killTweensOf(menu);
  box.clicked = !box.clicked;
  gsap.to(menu, {
    opacity : box.clicked ? "1" : "0",
    duration : 2.5,
    ease : "elastic(1, .3)"
  });
};

items.forEach((box, i) =>{
    box.clicked = false;
    box.childNodes[1].clicked = false;
    box.childNodes[3].clicked = false;

    box.addEventListener("click", () => expand(box, i));

});
