const STATUS = 'bookstore/categories/status';

export const status = (status) => ({
  type: STATUS,
  status,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoriesReducer;
