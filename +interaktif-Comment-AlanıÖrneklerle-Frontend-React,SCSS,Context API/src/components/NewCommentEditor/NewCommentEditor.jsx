import {Button} from 'components/Button';
import {TextArea} from 'components/TextArea';

import {useState} from 'react';

import styles from './styles.module.scss';

const NewCommentEditor = ({isReply = false, image, username, onClick}) => {
  const [comment, newComment] = useState('');

  const handleCommentChange = ({target}) => {
    newComment(target.value);
  };

  const handleClick = () => {
    onClick(comment);
    newComment('');
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={username} />
      </div>
      <TextArea
        onChange={handleCommentChange}
        value={comment}
        placeholder='Add a comment...'
      />
      <Button onClick={handleClick} variant='primary'>
        {isReply ? 'Reply' : 'Send'}
      </Button>
    </div>
  );
};

export {NewCommentEditor};
