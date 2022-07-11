window.onload = async () => {
  const black = "#201421";
  const yellow = "#FDB275";
  const brown = "#974527";
  const red = "#FD4611";

  const screen = document.getElementById("screen");
  const width = screen.clientWidth;
  const height = screen.clientHeight;
  screen.width = width;
  screen.height = height;

  const ctx = screen.getContext("2d");
  ctx.fillStyle = black;
  ctx.fillRect(0, 0, width, height);

  const grid = {
    x: Math.floor(width / 10),
    y: Math.floor(height / 10)
  };
  const space = new Set();

  star();
  star();
  star();
  star();
  comet();
  comet();
  comet();
  comet();

  function star(){
    const [x, y] = getSpace(1, 1);
    reserve(x, y, 1, 1);

    const g = Math.min(grid.x, grid.y);
    const cX = Math.floor(grid.x * x + (grid.x - g) / 2);
    const cY = Math.floor(grid.y * y + (grid.y - g) / 2);
    const spikes = [
      1 + 0 * 3,
      0 + 2 * 3,
      2 + 1 * 3,
      0 + 1 * 3,
      2 + 2 * 3
    ];

    draw();
    function draw(){

      const color = [brown, yellow][Math.floor(Math.random() * 2)]

      ctx.fillStyle = black;
      ctx.fillRect(cX, cY, g, g);

      let i = 0;
      let bX = Math.floor((spikes[i] % 3 + Math.random() / 2 + 0.25) * g / 3);
      let bY = Math.floor((Math.floor(spikes[i] / 3) % 3 + Math.random() / 2 + 0.25) * g / 3);
      const fX = bX;
      const fY = bY;
      while(i < spikes.length){
        let eX, eY;
        if(i == spikes.length - 1){
          eX = fX;
          eY = fY;
        } else {
          eX = Math.floor((spikes[i + 1] % 3 + Math.random() / 2 + 0.25) * g / 3);
          eY = Math.floor((Math.floor(spikes[i + 1] / 3) % 3 + Math.random() / 2 + 0.25) * g / 3);
        }
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(cX + bX, cY + bY);
        ctx.lineTo(cX + eX, cY + eY);
        ctx.stroke();

        bX = eX;
        bY = eY;
        i ++;
      }
      setTimeout(draw, 100);
    }
  }

  function comet(){

    setTimeout(draw, (Math.random() * 2 + 2) * 1000);
    async function draw(){
      const [x, y] = getSpace(3, 2);
      reserve(x, y, 3, 2);

      const g = Math.floor(Math.min(grid.x * 3 / 2, grid.y * 2));
      const cX = Math.floor(grid.x * x + (grid.x * 3 / 2 - g) / 2);
      const cY = Math.floor(grid.y * y + (grid.y * 2 - g) / 2);

      // RECTANGLE SHAPE 2x1
      //ctx.fillStyle =  red;
      //ctx.fillRect(cX, cY, g * 2, g);

      ctx.beginPath();
      ctx.moveTo(cX + Math.floor(g / 15), cY + Math.floor(g / 8));
      ctx.lineTo(cX + Math.floor(g / 2), cY + Math.floor(g / 5));
      ctx.strokeStyle = yellow;
      ctx.stroke();
      await wait(80);

      ctx.beginPath();
      ctx.moveTo(cX + Math.floor(g / 2), cY + Math.floor(g / 5));
      ctx.lineTo(cX + g, cY + Math.floor(g / 3));
      ctx.strokeStyle = yellow;
      ctx.stroke();
      await wait(80);

      ctx.fillStyle = black;
      ctx.fillRect(cX, cY, Math.floor(g / 2), g);
      ctx.beginPath();
      ctx.moveTo(cX + g, cY + Math.floor(g / 3));
      ctx.lineTo(cX + Math.floor(g + g / 2), cY + Math.floor(g / 2));
      ctx.strokeStyle = yellow;
      ctx.stroke();
      await wait(80);

      ctx.fillStyle = black;
      ctx.fillRect(cX, cY, g, g);
      ctx.beginPath();
      ctx.moveTo(cX + Math.floor(g + g / 2), cY + Math.floor(g / 2));
      ctx.lineTo(cX + Math.floor(g + g * 0.8), cY + Math.floor(g * 3 / 4));
      ctx.strokeStyle = yellow;
      ctx.stroke();
      await wait(80);

      ctx.fillStyle = black;
      ctx.fillRect(cX, cY, Math.floor(g + g / 2), g);
      await wait(80);

      ctx.fillStyle = black;
      ctx.fillRect(cX, cY, 2 * g, g);
      await wait(80);

      free(x, y, 3, 2);

      // REPEAT
      setTimeout(draw, (Math.random() * 2 + 2) * 1000);
    }
  }

  function reserve(x, y, w, h){
    for(let s = 0; s < w; s ++){
      for(let t = 0; t < h; t ++){
        space.add(x + s + (y + t) * 10);
      }
    }
  }

  function free(x, y, w, h){
    for(let s = 0; s < w; s ++){
      for(let t = 0; t < h; t ++){
        space.delete(x + s + (y + t) * 10);
      }
    }
  }

  function getSpace(w, h){
    const available = [];
    for(let y = 0; y < 11 - h; y ++){
      for(let x = 0; x < 11 - w; x ++){
        let got = true;
        for(let s = 0; s < w; s ++){
          for(let t = 0; t < h; t ++){
            if(space.has(x + s + (y + t) * 10)){
              got = false;
              break;
            }
          }
          if(!got) break;
       }
        if(got) available.push(x + y * 10);
      }
    }
    const a = available[Math.floor(Math.random() * available.length)];
    return [a % 10, Math.floor(a / 10) % 10];
  }
}

async function wait(ms){
  await new Promise(r => setTimeout(r, ms));
}