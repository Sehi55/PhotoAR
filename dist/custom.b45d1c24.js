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
const optionButtons = document.querySelectorAll(".option_btn");
optionButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const selectedImage = button.querySelector(".select");
        const selectedType = selectedImage.getAttribute("alt");
        const allImages = document.querySelectorAll(`.custom`);
        allImages.forEach((image)=>{
            if (image.getAttribute("alt") === selectedType) image.classList.add("active");
            else image.classList.remove("active");
        });
    });
});

//# sourceMappingURL=custom.b45d1c24.js.map
