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
  
