import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component, useState } from "react";

const PostCard = ({
  postId,
  createdAt,
  content,
  likes,
  comments,
  onCommentAdd,
  addLikeToPost,
}) => {
  console.log("comments", comments);
  const [comment, setComment] = useState("");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box display={"flex"}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box>
            <Typography variant="body1">Saad Awais</Typography>
            <Typography variant="caption">Lahore,Pakistan</Typography>
            <Typography variant="caption">{createdAt}</Typography>
          </Box>
        </Box>
        <Typography variant="body1">{content}</Typography>
        <Box display={"flex"}>
          <Typography variant="body2">{likes} likes</Typography>
          <Typography variant="body2">{comments?.length} comments</Typography>
        </Box>
        <Box display="flex">
          <Button onClick={() => addLikeToPost(postId)}>Like</Button>
        </Box>
      </Grid>
      <Grid xs={12}>
        <TextField
          id="outlined-basic"
          label="Add A Comment"
          placeholder="Add A Comment"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={() => onCommentAdd(postId, comment)}>
          Add comment
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostCard;
