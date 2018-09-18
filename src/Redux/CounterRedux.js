export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const COUNTER_ACTIONS = {
  increment,
  decrement,
  reset
};

const ACTION_HANDLERS = {
  [INCREMENT]: state => {
    return {
      ...state,
      value: state.value + 1
    };
  },
  [DECREMENT]: state => {
    return {
      ...state,
      value: state.value - 1
    };
  },
  [RESET]: state => {
    return {
      ...state,
      value: 0
    };
  }
};

const INITIAL_STATE = {
  value: 0
};

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
