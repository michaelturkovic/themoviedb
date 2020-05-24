import React, { FC } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  visible,
  children,
  onClose,
}): JSX.Element => {
  const modal = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect((): any => {
    modal?.appendChild(el);

    return () => modal?.removeChild(el);
  }, [el, modal]);

  useEffect(() => {
    if (visible) document.body.classList.add('scroll-lock');
    else document.body.classList.remove('scroll-lock');
  }, [visible]);

  const content = visible && (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal__body'>
          <button
            className='modal__close'
            type='button'
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, el);
};
