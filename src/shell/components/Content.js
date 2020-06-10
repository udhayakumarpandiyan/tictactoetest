import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../modules/home/containers/HomePage';
import Investments from '../../modules/investments/containers/Investments';
//import Members from '../../modules/members/containers/Members';
import Reports from '../../modules/reports/containers/Reports';
import Sales from '../../modules/sales/containers/Sales';
import StockDetails from '../../modules/stock_details/containers/StockDetails';
// import Template from '../../ecard/components/Template';
import Editors from '../../modules/editors/containers/Editors';

import RoutePath from '../../route';
import Dealers from '../../modules/dealers/containers/Dealers';

const MainContent = (props) => {


    return (<div className={props.isSidebarCollapsed ? "content_collapsed" : "content"}>
        <Switch>
            <Redirect exact from='/' to={RoutePath.SALES} />
            <Route exact path={RoutePath.INVESTMENTS} component={Investments} />
            <Route exact path={RoutePath.SALES} component={Sales} />
            <Route exact path={RoutePath.DEALERS} component={Dealers} />
            <Route exact path={RoutePath.STOCK_DETAILS} component={StockDetails} />
            <Route exact path={RoutePath.REPORTS} component={Reports} />
            <Route exact path={RoutePath.SETTINGS} component={Investments} />

            {/*<Route exact path={RoutePath.REPORTS} component={Reports} />
            
            <Route exact path={RoutePath.TEMPLATE} component={Template} /> */}
        </Switch>

    </div>)
}


export default MainContent;

