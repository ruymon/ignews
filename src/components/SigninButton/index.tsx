import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SigninButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button 
            type="button"
            className={styles.signinButton}
        >
            <FaGithub color="#04D361" />
            Ruy Monteiro
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signinButton}
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    );
  }