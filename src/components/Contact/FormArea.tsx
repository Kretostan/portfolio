import {motion} from "framer-motion";

interface FormAreaProps {
  children: React.ReactNode;
  isValid: boolean | undefined;
  name?: string;
  placeholder?: string;
  className?: string;
}

const FormArea = ({ children, isValid, name, placeholder, className }: FormAreaProps) => {
  return <div className={`flex flex-col gap-3 py-2 ${className}`}>
    <motion.label
      animate={{
        color: isValid ? "var(--error-label)" : "var(--accent-color-1)"
      }}
      id={name}
      htmlFor={name}
      className={isValid ? "text-error-label-color" : "text-accent-theme-1"}
    >
      {children}:
    </motion.label>
    <motion.textarea
      whileFocus={{
        boxShadow: `0 2px 10px 1px ${isValid ? "var(--error-color)" : "var(--accent-color-1)"}`
      }}
      animate={{
        borderColor: isValid ? "var(--error-color)" : "var(--accent-color-1)",
        backgroundColor: isValid ? "var(--error-background)" : "var(--background-content)",
        boxShadow: "none"
      }}
      name={name}
      placeholder={placeholder}
      className="p-3 rounded-lg outline-none border-2"
    />
  </div>;
};

export default FormArea;
