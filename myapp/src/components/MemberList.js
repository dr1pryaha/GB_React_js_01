import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import React from "react";

export default function MemberList({ chatsList }) {
  return (
    <List>
      {chatsList.map(({ id, name, messages }) => (
        <React.Fragment key={id}>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/chats/${id}`}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                key={id}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {/* Ali Connors */}
                      {messages[messages.length - 1].author}
                    </Typography>
                    {` — ${messages[messages.length - 1].text}`}
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                  </>
                }
              />
            </ListItem>
          </Link>
          <Divider key={id} variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}
