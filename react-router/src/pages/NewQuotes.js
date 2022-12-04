import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoteHandler = (data) => {
    console.log(data);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
