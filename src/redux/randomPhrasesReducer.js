import {FIRST_MESSAGE, RANDOM_MESSAGE} from "./actions/actionsTypes";

const initialState = {
  message: "",
  author: "",
  color: "",
  whiteColor: "white",
  messages: [
    {
      message: "Hola",
      author: "KailyKinG",
      color: "green",
    },
    {
      message: "Como Estan",
      author: "bayolet",
      color: "skyblue",
    },
    {
      message: "Aqui Super Bien",
      author: "Koralyn",
      color: "orange",
    },
    {
      message: "A Donde Van",
      author: "KailyKinG",
      color: "red",
    },
    {
      message: "Nosotros, a la playa, Quieres ir ?",
      author: "Corey",
      color: "black",
    },
    {
      message: "Si, Si Quiero ir",
      author: "Karovilak",
      color: "violet",
    },
  ],
};

export const randomPhrasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_MESSAGE:
      const indexRandom = Math.floor(
        Math.random() * initialState.messages.length
      );
      return {
        ...state,
        message: state.messages[indexRandom].message,
        author: state.messages[indexRandom].author,
        color: state.messages[indexRandom].color,
      };

    case RANDOM_MESSAGE:
      const indexObject = state.messages.filter(
        (elem) => elem.message == action.payload
      );
      const index = state.messages.indexOf(indexObject[0]);
      const copia = state.messages.slice();
      copia.splice(index, 1);
      const newIndex = Math.floor(Math.random() * copia.length);
      return {
        ...state,
        message: copia[newIndex].message,
        author: copia[newIndex].author,
        color: copia[newIndex].color,
      };
    default:
      return state;
  }
};
