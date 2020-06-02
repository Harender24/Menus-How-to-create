let acc=document.querySelectorAll('.accordion');

for(let i=0;i<acc.length;i++){
  acc[i].addEventListener('click',function() {
    this.classList.toggle('active');
    let accordionPanel=this.nextElementSibling;
   
    if(accordionPanel.style.display==='block'){
      accordionPanel.style.display='none';
     }
    else{
      accordionPanel.style.display='block';
    }
  });
}
