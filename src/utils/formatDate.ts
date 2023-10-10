import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDateInHours = (date: string) => {
  const newHour = parseISO(date);
  return format(newHour, 'hh:mm a', { locale: ptBR });
};
