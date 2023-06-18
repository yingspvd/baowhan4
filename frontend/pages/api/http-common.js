/*******************************************************************************
 * This file is the base url that connection to the backend
 ******************************************************************************/
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

export const BASE_URL = "http://localhost:5000";
