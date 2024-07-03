import { Dayjs } from 'dayjs';
interface HeaderProps {
    curMonth: Dayjs;
    preMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}
declare function Header(props: HeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;
