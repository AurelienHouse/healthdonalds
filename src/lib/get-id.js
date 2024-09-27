import { nanoid } from 'nanoid';

export const getId = (name) => {
  const sanitized = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 10);
  const randomId = nanoid(6); // Augmenté à 6 caractères pour plus d'unicité
  return `${sanitized}-${randomId}`;
};