(function(){
  const parallax = document.querySelector('.parallax');
  const layers = parallax.children;

  function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {

      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 20;

      layer.style.transform = `translateY(-${strafe}%) translateZ(0)`;
    })
  }

  window.addEventListener('scroll', e => {
    if(window.innerWidth >= 768){
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
    }
  })
})();