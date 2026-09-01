function rolar1(){
    window.scrollTo({
        top: 2000,    
        left: 0,     
        behavior: 'smooth'
    })
}
function rolar2(){
    window.scrollTo({
      top: 1000,    
      left: 0,     
      behavior: 'smooth'
    })
}
function rolar3(){
    window.scrollTo({
      top: 300,    
      left: 0,     
      behavior: 'smooth'
    })    
}
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting===true){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))