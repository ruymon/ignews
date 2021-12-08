import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

export function SigninButton() {
    const { data: session } = useSession();

    return session ? (
        <button 
            type="button"
            className={styles.signinButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04D361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
            {/* TODO: Add red color to signout button */}
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signinButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    );
  }