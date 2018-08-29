
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed')
  var options = {
      inDuration: 400
  }
  var instances = M.Materialbox.init(elems, options)
  
  AOS.init({once:true})
  
  let nav = document.querySelector('nav')

    window.addEventListener('scroll', () => {
        if (window.scrollY>20) {
            nav.parentElement.style.background = "#232731"
            nav.style.border = "0"
            nav.style.padding = "15px 0"
        } else {
            nav.parentElement.style.background = "transparent"
            nav.style.padding = "30px 0"  
            nav.style.borderBottom = "1px #aaa solid"        
        }
    })

})


