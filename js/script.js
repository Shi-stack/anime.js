const button = document.querySelector ('.button');

// To provide animation on button on Hover

const mouseInAni = function(){

  anime({
    targets: button,
    wisth: '100%',
    scale:{
      delay: 600,
      value: 1.5
    },
    duration: 1500
  })

};

const mouseOutAni = function(){

  anime({
    targets: button,
    wisth: '40%',
    scale:{
      delay: 600,
      value: 1
    },
    duration: 1500
  })

};


button.addEventListener('mouseover', mouseInAni);
button.addEventListener('mouseout', mouseOutAni);