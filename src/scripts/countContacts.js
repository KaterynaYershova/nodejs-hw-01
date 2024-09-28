import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Total contacts: ${contacts.length}`);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  countContacts();
}
