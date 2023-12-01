var menuItem = document.querySelectorAll('.item_menu')
function selectlink(){
    menuItem.forEach((item)=>
      item.classList.remove('ativo')
    )
    this.classList.add('ativo')
        
    
}

menuItem.forEach((item)=>
   item.addEventListener('click' , selectlink)


)