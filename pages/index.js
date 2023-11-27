// src/pages/Home.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Redirige a la página de la tabla después del inicio de sesión exitoso
      window.location.href = '/table';
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de inicio de sesión" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Iniciar Sesión</h1>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Iniciar Sesión</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </main>
    </>
  );
}
