export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://queslar-rome.onrender.com/api/v1"
    : "http://localhost:5000/api/v1";
