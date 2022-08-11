import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextareaAutosize,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";

const AddPost = ({ onAddNewPost }) => {
  const [content, setContent] = useState("");
  return (
    <Grid item className="postContainer">
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box display="flex" className="top">
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Whats on your mind"
            className="postInput"
          />
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: "10px" }}
        >
          <Button className="photoBtn" onClick={() => onAddNewPost(content)}>
            <CollectionsIcon fontSize="12px" />
            <Typography style={{ fontSize: "12px", marginLeft: "5px" }}>
              Photo/Video
            </Typography>
          </Button>
          <Button className="postBtn" onClick={() => onAddNewPost(content)}>
            Post it
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddPost;
