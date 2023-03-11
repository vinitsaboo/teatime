import {useNavigate} from 'react-router-dom';
import styles from './index.module.scss';
import Button from './components/button';

function App() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    return navigate('/gameDashboard');
  };
  
  return (
        <section className={styles.homeWrapper}>
          <div className={styles.homeFlexBox}>
            <h1 className={`${styles.bannerHeads} ${styles.whiteHeaders}`}>Welcome to Bollywood Quiz Game</h1>
            <Button
              buttonType="btn-primary"
              text="start game"
              btnSize="btn-md"
              btnStyle="btn-rounded"
              onClick={handleButtonClick}
            />
          </div>
        </section>
  );
}

export default App;
