import * as React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { IPost } from "../../store/models/postinterface";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

export const PostsList = () => {
  const posts = useAppSelector((state) => state.posts);
  const renderedPosts = posts.map((post: IPost) => (
    <>
      <Card style={{ marginTop: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={post.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.user} -&nbsp;
                    </Typography>
                    {post.content}
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>
        </CardContent>
      </Card>
    </>
  ));
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2">All Posts</Typography>
        <Link to="/create">
          <Button variant="outlined">Add Post</Button>
        </Link>
        <List
          sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
        >
          {renderedPosts}
        </List>
      </Box>
    </Container>
  );
};
