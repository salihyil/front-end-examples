import {createContext, useContext, useMemo, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const commentContext = createContext();

export const CommentContextProvider = ({children, data}) => {
  const [isReplying, setReplying] = useState(false);
  const [comment, setComment] = useState(data?.comment);
  const [isEditting, setEditting] = useState(false);

  const textareaRef = useRef(null);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onDelete = () => {
    setComment(null);
  };

  const onEdit = () => {
    setEditting(!isEditting);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };

  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: uuidv4(),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    onReply();
  };

  const increaseButton = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const decreaseButton = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      comment,
      currentUser: data?.currentUser,
      isReplying,
      isEditting,
      onReply,
      onDelete,
      onEdit,
      textareaRef,
      onUpdate,
      onNewReply,
      increaseButton,
      decreaseButton,
    }),
    [isReplying, comment, isEditting]
  );

  return (
    <commentContext.Provider value={contextData}>
      {children}
    </commentContext.Provider>
  );
};

/* Her componente gidip useContext() yazmak yerine bir hook */
export function useComment() {
  const context = useContext(commentContext);

  if (!context) {
    throw new Error('There is no Comment Context Provider, first import it.');
  }

  return context;
}
