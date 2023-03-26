import {Comment} from 'components/Comment';
import {NewCommentEditor} from 'components/NewCommentEditor';
import {CommentContextProvider} from 'contexts/comment/useComment';
import {useState} from 'react';

import styles from './styles.module.scss';

const Conversation = ({comments: allComments, currentUser}) => {
  const [comments, setComments] = useState(allComments ?? []);

  const handleSendNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * 100),
        user: currentUser,
        score: 0,
        replies: [],
      },
    ]);
  };

  return (
    <div className={styles.conversationWrapper}>
      {comments.map((comment) => (
        <CommentContextProvider data={{comment, currentUser}} key={comment.id}>
          <Comment />
        </CommentContextProvider>
      ))}

      <CommentContextProvider>
        <NewCommentEditor
          image={currentUser.image.png}
          username={currentUser.username}
          onClick={handleSendNewComment}
        />
      </CommentContextProvider>
    </div>
  );
};

export {Conversation};
