import { Stack } from 'grommet';
import styles from  './Card.module.css';

function Card({children, back}) {
  return (
    <div className={styles.Card}> 
      <Stack>
        <div className={styles.front}>
          {children}
        </div>
        
        <div className={styles.back}>
          {back}
        </div>
      </Stack> 
    </div>
  );
}

export default Card;