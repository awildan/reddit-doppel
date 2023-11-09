export const isClassicType = (type) => type === 'classic';
export const isCardType = (type) => type === 'card';
export const isCompactType = (type) => type === 'compact';

export const checkType = (type) => {
  return {
    isClassic: isClassicType(type),
    isCard: isCardType(type),
    isCompact: isCompactType(type),
  };
};
