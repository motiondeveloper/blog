import React from 'react';

const Emoji = ({ name, emoji }: { name: string; emoji: string }) => {
  return (
    <span role="img" aria-label={name}>
      {emoji}
    </span>
  );
};

export default Emoji;
