(function IIFE(){
    "use strict"
    
    const w = window.innerWidth/360;
    const h = window.innerHeight/360;
    
    const rotateCube = (event) => {
        let x = event.clientX/w;
        let y = event.clientY/h;
        
        let cube = document.querySelector("#cube")
        
        cube.style.transform = `rotateX(${y}deg) rotateZ(${x}deg) translateY(-3em)`
    }
    
    
    
    
    //Triangles:
    
    const innerRing = document.querySelector('#innerRing')
    const outterRing = document.querySelector('#outterRing')
    const fullRing = document.querySelector('#fullRing')
    
    const radiusiteratorStepstiplier = 15;
    const iteratorSteps = 90;
    let isTriangleUp = true
    
    
    const fillTriangleRing = (parentElement = null, radiusScale = 1, invertGradient = false, fillRing = false) => {
        
        if(!parentElement) return
        
        const newIteratorSteps = fillRing ? 3.75 : iteratorSteps
        const row = document.createElement('div')
        row.classList.add('row')
        
        for(let i = 0; i<=359; i+= newIteratorSteps){
            
            const currentGrayValue = invertGradient ? i+10 : 360-i+10
            const opacity = invertGradient ? .5 : 1
            
            isTriangleUp = !isTriangleUp
            let x = Math.cos(i*Math.PI/180)*radiusiteratorStepstiplier*radiusScale
            let z = Math.sin(i*Math.PI/180)*radiusiteratorStepstiplier*radiusScale
            
            const tri = document.createElement('div')
            tri.classList.add('tri')
            tri.classList.add(isTriangleUp?'triup':'tridown')
            fillRing && tri.classList.add('filled')

            tri.style.transform = `translateX(${x+1.5}em) translateZ(${z}em) rotateY(${90-i}deg)`
            isTriangleUp ? tri.style.borderBottomColor = `rgba(${currentGrayValue},${currentGrayValue},${currentGrayValue},${opacity})`
            : tri.style.borderTopColor = `rgba(${currentGrayValue},${currentGrayValue},${currentGrayValue},${opacity})`

            row.appendChild(tri)
        }
        parentElement.appendChild(row)
    }
    
    fillTriangleRing(innerRing)
    fillTriangleRing(fullRing, 1.25, true, true)
    fillTriangleRing(outterRing, 1.5, true, false)
    
    
    const rotateRings = (event) => {
        let x = event.clientX/w;
        let y = event.clientY/h;
        
        innerRing.style.transform = `rotateX(${y}deg) rotateZ(${x}deg)`
        
        outterRing.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
    }
    
    
    window.addEventListener("mousemove", (event) => rotateRings(event))
    window.addEventListener("mousemove", (event) => rotateCube(event))
    
})()