import React from 'react';

import {Button} from 'components/Button';
import styles from './styles.module.scss';
import {useComment} from 'contexts/comment/useComment';

const Reactions = () => {
  const {
    increaseButton,
    decreaseButton,
    comment: {score},
  } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button
        aria-labelledby='Positive reaction button'
        onClick={increaseButton}
      >
        <img src='./images/icon-plus.svg' alt='icon-plus' aria-hidden='true' />
      </Button>
      <p>{score}</p>
      <Button
        aria-labelledby='Negative reaction button'
        onClick={score > 0 ? decreaseButton : undefined}
      >
        <img src='./images/icon-minus.svg' alt='icon-plus' aria-hidden='true' />
      </Button>
    </div>
  );
};

export {Reactions};
