let cuadrado = document.querySelector('.cuadrado');
let button_inicio = document.querySelector('.btn_inicio');
let button_vertical = document.querySelector('.btn_vertical');
let button_horizontal = document.querySelector('.btn_horizontal')
let div_torre = document.createElement('div');
let top_vertical = 0;
let left_horizontal = 0;

cuadrado.onclick = () => {
  cuadrado.style.backgroundColor = 'purple';
}

button_inicio.onclick = () => {
  cuadrado.appendChild(div_torre);
  div_torre.classList.add('torre')
  top_vertical = 0;
  left_horizontal = 0;
  div_torre.style.top = `${top_vertical}px`;
  div_torre.style.left = ` ${left_horizontal}px`
}

button_vertical.onclick = () => {
  top_vertical = top_vertical + 100;
  div_torre.style.position = 'relative';
  div_torre.style.top = `${top_vertical}px`;

  if (top_vertical > 200) {
    div_torre.style.top = '0';
    top_vertical = 0;
  }
};

button_horizontal.onclick = () => {
  console.log(left_horizontal);
  left_horizontal = left_horizontal + 100;
  div_torre.style.position = 'relative';
  div_torre.style.left = `${left_horizontal}px`

  if (left_horizontal > 400) {
    div_torre.style.left = '0'
    left_horizontal = 0;

  }
}