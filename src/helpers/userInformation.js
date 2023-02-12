export const userData = {
  username: "admin",
  password: "12345",
};

export const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUyLCJsYXN0X25hbWUiOiJzZGZzZGZzZGYiLCJuYW1lIjoiYXNrbGRoc2FqZGciLCJlbWFpbCI6InRlc3R0ZXN0QGdtYWlsLmNvbSIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjc1NzIzNTc3LCJleHAiOjE2NzYzMjgzNzd9.KgY1oufs41Jkc8Nt1BXFSZoIwerleziAJ4Ys89S6NsY";

export const validateUserLogin = ({ username, password }) => {
  if (username === userData.username && password === userData.password) {
    return true;
  } else {
    throw new Error("The username or password you entered is incorrect");
  }
};
