import { type ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type ModalType = {
  children: ReactNode;
  open: boolean;
  onClose: () => void | null;
};

const Modal = ({ children, open, onClose }: ModalType) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalRoot = document.getElementById("modal");

  if (!open) return null;

  if (!modalRoot) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/65 z-40"></div>
      <motion.dialog
        ref={dialogRef}
        onClose={onClose}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center gap-8 py-8 px-12 border-1 border-accent-theme-2 rounded-lg z-50"
      >
        {children}
      </motion.dialog>
    </>,
    modalRoot,
  );
};

export default Modal;
