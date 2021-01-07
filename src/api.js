import axios from "axios";

const treatApi = axios.create({
  baseURL: "https://treat-yo-shelf-backend.herokuapp.com/api/",
});

export const getAllBooks = () => {
  return treatApi.get("/books").then((data) => {
    return data.data;
  });
};

export const getSingleBook = (book_id) => {
  return treatApi.get(`/books/${book_id}`).then((data) => {
    return data.data;
  });
};

export const createNewUser = (user_id, username, email) => {
  return treatApi
    .post(`/users`)
    .send({ user_id, username, email })
    .then(({ body }) => {
      console.log(body);
    });
};