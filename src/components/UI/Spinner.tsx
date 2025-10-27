const Spinner = ({ content }: { content: string }) => {
  return <div className="flex flex-col justify-center items-center gap-6">
    <p>Loading {content}...</p>
    <div className="h-12 w-12 spinner border-5 border-t-accent-theme-2 border-b-accent-theme-2 border-l-transparent border-r-transparent rounded-full animate-spin">
    </div>
  </div>;
}

export default Spinner;
