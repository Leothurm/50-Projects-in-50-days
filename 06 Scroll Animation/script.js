let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
  let triggerBottom =   window.innerHeight/5*3

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop< triggerBottom){
        box.classList.add('show')
    } else{
        box.classList.remove('show')
    }
})
}