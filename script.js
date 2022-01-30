const canvas = document.getElementById('canvas');

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}


if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
} else {
  alert('머쓱이는 Canvas API를 지원하는 브라우저에서만 나타납니다!');
}

const draw = (time) => {
  resizeCanvas();
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);