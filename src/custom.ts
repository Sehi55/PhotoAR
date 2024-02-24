const onClickRestart = (e: MouseEvent) => {
  const clickedTab = e.target as HTMLElement;
  console.log(clickedTab);
  const customs = document.querySelectorAll(".custom");
  customs.forEach((custom)=>{
    custom.classList.remove('active');
    if(custom.getAttribute('alt')==='basic_makeup'){
    custom.classList.add('active');}
  });
};


const onClickMenu = (e: MouseEvent) => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const clickedTab = e.target as HTMLElement;
  clickedTab.classList.add("active");

  const optionIndex = Array.from(tabs).indexOf(clickedTab);
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("active");
  });

  options[optionIndex].classList.add("active");
};



const onClickOption = (e: MouseEvent) => {
  // e.target은 button이거나 img일 수 있음
  const clickedElement = e.target as HTMLElement; // 맨 위에 있는 img
  
  let imgAlt : string[] = [];
  let imgClassList : string[] = [];

  // 선택한 img의 형제요소들
  if(clickedElement.parentElement?.childElementCount){
    let pointChild = clickedElement.parentElement.firstElementChild;
    for(let i = 0 ; i < clickedElement.parentElement?.childElementCount-1;i++){
      imgAlt.push(pointChild?.getAttribute('alt') as string);
      imgClassList.push(pointChild?.classList[1] as string);
      pointChild?.nextElementSibling ? pointChild = pointChild.nextElementSibling : pointChild = null ;
   }
  }

  const customs = document.querySelectorAll(".custom");
  customs.forEach((custom) => {
    if(imgClassList.length >1){ // 추천세트 선택 시
      custom.classList.remove("active");
      if(imgAlt[0]==="2024_clothes"&&'basic_makeup'===custom.getAttribute('alt')) // 2024 추천세트 선택시 기본표정 나오게
      custom.classList.add('active');
    }
    else{
      imgClassList.forEach((img)=>{ // 기존과 같은 유형의 커스텀만 지워지도록
        if(img ===custom.classList[1]){
          custom.classList.remove("active");
        }
      });
    }
    imgAlt.forEach((imgAlt)=>{
      if(imgAlt ===custom.getAttribute('alt')){
        custom.classList.add('active');
      }
    });
  });
};

