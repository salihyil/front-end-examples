import {Button} from 'components/Button';
import {useComment} from 'contexts/comment/useComment';
import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
  const {
    onReply,
    onDelete,
    onEdit,
    currentUser,
    comment: {user, createdAt},
  } = useComment();

  const ownedByCurrentUser = currentUser.username === user.username;

  return (
    <div className={styles.commentHeader}>
      <div className={styles.imageWrapper}>
        <img src={user.image.png} />
      </div>
      <p className={styles.username}>{user.username}</p>
      {ownedByCurrentUser && <span className={styles.ownIndicator}>you</span>}
      <p className={styles.createdAt}>{createdAt}</p>
      <div className={styles.actionButtons}>
        {ownedByCurrentUser ? (
          <>
            <Button variant='warning' onClick={onDelete}>
              <img
                src='./images/icon-delete.svg'
                alt='icon-delete'
                aria-hidden
              />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src='./images/icon-edit.svg' alt='icon-edit' aria-hidden />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src='./images/icon-reply.svg' alt='icon-reply' aria-hidden />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export {Header};
