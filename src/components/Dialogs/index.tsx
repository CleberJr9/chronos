
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import type { ToastContentProps } from 'react-toastify';
import { Defaultbutton } from '../DefaultButton';
import styles from './style.module.css'

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <Defaultbutton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            className="buttonIconDelete"
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'         />
          <Defaultbutton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color='red'
            className="buttonIconDelete"
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'       />
        </div>
      </div>
    </>
  );
}