import Link from 'next/link';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div>Hello! Im Hotaka Kanazawa.</div>
      <nav>
        <button>
          <Link href="/armap">ARMAP-connect</Link>
        </button>
        <button>asucoe</button>
      </nav>
    </div>
  );
};

export default Home;
