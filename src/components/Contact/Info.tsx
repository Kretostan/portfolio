interface InfoProps {
  children: React.ReactNode;
  title: string;
}

const Info = ({ children, title }: InfoProps) => {
  return <div className="flex flex-col gap-3 border-2 border-accent-theme-1 rounded-xl py-8 w-full md:w-1/2 lg:w-1/3 bg-bg-theme-2">
    <h4 className="text-accent-theme-1 font-bold text-lg">{title}</h4>
    <p>{children}</p>
  </div>;
}

export default Info;
