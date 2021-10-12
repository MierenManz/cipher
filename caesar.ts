import { alphabetArray, decodeMap, LEGAL_CHARACTERS } from "./util.ts";

export function encode(data: string, caesar: Caesar): string {
  if (!LEGAL_CHARACTERS.test(data)) throw "Illegal characters found";

  let encodedString = "";
  data = data.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    const indx = decodeMap.get(data[i])!;
    encodedString += alphabetArray[(indx + caesar) % 26];
  }

  return encodedString;
}

export function decode(data: string, caesar: Caesar): string {
  if (!LEGAL_CHARACTERS.test(data)) throw "Illegal characters found";

  let decodedString = "";
  data = data.toLowerCase();

  for (let i = 0; i < data.length; i++) {
    const indx = decodeMap.get(data[i])!;
    decodedString += alphabetArray[indx - caesar];
  }

  return decodedString;
}

type Caesar =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;
