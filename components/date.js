import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    console.log(1);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}