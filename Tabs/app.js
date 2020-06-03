function openCity(e,cityName){
    let tabContent=document.querySelectorAll('.tab-content');
    let tabLinks=document.querySelectorAll('.tab-links');
    console.log(tabContent);
      console.log(tabLinks);
    
    for(let i=0;i<tabContent.length;i++){
      tabContent[i].style.display='none';
    }
     for(let i=0;i<tabLinks.length;i++){
      tabLinks[i].classList.remove('active');
    }
    
    document.querySelector(`#${cityName}`).style.display='block';
    console.log(e);
    e.classList.add('active');
    
  }
  document.querySelector("#current").click();