export const ADD_NOTE = 'ADD_NOTE';

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}