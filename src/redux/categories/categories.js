const STATUS = 'bookstore/categories/status';

export const status = (book) => ({
  type: STATUS,
  book,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return [...state, 'Under Construction'];
    default:
      return state;
  }
};

export default categoriesReducer;
