import { useState, useEffect } from 'react';

export const useVote = (currentVote) => {
  const [vote, setVote] = useState(0);

  const isNotVoted = vote === currentVote;
  const isUpVoted = vote > currentVote;
  const isDownVoted = vote < currentVote;

  useEffect(() => {
    if (currentVote) {
      setVote(currentVote);
    }
  }, [currentVote]);

  const handleVote = (type) => {
    isNotVoted && setVote((v) => (type === 'up' ? v + 1 : v - 1));
    isUpVoted && setVote((v) => (type === 'up' ? v - 1 : v - 2));
    isDownVoted && setVote((v) => (type === 'up' ? v + 2 : v + 1));
  };

  const colorUpVoted = isUpVoted ? 'red' : '';
  const colorDownVoted = isDownVoted ? '#34D399' : '';

  return {
    vote,
    handleVote,
    colorUpVoted,
    colorDownVoted,
  };
};
