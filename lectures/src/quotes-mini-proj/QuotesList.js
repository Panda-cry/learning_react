import { Button, List, Box } from "@mui/material";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import QuoteItem from "./QuotesItem";
import { useSelector } from "react-redux";
import React, { useMemo } from "react";
const init_val = [
  { id: 1, author: "Petar", quote: "Da" },
  { id: 1, author: "Petar", quote: "Ne" },
];

function QuotesList(props) {
  function sortOnClick() {
    console.log("sorted");
  }
  const quotes = useMemo(() => {
    // Unutar useMemo koristite useSelector
    const selectedQuotes = useSelector((state) => state.quotes.quotes);
    return selectedQuotes;
  }, []);
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
