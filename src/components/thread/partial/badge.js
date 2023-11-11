import React from 'react';

const Badge = ({ text, className = '' }) => {
  const checkBadge = (badgeType) => {
    switch (badgeType?.toLowerCase()) {
      case 'question':
        return 'badge-accent';

      case 'esports':
        return 'badge-primary';

      case 'discussion':
        return 'badge-secondary';

      case 'art':
        return 'badge-warning';

      default:
        return 'badge-error';
    }
  };

  return (
    <label className={`badge ${checkBadge(text)} font-normal capitalize ${className}`}>
      {text}
    </label>
  );
};

export default Badge;
