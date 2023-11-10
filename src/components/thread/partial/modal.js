import React, { forwardRef } from 'react';
import { ThreadDeTail as ModalBody } from './modalBody';

const ModalThread = ({ threadId, isOpen = false, onClose }, ref) => {
  return (
    <dialog ref={ref} id="my_modal_3" className="modal" open={isOpen} onClose={onClose}>
      <div className="modal-box h-screen w-11/12 max-w-5xl bg-base-300">
        <form method="dialog">
          <button className="btn btn-ghost btn-sm absolute right-2 top-2 text-2xl">✕</button>
        </form>
        <ModalBody threadId={threadId} isOpen={isOpen} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default forwardRef(ModalThread);
