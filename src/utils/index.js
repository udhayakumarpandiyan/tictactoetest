// method to get today's date in YYYY/MM/DD format
export const getCurrentDate = (symbol = '-', format = "YYYY/MM/DD") => {
    let date = new Date();
    let month = date.getMonth();
    month = month + 1;
    month = month < 9 ? '0' + month : month;
    let localDate = date.getDate();
    localDate = localDate < 10 ? '0' + localDate : localDate;
    if (format === "YYYY/MM/DD" || format === "YY/MM/DD") {
        return `${date.getFullYear()} ${symbol} ${month} ${symbol}  ${localDate}`;
    }
    else if (format === "MM/DD/YYYY" || format === "MM/DD/YY") {
        return `${month} ${symbol}  ${localDate} ${symbol} ${date.getFullYear()}`;
    }
    else {
        return `${localDate} ${symbol} ${month} ${symbol}  ${date.getFullYear()}`;
    }


}