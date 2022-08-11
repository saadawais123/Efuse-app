import { Box, Button, Grid, TextareaAutosize } from "@mui/material";
import React, { Component, useState } from "react";

const AddPost = ({ onAddNewPost }) => {
  const [content, setContent] = useState("");
  return (
    <Grid item xs={12}>
      <Box>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Whats on your mind"
          style={{ width: 200 }}
        />
        <Button onClick={() => onAddNewPost(content)}>Post it </Button>
      </Box>
    </Grid>
  );
};

export default AddPost;
