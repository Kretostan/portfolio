import { type ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6 text-3xl sm:text-4xl md:text-5xl font-header">
      {children}
    </h1>
  );
};

export default Title;
