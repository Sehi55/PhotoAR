const onClickMenu = (e: MouseEvent) => {
    const tabs = document.querySelectorAll('.tab');
  
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    const clickedTab = e.target as HTMLElement;
    clickedTab.classList.add('active');
  
    const optionIndex = Array.from(tabs).indexOf(clickedTab);
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.classList.remove('active');
    });
  
    options[optionIndex].classList.add('active');
  };


  const onClickOption = (e: MouseEvent) => {
    const customs = document.querySelectorAll('.custom');
    customs.forEach(custom => {
        custom.classList.remove('active');
    });
    const clickedButton = e.target as HTMLButtonElement;
    const images = clickedButton.querySelectorAll(".select");

    // NodeList를 Array로 변환하여 forEach 사용
    Array.from(images).forEach((img: Element) => {
        const imageElement = img as HTMLImageElement; // 형변환
        console.log(imageElement.alt);
    });
};