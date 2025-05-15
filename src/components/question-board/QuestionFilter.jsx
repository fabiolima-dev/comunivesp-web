function QuestionFilter({ filter, setFilter }) {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search questions..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
export default QuestionFilter;
