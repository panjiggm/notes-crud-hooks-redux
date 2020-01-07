import INITIAL_STATE from "../../components/notesData";

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "CREATE_NOTE":
      return [...state, payload];
    case "UPDATE_NOTE":
      return payload;
    case "DELETE_NOTE":
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};
