import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Seo", text: "Learning" },
  { id: "q2", author: "Jae", text: "Eating" },
  { id: "q3", author: "Hee", text: "Sleeping" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
