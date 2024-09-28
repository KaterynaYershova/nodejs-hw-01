import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  addOneContact();
}
