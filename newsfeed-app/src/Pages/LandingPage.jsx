import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import AddPost from "../Components/Posts/AddPost";
import {
  addComment,
  addLike,
  addPost,
  getUserPosts,
} from "../services/postServices";
import PostCard from "./../Components/Posts/PostCard";

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await getUserPosts();
    console.log("posts", response);
    if (response) {
      setPosts(response);
    }
  };
  const addNewPost = async (content) => {
    const response = await addPost(content);
    if (response) {
      getPosts();
    }
    console.log("Response", response);
  };

  const onCommentAdd = async (postId, comment) => {
    const response = await addComment(postId, comment);
    if (response) {
      console.log("response");
      getPosts();
    }
  };
  const onAddLike = async (postId) => {
    const response = await addLike(postId);
    if (response) {
      console.log("response", response);
      getPosts();
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Grid container>
      <AddPost onAddNewPost={addNewPost}></AddPost>
      {posts &&
        posts.map((post) => {
          return (
            <PostCard
              createdAt={post.createdAt}
              content={post.content}
              likes={post.likes}
              comments={post.comments}
              postId={post._id}
              onCommentAdd={onCommentAdd}
              addLikeToPost={onAddLike}
            />
          );
        })}
    </Grid>
  );
}

export default LandingPage;
