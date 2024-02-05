let y = 0

document.body.addEventListener('wheel', (e) => {
    const height = document.body.offsetHeight
    
    y = y + e.wheelDeltaY
  
    if(y < -height + window.innerHeight) {
      y = -height + window.innerHeight
    }
  
    if(y > 0) {
      y = 0
    }
  
    const tr = `translateY(${y}px)`
    document.body.style.transform = tr

})