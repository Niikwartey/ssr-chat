import { Send } from 'grommet-icons';
import useInputState from '../../hooks/useInputState';
import styles from './InputBox.module.css';

function InputBox({submit}) {
  const { value, setValue, resetValue, charactersLeft } = useInputState('', 140);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(value) {
      submit(value);
      resetValue();
    }
  }

  return (
    <div className={styles.InputBox}>
      <div className={styles.charactersLeft}>
        {charactersLeft}
      </div>
      
      <form className={styles.textForm} onSubmit={onSubmit}>
        <input 
          className={styles.textBox}
          type="text"
          value={value}
          placeholder="what's happening"
          onChange={setValue}
        />
      </form>
      
      <div>
        <Send className={styles.submit} onClick={onSubmit} />
      </div>
    </div>
  );
}

export default InputBox;