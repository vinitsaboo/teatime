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
            <h1 className={`${styles.primaryBanner}`}>Welcome to Tea Time Quiz Game</h1>
            <Button
              buttonType="btn-primary"
              text="Browse Games"
              btnSize="btn-lg"
              btnStyle="btn-rounded"
              onClick={handleButtonClick}
            />
          </div>
        </section>
  );
}

export default App;
