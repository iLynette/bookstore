const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const PAGE_LOAD = 'bookstore/books/loadBooks';
const myId = 'VCFDtCk7haNtVxSxEnnl';

const defaultState = [];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    case PAGE_LOAD:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export const getBooks = () => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${myId}/books`,
  {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json()).then((data) => {
  const books = Object.keys(data).map((key) => {
    const book = data[key][0];
    return {
      id: key,
      ...book,
    };
  });
  dispatch({ type: PAGE_LOAD, payload: books });
}).catch(() => {});

export const addBook = (book) => (dispatch) => fetch(
  `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${myId}/books`,
  {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  },
).then((res) => {
  if (res.ok) {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
});

export const removeBook = (bookId) => (dispatch) => {
  const body = {
    item_id: bookId,
  };
  return fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${myId}/books/${bookId}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    }).then((res) => {
    if (res.ok) {
      dispatch({
        type: REMOVE_BOOK,
        id: bookId,
      });
    }
  }).catch(() => {});
};

export default booksReducer;
