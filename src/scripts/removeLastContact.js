import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await writeContacts(contacts);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  removeLastContact();
}
