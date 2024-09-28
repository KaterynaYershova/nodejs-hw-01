import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  removeAllContacts();
}
