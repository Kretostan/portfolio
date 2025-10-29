import {motion} from "framer-motion";

interface FormInputFieldProps {
  children: React.ReactNode;
  className?: string;
  isValid: boolean | undefined;
  type?: string;
  name?: string;
  placeholder?: string;
}

const FormInput = ({ children, isValid, type, name, placeholder, className }: FormInputFieldProps) => {
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
    <motion.input
      whileFocus={{
        boxShadow: `0 2px 10px 1px ${isValid ? "var(--error-color)" : "var(--accent-color-1)"}`
      }}
      animate={{
        borderColor: isValid ? "var(--error-color)" : "var(--accent-color-1)",
        backgroundColor: isValid ? "var(--error-background)" : "var(--background-content)",
        boxShadow: "none"
      }}
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-3 rounded-lg outline-none border-2"
    />
  </div>;
};

export default FormInput;
