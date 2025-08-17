import { type ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

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
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center gap-10 py-6 px-10 border-1 rounded-lg"
    >
      {children}
    </dialog>,
    modalRoot,
  );
};

export default Modal;
