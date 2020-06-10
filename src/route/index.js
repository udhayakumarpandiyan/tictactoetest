import history from './history';


const HOME_PAGE = `/`;
const ADMIN = '/admin';
const INVESTMENTS = "/investments";
const DEALERS = "/dealers";
const SALES = "/sales";
const STOCK_DETAILS = "/stock_details";
const REPORTS = "/reports";
const SETTINGS = "/settings";

//const TEMPLATE = "/ecard/template";


const redirect = (path, state) => {
    history.push(path, state);
}

export default {
    redirect: redirect,
    HOME_PAGE: HOME_PAGE,
    ADMIN: ADMIN,
    INVESTMENTS: INVESTMENTS,
    DEALERS: DEALERS,
    SALES: SALES,
    STOCK_DETAILS:STOCK_DETAILS,
    REPORTS: REPORTS,
    SETTINGS: SETTINGS

}

