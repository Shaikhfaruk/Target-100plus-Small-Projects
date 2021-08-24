const $petals = document.querySelectorAll(".petal");
let color = 0;
const mouse = {
  x: 1,
  y: 1,
};

const handleMouse = (e) => {
  const x = e.clientX || e.touches[0].clientX;
  const y = e.clientY || e.touches[0].clientY;
  mouse.x = x / window.innerWidth;
  mouse.y = y / window.innerHeight;
};
["mousemove", "touchstart", "touchmove"].forEach((e) =>
  window.addEventListener(e, handleMouse)
);

const lerp = (a, b, n) => (1 - n) * a + n * b;

const animate = () => {
  $petals.forEach((b, ind) => {
    const i = ind / $petals.length;
    const x = Math.sin(i * Math.PI * 2) * 48;
    const y = -Math.cos(i * Math.PI * 2) * 48;
    color = lerp(color, mouse.y * 360, 0.004);
    const style = {
      transform: `translate(${x}px, ${y}px) rotate(${
        i * 360 + mouse.y * 360
      }deg) scale(${0.5 + mouse.x * 0.5})`,
      borderRadius: `${50 + mouse.y * 50}% 0 ${50 + mouse.x * 50}% 50%`,
    };
    Object.assign(b.style, style);
    b.style.setProperty("--color", `hsl(${Math.floor(color)}, 60%, 50%)`);
  });
  requestAnimationFrame(animate);
};
animate();
