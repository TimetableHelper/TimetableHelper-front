export function defineColor(num) {
  if (num % 10 === 1) return '#768FFF';
  if (num % 10 === 2) return '#B47CFF';
  if (num % 10 === 3) return '#8F9BFF';
  if (num % 10 === 4) return '#64C1FF';
  if (num % 10 === 5) return '#62EBFF';
  if (num % 10 === 6) return '#9FFFE0';
  if (num % 10 === 7) return '#FFE5B5';
  if (num % 10 === 8) return '#FFD0B0';
  if (num % 10 === 9) return '#FFBCAF';
  if (num % 10 === 0) return '#FFB2DD';
}
export function defineHeight(num) {
  return num * 48 + 74;
}
