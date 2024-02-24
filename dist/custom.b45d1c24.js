const onClickRestart = (e)=>{
    const clickedTab = e.target;
    console.log(clickedTab);
    const customs = document.querySelectorAll(".custom");
    customs.forEach((custom)=>{
        custom.classList.remove("active");
        if (custom.getAttribute("alt") === "basic_makeup") custom.classList.add("active");
    });
};
const onClickMenu = (e)=>{
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab)=>{
        tab.classList.remove("active");
    });
    const clickedTab = e.target;
    clickedTab.classList.add("active");
    const optionIndex = Array.from(tabs).indexOf(clickedTab);
    const options = document.querySelectorAll(".option");
    options.forEach((option)=>{
        option.classList.remove("active");
    });
    options[optionIndex].classList.add("active");
};
const onClickOption = (e)=>{
    // e.target은 button이거나 img일 수 있음
    const clickedElement = e.target; // 맨 위에 있는 img
    let imgAlt = [];
    let imgClassList = [];
    // 선택한 img의 형제요소들
    if (clickedElement.parentElement?.childElementCount) {
        let pointChild = clickedElement.parentElement.firstElementChild;
        for(let i = 0; i < clickedElement.parentElement?.childElementCount - 1; i++){
            imgAlt.push(pointChild?.getAttribute("alt"));
            imgClassList.push(pointChild?.classList[1]);
            pointChild?.nextElementSibling ? pointChild = pointChild.nextElementSibling : pointChild = null;
        }
    }
    const customs = document.querySelectorAll(".custom");
    customs.forEach((custom)=>{
        if (imgClassList.length > 1) {
            custom.classList.remove("active");
            if (imgAlt[0] === "2024_clothes" && "basic_makeup" === custom.getAttribute("alt")) custom.classList.add("active");
        } else imgClassList.forEach((img)=>{
            if (img === custom.classList[1]) custom.classList.remove("active");
        });
        imgAlt.forEach((imgAlt)=>{
            if (imgAlt === custom.getAttribute("alt")) custom.classList.add("active");
        });
    });
};

//# sourceMappingURL=custom.b45d1c24.js.map
