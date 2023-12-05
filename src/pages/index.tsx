import { useRouter } from 'next/router';

import styles from './index.module.css';

const Home = () => {
  const router = useRouter();

  const handleChange = async () => {
    await router.push('/armap');
  };
  return (
    <div className={styles.container}>
      <button onClick={handleChange}>ARMAP</button>
    </div>
  );
};

export default Home;
