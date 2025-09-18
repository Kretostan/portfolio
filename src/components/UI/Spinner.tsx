const Spinner = ({ content = "content" }: { content?: string }) => {
  return (
    <div className="py-12 text-center">
      <div className="spinner"></div>
      <p>Loading {content}...</p>
    </div>
  );
};

export default Spinner;
