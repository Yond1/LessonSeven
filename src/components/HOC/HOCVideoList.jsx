import { VideoList } from "../VideoList/VideoList";

export const HOCVideo = (props) => (Component) => {

    const dateLatter = (date) => ((Date.now() - Date.parse(date)) / 60000 / 60 / 24)

    const validateDate = (dateLatter) => {
        if (dateLatter < 2) {
            let minutes = (Math.floor(dateLatter * 24)).toString();
            let minutesLetter = (minutes[minutes.length - 1] < 5) ? `${minutes} часа назад` : `${minutes} часов назад`
            return minutesLetter
        }
        if (dateLatter > 1 && dateLatter < 30) {
            let days = (Math.floor(dateLatter / 30)).toString();
            let daysLetter = (days[days.length - 1] < 5) ? `${days} дня назад` : `${days} дней назад`
            return daysLetter
        }
        if (dateLatter > 30 && dateLatter < 365) {
            let month = (Math.floor(dateLatter / 30)).toString();
            let monthLetter = (month[month.length - 1] < 5) ? `${month} месяца назад` : `${month} месяцев назад`
            return monthLetter
        }
        if (dateLatter > 365) {
            let years = (Math.floor(dateLatter / 365)).toString();
            let yearsLetter = (years[years.length - 1] < 5) ? `${years} года назад` : `${years} лет назад`
            return yearsLetter
        }
    };

    const validProps = props.map((item) => {
        return {
            ...item,
            date: (validateDate(dateLatter(item.date)))
        }
    })

    return <Component list={validProps} />;
};


