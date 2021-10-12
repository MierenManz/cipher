export const alphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

export const decodeMap = new Map(
  " abcdefghijklmnopqrstuvwxyz"
    .split("").map((
      char,
      indx,
    ) => [char, indx]),
);
export const LEGAL_CHARACTERS = /^[A-Za-z ]+$/;
