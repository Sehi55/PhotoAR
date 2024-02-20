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
    const customs = document.querySelectorAll(".custom");
    customs.forEach((custom)=>{
        custom.classList.remove("active");
    });
    const clickedButton = e.target;
    const images = clickedButton.querySelectorAll(".select");
    // NodeList를 Array로 변환하여 forEach 사용
    Array.from(images).forEach((img)=>{
        const imageElement = img; // 형변환
        console.log(imageElement.alt);
    });
};

//# sourceMappingURL=custom.b45d1c24.js.map
