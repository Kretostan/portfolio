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
      <div className="fixed inset-0 bg-black/50 z-40"></div>
      <motion.dialog
        ref={dialogRef}
        onClose={onClose}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center gap-10 py-6 px-10 border-1 rounded-lg z-50"
      >
        {children}
      </motion.dialog>
    </>,
    modalRoot,
  );
};

export default Modal;
