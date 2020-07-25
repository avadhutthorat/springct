const initialState = {
  users: [
    { id: 1, name: "admin", address: "Pune", phone: 898989898, role: "admin" },
  ],
  loggedInUser: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload);
      localStorage.setItem(
        "users",
        JSON.stringify([...state.users, action.payload])
      );
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_LOGIN": {
      console.log(action);
      localStorage.setItem("loggedIn", JSON.stringify(action.payload));
      return {
        ...state,
        loggedInUser: action.payload,
      };
    }
    default:
      break;
  }
  return state;
}
