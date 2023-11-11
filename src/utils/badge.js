export const checkBadge = (type = '') => {
  console.log('this type', type);
  switch (type?.trim().toLowerCase()) {
    case 'question':
      return ' badge-accent ';

    case 'esports':
      return ' badge-primary ';

    case 'discussion':
      return ' badge-secondary ';

    case 'art':
      return ' badge-warning ';

    default:
      return ' badge-error ';
  }
};

export default checkBadge;
