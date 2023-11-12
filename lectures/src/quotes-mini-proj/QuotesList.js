import { Button, List, Box } from "@mui/material";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import QuoteItem from "./QuotesItem";
import { useSelector } from "react-redux";
import React, { useMemo, useState } from "react";
import { quoteActions } from "./quotes-context";
const init_val = [
  { id: 1, author: "Petar", quote: "Da" },
  { id: 1, author: "Petar", quote: "Ne" },
];

function QuotesList(props) {
  var quotes = useSelector((state) => state.quotes.quotes);
  const [change, setChanged] = useState(true);
  function sortOnClick() {
    console.log(change);
    if (change) {
      quoteActions.sortUp();
    } else {
      quoteActions.sortDown();
    }
    setChanged(!change);
  }
  return (
    <div>
      <Box>
        <SortSharpIcon onClick={sortOnClick} />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {quotes.map((item) => (
            <QuoteItem
              key={item.id}
              id={item.id}
              author={item.author}
              quote={item.quote}
            ></QuoteItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default QuotesList;
{
  /*Ovde je problem 
to sto kada se udri ruta 
renderuje se ceo app ponovo 
pa bi mozda bilo zgodno iz baze da se povlace elementi :D
 */
}
