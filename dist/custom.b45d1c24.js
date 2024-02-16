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

//# sourceMappingURL=custom.b45d1c24.js.map
