const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Solo anima una vez
      }
    });
  },
  {
    threshold: 0.1,
  },
);

elementos.forEach((elemento) => {
  observer.observe(elemento);
});

const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnSubir.classList.add("mostrar");
  } else {
    btnSubir.classList.remove("mostrar");
  }
});

btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const secciones = document.querySelectorAll("section[id]");
const enlaces = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let actual = "";

  secciones.forEach((seccion) => {
    const superior = seccion.offsetTop - 150;
    const altura = seccion.offsetHeight;

    if (scrollY >= superior && scrollY < superior + altura) {
      actual = seccion.getAttribute("id");
    }
  });

  enlaces.forEach((enlace) => {
    enlace.classList.remove("activo");

    if (enlace.getAttribute("href") === "#" + actual) {
      enlace.classList.add("activo");
    }
  });
});

