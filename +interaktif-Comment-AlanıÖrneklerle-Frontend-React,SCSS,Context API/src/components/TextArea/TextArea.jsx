import {useComment} from 'contexts/comment/useComment';

import styles from './styles.module.scss';

const TextArea = ({...props}) => {
  const {textareaRef} = useComment();

  return (
    <textarea
      className={styles.textarea}
      rows='4'
      {...props}
      ref={textareaRef}
    ></textarea>
  );
};

export {TextArea};
