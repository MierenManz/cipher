import { decodeMap, LEGAL_CHARACTERS } from "./util.ts";

const decodeArray = " abcdefghijklmnopqrstuvwxyz".split("");

export function encode(data: string): number[] {
  if (!LEGAL_CHARACTERS.test(data)) throw "Illegal characters found";

  const buffer: number[] = new Array(data.length);
  data = data.toLowerCase();

  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = decodeMap.get(data[i])!;
  }

  return buffer;
}

export function decode(data: number[]): string {
  let decodedString = "";

  for (const byte of data) decodedString += decodeArray[byte];

  return decodedString;
}
