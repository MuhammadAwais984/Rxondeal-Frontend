"use client";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {
  return (
    <div
      className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-xl text-white animate-slide-in
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white/80 hover:text-white text-lg"
      >
        ×
      </button>
    </div>
  );
}
