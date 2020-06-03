function openCity(e,cityName){
    const tabContent=document.querySelectorAll('.tab-content');
    const tabLinks=document.querySelectorAll('.tab-links');
    
    for(let i=0;i<tabContent.length;i++){
      tabContent[i].style.display='none';
    }
     for(let i=0;i<tabLinks.length;i++){
      tabLinks[i].className='';
       tabLinks[i].classList.add('tab-links');
    }
    document.querySelector(`#${cityName}`).style.display='block';
    document.querySelector(`#${cityName}`).classList.add(`${cityName}`);
    e.classList.add(`${cityName}`);
  }
  document.querySelector('#default').click();