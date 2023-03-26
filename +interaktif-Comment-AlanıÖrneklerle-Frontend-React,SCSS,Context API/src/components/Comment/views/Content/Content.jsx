import {Button} from 'components/Button';
import {TextArea} from 'components/TextArea';
import {useComment} from 'contexts/comment/useComment';
import {useState} from 'react';

import styles from './styles.module.scss';

const Content = () => {
  const {
    isEditting,
    onUpdate,
    comment: {content, replyingTo},
  } = useComment();

  const [comment, setComment] = useState(content);

  const handletCommentChange = ({target}) => {
    setComment(target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
  };

  return (
    <div>
      {isEditting ? (
        <>
          <TextArea onChange={handletCommentChange} value={comment} />
          <Button
            variant='primary'
            className={styles.updateButton}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </>
      ) : (
        <div className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}
          {content}
        </div>
      )}
    </div>
  );
};

export {Content};
