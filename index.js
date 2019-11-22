(function IIFE(){
    "use strict"
    window.addEventListener("mousemove", (event) => rotateCube(event))
    
    const w = window.innerWidth/360;
    const h = window.innerHeight/360;
    
    const rotateCube = (event) => {
        let x = event.clientX/w;
        let y = event.clientY/h;
        
        let cube = document.querySelector("#cube")
        
        cube.style.transform = `rotateX(${y}deg) rotateZ(${x}deg) translateY(-3em)`
        console.log("x",x,"y",y)
    }
    
    
    
    
    //Triangles:
    
    const innerRing = document.querySelector('#innerRing')
    const outterRing = document.querySelector('#outterRing')
    const fullRing = document.querySelector('#fullRing')
    
    const glo = 15;
    const mul = 100;
    let isup = true
    
    
    const fillTriangleRing = (parentElement = null, radiusScale = 1, invertGradient = false, fillRing = false) => {
        
        if(!parentElement) return
        
        const newMul = fillRing ? 3.75 : mul
        const row = document.createElement('div')
        row.classList.add('row')
        
        for(let i = 0; i<=360; i+= newMul){
            
            const currentGrayValue = invertGradient ? i+10 : 360-i+10
            const opacity = invertGradient ? .5 : 1
            
            isup = !isup
            let x = Math.cos(i*Math.PI/180)*glo*radiusScale
            let z = Math.sin(i*Math.PI/180)*glo*radiusScale
            
            const tri = document.createElement('div')
            tri.classList.add('tri')
            tri.classList.add(isup?'triup':'tridown')
            fillRing && tri.classList.add('filled')

            tri.style.transform = `translateX(${x+1.5}em) translateZ(${z}em) rotateY(${90-i}deg)`
            isup ? tri.style.borderBottomColor = `rgba(${currentGrayValue},${currentGrayValue},${currentGrayValue},${opacity})`
            : tri.style.borderTopColor = `rgba(${currentGrayValue},${currentGrayValue},${currentGrayValue},${opacity})`

            row.appendChild(tri)
        }
        parentElement.appendChild(row)
    }
    
    fillTriangleRing(innerRing)
    fillTriangleRing(fullRing, 1.25, true, true)
    fillTriangleRing(outterRing, 1.5, true, false)
    
    
    const rotateinnerRing = (event) => {
        let x = event.clientX/w;
        let y = event.clientY/h;
        
        innerRing.style.transform = `rotateX(${y}deg) rotateZ(${x}deg)`
        
        outterRing.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
    }
    
    
    window.addEventListener("mousemove", (event) => rotateinnerRing(event))
    
})()