"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import InvestmentModal from "@/components/InvestmentModal";
import { useModal } from "@/components/ModalContext";

/**
 * A button that opens the site's enquiry form (InvestmentModal) in place.
 *
 * Guide pages don't mount the global ModalWrapper, so they don't get the site-wide
 * five-second auto-popup. This keeps it that way: the form opens only when a reader
 * clicks, and the open state is local to the button. The modal is portalled to <body>
 * so a clipped or transformed parent (a CTA card, the calculator) can't trap it.
 */
export default function LeadModalButton({ className, children }) {
  const [open, setOpen] = useState(false);
  const { setIsLeadSubmitted } = useModal();

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open &&
        createPortal(
          <InvestmentModal isOpen onClose={() => setOpen(false)} setIsSubmitted={setIsLeadSubmitted} />,
          document.body
        )}
    </>
  );
}
