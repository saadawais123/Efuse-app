import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/api";
export const userId = "62f4e0c485d5c85510bfc8b8";
export const getUserPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/posts`);
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log("err", err);
  }
};

export const editPost = async (postId, { content, likes, comments }) => {
  try {
    const response = await axios.patch(`${BASE_URL}/posts/${postId}`, {
      content,
      likes,
      comments,
    });
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
export const addPost = async (content) => {
  try {
    console.log("add post", content);
    const response = await axios.post(`${BASE_URL}/posts`, {
      content,
      title: "New Post",
      userId,
    });
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
export const addComment = async (postId, comment) => {
  try {
    console.log("post id ", postId);
    const response = await axios.post(`${BASE_URL}/posts/${postId}/comment`, {
      comment,
      userId,
    });
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
export const addLike = async (postId) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/like`, {
      postId,
    });
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.log("err", err.message);
  }
};
