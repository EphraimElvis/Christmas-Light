const lightUL = document.querySelector('ul');
const createli = document.createDocumentFragment();
const selectColor = document.querySelector('.christmas-leaves');
let setColorIntensity = document.querySelector('.color-intensity');
const increaseBulb = document.querySelector('.increase-bulb');
const setTextShadow = document.querySelector(':root');
setTextShadow.style.setProperty('--size', 20 + 'px')
let colorId;
let setColor = '';
let selectElement = '';
let increnceOpacity = 0;

createChristmasLights(5);
colorPalette();


function createChristmasLights(value) {
    let light = ['#ff0000', '#0000ff', '#ffff00', '#008000', '#e93b5a', '#0cc6db'];
    for (let i = 0; i <= value; i++)    {
        const list = document.createElement('li')
        const i_light = document.createElement('i');
        i_light.dataset.colorId = i;
        i_light.classList.value = 'fas fa-lightbulb';
        i_light.style.color = light[i];
        i_light.style.transform = 'scale(-1.3)';
        if ( i % 2) {
            i_light.classList.add('shine-light');
        } else {
            i_light.classList.add('dim-light');
        }
        list.appendChild(i_light);
        createli.appendChild(list);
    }
}
lightUL.appendChild(createli);

function colorPalette() {
    colors = ['#dd1616', '#16dd1c', '#e3e70a', '#e77a0a', '#6d6bf3', '#af14b2'];
    const colorPalette = document.querySelectorAll('.circle');
    const colorList = [...colorPalette];
    colorList.map( (element, i)=> {
        element.style.background = colors[i];
    });
}

lightUL.addEventListener('click', (e) => {
    e.target.style.color = setColor;
    selectElement = e.target;
});

selectColor.addEventListener('click', (e) => {
    setColor = e.target.style.background;
    console.log('color selected ', e.target.style.background)
});

//setting the color intensity
setColorIntensity.addEventListener('change', (e) => {
    setTextShadow.style.setProperty('--size', setColorIntensity.value + 'px')
});

increaseBulb.addEventListener('change', (e) => {
    setTextShadow.style.setProperty('--fontsize', increaseBulb.value +'em');
    //document.querySelector('li').style.fontSize = increaseBulb.value +'px';
})


