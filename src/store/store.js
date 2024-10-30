import {writable} from "svelte/store";

const defaultTime = 60;

// store 변수 만들기
export const score = writable(0);
export const round = writable(1);
export const time = writable(defaultTime);
export const page = writable("title")

// store 변수 초기화
export const initScore = () => {
  score.set(0);
  round.set(1);
  time.set(defaultTime);
}

export const initTime = () => {
  time.set(defaultTime);
}
