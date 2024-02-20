const onClickMenu=t=>{const c=document.querySelectorAll(".tab");c.forEach((t=>{t.classList.remove("active")}));const e=t.target;e.classList.add("active");const o=Array.from(c).indexOf(e),s=document.querySelectorAll(".option");s.forEach((t=>{t.classList.remove("active")})),s[o].classList.add("active")};
//# sourceMappingURL=custom.4596fa3d.js.map
