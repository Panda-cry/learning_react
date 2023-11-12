import { Button, Box, FormControl, TextField, Stack } from "@mui/material";
import { useState } from "react";
import { quoteActions } from "./quotes-context";
import { useDispatch, useSelector } from "react-redux";
// ... (imports remain the same)

function AddQuote() {
  const [author, setAuthor] = useState("");
  const [authorIsValid, setAuthorIsValid] = useState(true); // Default to true
  const [quote, setQuote] = useState("");
  const [quoteIsValid, setQuoteIsValid] = useState(true); // Default to true
  const dispatch = useDispatch();

  function formSubmitHandler(event) {
    event.preventDefault();
    if (author.trim() !== "" && quote.trim() !== "") {
      let id = Math.floor(Math.random() * 100);
      dispatch(quoteActions.addQuote({ id, author, quote }));
      setAuthor("");
      setQuote("");
    }
  }

  function authorOnChangeHandler(event) {
    let author = event.target.value.trim();
    setAuthor(event.target.value);
    setAuthorIsValid(author.length > 0); // Validate on change
  }

  function quoteOnChangeHandler(event) {
    let quote = event.target.value.trim();
    setQuote(event.target.value);
    setQuoteIsValid(quote.length > 0); // Validate on change
  }
  return (
    <div>
      <Stack
        maxWidth={400}
        component="form"
        spacing={2}
        margin={5}
        alignItems="center"
      >
        <FormControl fullWidth>
          <TextField
            error={!authorIsValid}
            label="Author"
            variant="filled"
            value={author}
            rows={3}
            color=""
            onChange={authorOnChangeHandler}
            helperText={!authorIsValid ? "Incorrect author format" : ""}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={!quoteIsValid}
            value={quote}
            multiline
            rows={4}
            label="Quote"
            variant="filled"
            color=""
            helperText={!quoteIsValid ? "Incorrect quote format" : ""}
            onChange={quoteOnChangeHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <Button type="submit" onClick={formSubmitHandler}>
            Add Quote
          </Button>
        </FormControl>
      </Stack>
    </div>
  );
}

export default AddQuote;
