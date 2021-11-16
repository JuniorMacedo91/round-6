const target = document.querySelectorAll('[data-scrollAnimation]')

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function scrollAnimation(){
    const top = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(el){
        if(top > el.offsetTop){
            el.classList.add('animate')
        }else{
            el.classList.remove('animate')
        }
    })
}

if(target.length){
    window.addEventListener('scroll', debounce(scrollAnimation), 200 )
}

scrollAnimation()