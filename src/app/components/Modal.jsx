"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-md mx-4 bg-[--primaryDark] text-[--primaryLight] rounded-xl p-6 custom-backdrop-blur-lg shadow-xl animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-[--clutchBlue-300] text-2xl hover:text-[--clutchBlue-500] transition-all"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
