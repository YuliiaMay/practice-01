import { format } from 'date-fns';
export function formatTransactions(date) {
  return format(new Date(date), 'Pp', { addSuffix: true });
}
