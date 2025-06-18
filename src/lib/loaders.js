import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  console.log("params in loader:", params); // should log { id: "xyz" }
  const res = await apiRequest(`/post/${params.id}`);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  // console.log(query);
  const postPromise = apiRequest("/getAllPost?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/posts", { withCredentials: true });
  console.log(postPromise)
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
