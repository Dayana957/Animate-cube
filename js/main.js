let cube = document.querySelector(".cube");
let state = 15;
let windowWidth = document.documentElement.clientWidth - 140;

function animateCube() {

    cube.addEventListener('click', () => {
        let cubeInterval = setInterval(() =>{

                if(state > windowWidth) clearInterval(cubeInterval)

                state = state + 10
                cube.style.transform = `translateX(${state}px)`
        }, 100);
    })
}

animateCube()