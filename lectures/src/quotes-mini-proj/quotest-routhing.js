import { Routes, Route } from "react-router";
import AddQuote from "./add-quote";
import QuotesList from "./QuotesList";

function QuotesRouter() {
  return (
    <div>
      <Routes>
        <Route path="/welcome" element={<QuotesList></QuotesList>}></Route>
        <Route path="/add-quote" element={<AddQuote></AddQuote>}></Route>
        <Route path="/all-quotes" element={<QuotesList></QuotesList>}></Route>
        <Route path="/detailed/:anything" element={<div>Detailed</div>}></Route>
      </Routes>
    </div>
  );
}

export default QuotesRouter;
