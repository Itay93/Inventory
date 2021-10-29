import { create } from "apisauce";

const clientApi = create({
  baseURL: "https://inventory-backend-app.herokuapp.com",
});

export default clientApi;

// https://inventory-backend-app.herokuapp.com
