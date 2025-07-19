 const getInitials = name =>
  name
    .trim()
    .split(/\s+/)
    .map(w => w[0].toUpperCase())
    .slice(0, 2)
    .join('');
export { getInitials };