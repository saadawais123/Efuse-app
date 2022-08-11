import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Input,
  Typography,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const PostCard = ({
  postId,
  createdAt,
  content,
  likes,
  comments,
  onCommentAdd,
  addLikeToPost,
  userId,
}) => {
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);

  function formatTime(time) {
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  return (
    <>
      <Grid item className="postContainer">
        <Box display={"flex"} className="top">
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Box className="posted" display="flex" flexDirection={"column"}>
            <Typography
              style={{
                color: "#52525f",
                fontSize: "14px",
                fontSize: "bold",
                lineHeight: "14px",
              }}
              variant="body1"
            >
              {userId.firstName + " " + userId.lastName}
            </Typography>
            <Typography
              style={{
                color: "blue",
                fontSize: "16px",
                fontSize: "bold",
                lineHeight: "14px",
              }}
              variant="caption"
            >
              <LocationOnIcon
                sx={{ color: "blue" }}
                fontSize="10px"
                style={{ position: "relative", top: "1px" }}
              />{" "}
              Lahore,Pakistan
            </Typography>
            <Typography variant="caption" style={{ lineHeight: "14px" }}>
              {formatTime(new Date(createdAt))}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1">{content}</Typography>
        <Box display={"flex"} className="top" style={{ color: "#abacb5" }}>
          <Typography style={{ marginRight: "2px", fontSize: "10px" }}>
            {likes} likes
          </Typography>
          <Typography style={{ marginLeft: "2px", fontSize: "10px" }}>
            {comments?.length} comments
          </Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          style={{
            backgroundColor: "#f7f7f7",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "10px",
          }}
        >
          <Button
            onClick={() => addLikeToPost(postId)}
            style={{ padding: 0, color: "#abacb5" }}
          >
            <FavoriteIcon fontSize="12px" />
            <Typography style={{ fontSize: "12px", marginLeft: "5px" }}>
              Like
            </Typography>
          </Button>
          <Button
            onClick={() => setShowComment(!showComment)}
            style={{ padding: 0, color: showComment ? "blue" : "#abacb5" }}
          >
            <ChatIcon fontSize="12px" />
            <Typography style={{ fontSize: "12px", marginLeft: "5px" }}>
              Comment
            </Typography>
          </Button>
        </Box>
        {showComment && (
          <>
            <Grid
              style={{ backgroundColor: "rgb(247, 247, 247" }}
              display="flex"
              className="top"
              alignItems={"center"}
            >
              <Avatar
                className="avatar"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Input
                id="outlined-basic"
                label="Add A Comment"
                placeholder="Add A Comment"
                variant="outlined"
                value={comment}
                fullWidth
                disableUnderline={true}
                style={{
                  border: "1px solid black",
                  padding: "0 10px",
                  margin: "0 10px",
                  borderRadius: "15px",
                }}
                onChange={(e) => setComment(e.target.value)}
              />
              <SendIcon
                style={{ cursor: "pointer" }}
                onClick={() => onCommentAdd(postId, comment)}
              />
            </Grid>
            {comments.length > 0 &&
              comments.map((comment) => {
                return (
                  <Grid
                    style={{ backgroundColor: "rgb(247, 247, 247" }}
                    display="flex"
                    className="top"
                    alignItems={"center"}
                  >
                    <Avatar
                      className="avatar"
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Box
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        marginLeft: "10px",
                        borderRadius: "15px",
                        width: "100%",
                        backgroundColor: "#dae1ea",
                      }}
                      display={"flex"}
                      flexDirection="column"
                    >
                      <Box
                        display={"flex"}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          style={{
                            color: "#000",
                            fontSize: "10px",
                            fontSize: "bold",
                            lineHeight: "14px",
                            paddingBottom: "5px",
                          }}
                          variant="body1"
                        >
                          {userId.firstName + " " + userId.lastName}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "10px",
                            color: "#abacb5",
                            lineHeight: "14px",
                            paddingBottom: "5px",
                          }}
                        >
                          {formatTime(new Date(comment.createdAt))}
                        </Typography>
                      </Box>
                      <Typography
                        style={{
                          color: "blue",
                          fontSize: "12px",
                          lineHeight: "14px",
                          paddingBottom: "5px",
                        }}
                      >
                        Professional Student
                      </Typography>
                      <Typography
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          lineHeight: "14px",
                          paddingBottom: "5px",
                        }}
                      >
                        {comment.Comment}
                      </Typography>
                      <Box
                        display={"flex"}
                        alignItems="center"
                        style={{ fontSize: "10px", color: "#abacb5" }}
                      >
                        <Typography
                          style={{
                            marginRight: "2px",
                            fontSize: "10px",
                            lineHeight: "14px",
                          }}
                        >
                          {comment.like} likes |
                        </Typography>
                        <Typography className="commentActions">
                          <FavoriteIcon
                            fontSize="12px"
                            style={{ position: "relative", top: "1.5px" }}
                          />{" "}
                          Like |
                        </Typography>
                        <Typography className="commentActions">
                          <EditIcon
                            fontSize="12px"
                            style={{ position: "relative", top: "1.5px" }}
                          />{" "}
                          Edit |
                        </Typography>

                        <Typography className="commentActions">
                          <DeleteIcon
                            fontSize="12px"
                            style={{ position: "relative", top: "1.5px" }}
                          />{" "}
                          Delete
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </>
        )}
      </Grid>
    </>
  );
};

export default PostCard;
