// MIT License 2025-present Adam Burucs

export const WIDTH: i32 = 640;
export const HEIGHT: i32 = 480;
export const FRAMEBUFFER: usize = memory.data(WIDTH * HEIGHT * 4);

// Greenish color
function randomColor(): u32 {
  let r = (<u32>(Math.random() * 55)) & 0xff;
  let g = (<u32>(Math.random() * 255)) & 0xff;
  let b = (<u32>(Math.random() * 55)) & 0xff;
  return 0xff000000 | (r << 16) | (g << 8) | b; // ARGB32
}

export function drawRandomPixels(): void {
  for (let i = 0; i < 512; i++) {
    let x = <i32>(Math.random() * WIDTH);
    let y = <i32>(Math.random() * HEIGHT);
    let index: i32 = (y * WIDTH + x) << 2; // 4 bytes per pixel

    let color: u32 = randomColor();
    // Write to memory buffer (as u32 array)
    store<u32>(FRAMEBUFFER + index, color);
  }
}
