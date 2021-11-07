const initalState = {
  account: 0
};

const reducer = (state = initalState, action) => {
  const { type, sachin } = action;

  switch (action.type) {
    case "DEPOSIT":
      console.log(action.sachin);
      return { account: state.account + parseInt(action.sachin) };

    case "WITHDRAW":
      return { account: state.account - parseInt(action.sachin) };
    case "RESET ACCOUNT":
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
