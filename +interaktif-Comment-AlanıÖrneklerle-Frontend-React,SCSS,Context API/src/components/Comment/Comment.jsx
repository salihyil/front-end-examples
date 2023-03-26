import {useEffect} from 'react';

import {Reactions} from './views/Reactions';
import {Header} from './views/Header';
import {Content} from './views/Content';

import styles from './styles.module.scss';
import {CommentContextProvider, useComment} from 'contexts/comment/useComment';

import {NewCommentEditor} from 'components/NewCommentEditor';

const Comment = () => {
  const {onNewReply, textareaRef, isReplying, currentUser, comment} =
    useComment();

  useEffect(() => {
    if (isReplying) {
      window.scrollTo({
        top: textareaRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [isReplying]);

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentBodyArea}>
          <Header />
          <Content />
        </div>
      </div>

      {/* recursive */}
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <CommentContextProvider
              data={{comment: reply, currentUser}}
              key={reply.id}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}

      {isReplying && (
        <NewCommentEditor
          onClick={onNewReply}
          isReply
          image={currentUser.image.png}
          username={currentUser.username}
        />
      )}
    </>
  );
};

export {Comment};
