document.addEventListener("DOMContentLoaded", () => {
  const menubox = document.querySelector(".menubox");
  const nav = document.querySelector(".lat-nav");
  const main = document.querySelector("main");
  const politInt = document.querySelector(".polit-int");
  const politArg = document.querySelector(".polit-arg");
  const politChi = document.querySelector(".polit-chi");
  const relArgChi = document.querySelector(".rel-arg-chi");
  const relArgJap = document.querySelector(".rel-arg-jap");
  const relArgEEUU = document.querySelector(".rel-arg-eeuu");
  const politIntUl = document.querySelector(".polit-int-ul");
  const politArgUl = document.querySelector(".polit-arg-ul");
  const politChiUl = document.querySelector(".polit-chi-ul");
  const relArgChiUl = document.querySelector(".rel-arg-chi-ul");
  const relArgJapUl = document.querySelector(".rel-arg-jap-ul");
  const relArgEEUUUl = document.querySelector(".rel-arg-eeuu-ul");
  menubox.addEventListener("click", () => {
    if (nav.style.display === "block") {
      nav.style.display = "none";
      main.style.display = "block";
    } else {
      nav.style.display = "block";
      main.style.display = "none";
    }
  });

  politInt.addEventListener("click", () => {
    if (politIntUl.style.display === "block") {
      politIntUl.style.display = "none";
    } else {
      politIntUl.style.display = "block";
    }
  });

  politArg.addEventListener("click", () => {
    if (politArgUl.style.display === "block") {
      politArgUl.style.display = "none";
    } else {
      politArgUl.style.display = "block";
    }
  });

  politChi.addEventListener("click", () => {
    if (politChiUl.style.display === "block") {
      politChiUl.style.display = "none";
    } else {
      politChiUl.style.display = "block";
    }
  });

  relArgChi.addEventListener("click", () => {
    if (relArgChiUl.style.display === "block") {
      relArgChiUl.style.display = "none";
    } else {
      relArgChiUl.style.display = "block";
    }
  });

  relArgJap.addEventListener("click", () => {
    if (relArgJapUl.style.display === "block") {
      relArgJapUl.style.display = "none";
    } else {
      relArgJapUl.style.display = "block";
    }
  });

  relArgEEUU.addEventListener("click", () => {
    if (relArgEEUUUl.style.display === "block") {
      relArgEEUUUl.style.display = "none";
    } else {
      relArgEEUUUl.style.display = "block";
    }
  });
});
