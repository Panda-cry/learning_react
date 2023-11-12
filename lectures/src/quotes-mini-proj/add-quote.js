import { Button, Box, FormControl, TextField, Stack } from "@mui/material";
import { useState } from "react";
import { quoteActions } from "./quotes-context";
import { useDispatch, useSelector } from "react-redux";

function AddQuote() {
  const [author, setAuthor] = useState("");
  const [authorIsValid, setAuthorIsValid] = useState(false);
  const [quote, setQuote] = useState("");
  const [quoteIsValid, setQuoteIsValid] = useState(false);
  const dispatch = useDispatch();
  function formSubmitHandler(event) {
    event.preventDefault();
    if (authorIsValid && quoteIsValid) {
      let id = Math.floor(Math.random() * 100);
      dispatch(quoteActions.addQuote({ id, author, quote }));
    }
  }

  function authorOnChangeHandler(event) {
    let author = event.target.value.trim();
    setAuthor(author);
  }

  function quoteOnChangeHandler(event) {
    let quote = event.target.value.trim();
    setQuote(quote);
  }

  function onBlurAuthorHandler(event) {
    let author = event.target.value.trim();
    if (author.length === 0) {
      setAuthorIsValid(false);
      return;
    }
    setAuthorIsValid(true);
    setAuthor(author);
  }
  function onBlurQuoteHandler(event) {
    let quote = event.target.value.trim();
    if (quote.length === 0) {
      setQuoteIsValid(false);
      return;
    }
    setQuoteIsValid(true);
    setQuote(quote);
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
            onBlur={onBlurAuthorHandler}
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
            helperText={!quoteIsValid ? "Incorrect author format" : ""}
            onChange={quoteOnChangeHandler}
            onBlur={onBlurQuoteHandler}
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
