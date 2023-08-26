import {FIRST_MESSAGE, RANDOM_MESSAGE} from "./actionsTypes";

export const firstMessage = () => {
  return {
    type: FIRST_MESSAGE,
  };
};

export const randomMessages = (msg) => {
  return {
    type: RANDOM_MESSAGE,
    payload: msg,
  };
};