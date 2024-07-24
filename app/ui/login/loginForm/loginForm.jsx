'use client';

import { authenticate } from '@/app/lib/actions';
import styles from './loginForm.module.css';
import { useState } from 'react';

const LoginForm = () => {
    const [err, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target);
        const data = await authenticate(formData);
        if (data.error) {
            setError(data.error);
        } else {
            // Handle successful login, like redirecting or updating state
        }
    };

    return (
        <form onSubmit={handleLogin} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" required />
            <input type="password" placeholder="password" name="password" required />
            <button type="submit">Login</button>
            {err && <p>{err}</p>}
        </form>
    );
};

export default LoginForm;
