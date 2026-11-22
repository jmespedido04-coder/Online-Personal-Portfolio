const IMAGES = {
  profile: "images/profile.png",
  idFront: "images/id-front.png",
  project1: "images/project1.png", 
  project2: "images/project2.png", 
  project3: "images/project3.png", 
  html: "",
  css: "",
  ai: "",
  canva: "",
  badge: "images/badge.png",
};

document.querySelectorAll("[data-img]").forEach((el) => {
  const src = IMAGES[el.dataset.img];
  if (!src) return;
  const img = new Image();
  img.alt = el.dataset.alt || "";
  img.decoding = "async";
  if (!el.classList.contains("tool")) img.className = "fill";
  img.onload = () => {
    el.appendChild(img);
    el.classList.add("has-img");
  };
  img.src = src;
});

const roles = [
  ["UI DESIGNER", "#3b2fd6"],
  ["STUDENT", "#2ee62e"],
  ["UX DESIGNER", "#ffb21a"],
  ["DEVELOPER", "#ff2a2a"],
];
const wrap = document.getElementById("roles");
const els = roles.map(([t, c]) => {
  const s = document.createElement("span");
  s.className = "role";
  s.textContent = t;
  s.style.color = c;
  wrap.appendChild(s);
  return s;
});
let i = 0;
els[0].classList.add("in");
setInterval(() => {
  const cur = els[i];
  cur.classList.remove("in");
  cur.classList.add("out");
  i = (i + 1) % els.length;
  const n = els[i];
  n.classList.remove("out");
  n.style.transition = "none";
  n.style.transform = "translateY(110%)";
  n.offsetHeight;
  n.style.transition = "";
  n.style.transform = "";
  n.classList.add("in");
  setTimeout(() => cur.classList.remove("out"), 800);
}, 2600);

const nav = document.getElementById("nav");
addEventListener(
  "scroll",
  () => nav.classList.toggle("scrolled", scrollY > 10),
  { passive: true },
);
const links = [...document.querySelectorAll(".nav-links a")];
const spy = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
["home", "about", "projects", "contact"].forEach((id) =>
  spy.observe(document.getElementById(id)),
);
const rev = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        rev.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));
links.forEach((a) =>
  a.addEventListener("click", () => {
    const m = document.getElementById("menu");
    if (m.classList.contains("show")) bootstrap.Collapse.getInstance(m)?.hide();
  }),
);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const em = document.getElementById("em"),
    ms = document.getElementById("ms"),
    note = document.getElementById("note");
  const ok = /^\S+@\S+\.\S+$/.test(em.value) && ms.value.trim();
  note.textContent = ok
    ? "Message sent. Thank you!"
    : "Enter a valid email and a message.";
  note.classList.add("show");
  setTimeout(() => note.classList.remove("show"), 3500);
  if (ok) e.target.reset();
});
// ID CARD FLIP (tap or Enter/Space for touch and keyboard; hover handled in CSS)
const idCard = document.getElementById("idCard");
const flip = () => {
  idCard.classList.toggle("flipped");
  idCard.closest(".lanyard").classList.toggle("flipped");
};
idCard.addEventListener("click", () => {
  if (!matchMedia("(hover:hover)").matches) flip();
});
idCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flip();
  }
});
document.getElementById("yr").textContent = new Date().getFullYear();

// PROJECT DECK: click the stack to shuffle to the next project
(() => {
  const stack = document.getElementById("stack");
  if (!stack) return;
  const cards = [...stack.querySelectorAll(".pcard")];
  const panels = [...document.querySelectorAll(".info-panel")];
  const count = document.getElementById("deckCount");
  let order = cards.map((_, i) => i); // order[0] is the front card
  let busy = false;

  const show = () => {
    panels.forEach((p, i) => p.classList.toggle("active", i === order[0]));
    count.textContent = order[0] + 1 + " / " + cards.length;
  };
  const next = () => {
    if (busy) return;
    busy = true;
    const front = cards[order[0]];
    front.classList.add("leaving");
    order.push(order.shift());
    cards.forEach((c, i) => {
      if (c !== front) c.dataset.pos = order.indexOf(i);
    });
    show();
    setTimeout(() => {
      front.style.transition = "opacity 0.5s";
      front.classList.remove("leaving");
      front.dataset.pos = order.indexOf(cards.indexOf(front));
      setTimeout(() => {
        front.style.transition = "";
        busy = false;
      }, 520);
    }, 480);
  };
  stack.addEventListener("click", next);
  stack.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      next();
    }
  });
})();
