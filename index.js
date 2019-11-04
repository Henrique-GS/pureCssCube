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

    const bola = document.querySelector('#bola')
    const bola2 = document.querySelector('#bola2')

    const glo = 15;
    const mul = 100;
    let isup = true

    const row = document.createElement('div')
        row.classList.add('row')

        for(let i = 0; i<360; i+=mul){
            
            isup = !isup
            let x = Math.cos(i*Math.PI/180)*glo
            let z = Math.sin(i*Math.PI/180)*glo
            console.log(x,z)

            const tri = document.createElement('div');
            tri.classList.add(isup?'triup':'tridown')
            tri.style.transform = `translateX(${x}em) translateZ(${z}em) rotateY(${90-i}deg)`
            isup ? tri.style.borderBottom = `4.33em solid rgb(${i+10},${i+10},${i+10})`
            : tri.style.borderTop = `4.33em solid rgb(${i+10},${i+10},${i+10})`
            tri.style.filter = "sepia(100%)"
            row.appendChild(tri)
        }
        bola.appendChild(row)

        const row2 = document.createElement('div')
        row2.classList.add('row2')

        for(let i = 0; i<360; i+=mul){
            
            isup = !isup
            let x = Math.cos(i*Math.PI/180)*glo*1.5
            let z = Math.sin(i*Math.PI/180)*glo*1.5
            console.log(x,z)

            const tri = document.createElement('div');
            tri.classList.add(isup?'triup':'tridown')
            tri.style.transform = `translateX(${x}em) translateZ(${z}em) rotateY(${90-i}deg)`
            isup ? tri.style.borderBottom = `4.33em solid rgba(${360-i+10},${360-i+10},${360-i+10},.5)`
            : tri.style.borderTop = `4.33em solid rgba(${360-i+10},${360-i+10},${360-i+10},.5)`
            tri.style.filter = "sepia(100%)"
            row2.appendChild(tri)
        }
        bola2.appendChild(row2)


    const rotateBola = (event) => {
        let x = event.clientX/w;
        let y = event.clientY/h;

        let bola = document.querySelector("#bola")

        bola.style.transform = `rotateX(${y}deg) rotateZ(${x}deg)`

        let bola2 = document.querySelector("#bola2")

        bola2.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
    }

    
    window.addEventListener("mousemove", (event) => rotateBola(event))

})()