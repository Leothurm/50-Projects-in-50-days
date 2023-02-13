let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
  let triggerBottom =  window.innerHeight/5*3
  console.log(triggerBottom)

  boxes.forEach(b => {
    const boxTop = b.getBoundingClientRect().top

    if(boxTop < triggerBottom){
        b.classList.add('show')
        
    } else{
        b.classList.remove('show')
    }
})
}