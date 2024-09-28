import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  getAllContacts();
}
