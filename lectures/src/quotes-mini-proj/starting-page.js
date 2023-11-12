import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Router } from "react-router";
import { Link } from "react-router-dom";

import QuotesList from "./QuotesList";
import AddQuote from "./add-quote";

function StartPageQoutes(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" b>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="welcome"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Great Quotes
              </Link>
            </Typography>
            <Button color="inherit">
              <Link
                to="all-quotes"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                All Quotes
              </Link>
            </Button>
            <Button color="inherit">
              {" "}
              <Link
                to="add-quote"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Add Quote
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default StartPageQoutes;

{
  /*
    Kada se radi rutiranje onda se renderuje izgleda sve ponovo i postavlja se vrednost na []
    i onda uvek imam praznu listu :D
    
    renderuje se ponovo jer sam koristio href
    ako se koristi Link koji router daje onda se ne radi refres strane nego samo render komponente
    i sve ostaje sacuvano 

    
    
    */
}
