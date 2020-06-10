import React from 'react';
import { SVGMap, TN, Legend } from '../index';
import { Row, Col } from 'antd';
import { getLocationName, getLocationSelected } from '../utils';
import '../sass/map.scss';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.toolTip = React.createRef();
        this.toolTipState = React.createRef();
        this.toolTipWage = React.createRef();
        this.mapType = "none";
        this.state = {
            pointedLocation: null,
            focusedLocation: null,
            selectedLocation: null,
            selectedLocations: this.props.multiSelect ? new Set() : null,
            members: 0
        };

        this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
        this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
        this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);
        this.handleLocationClick = this.handleLocationClick.bind(this);
        this.handleLocationFocus = this.handleLocationFocus.bind(this);
        this.handleLocationBlur = this.handleLocationBlur.bind(this);
        this.isLocationSelected = this.isLocationSelected.bind(this);
    }

    componentDidMount() {
        this.mapType = this.getTypeOfMap(this.props);
    }

    handleLocationMouseOver(event) {
        const pointedLocation = getLocationName(event);
        let locations = this.props.data ? this.props.data.locations : [];
        let wage;
        locations.forEach(location => {
            if (location.name === pointedLocation) {
                wage = location.members;
                return;
            }
        });
        this.toolTipState.current.innerHTML = `<label>${pointedLocation}</label>`;
        this.toolTipWage.current.innerHTML = `Members : ${wage ? wage : 'N/A'}`;
    }

    handleLocationMouseOut() {
        this.toolTip.current.style.display = "none";
    }

    handleLocationMouseMove(event) {
        let toolTip = this.toolTip;
        toolTip.current.style.display = "block";
        toolTip.current.style.top = event.clientY - 80 + 'px';
        toolTip.current.style.left = event.clientX - 80 + 'px';

    }


    handleLocationClick(event) {
        const clickedLocation = getLocationName(event);
        const isSelected = getLocationSelected(event);

        let locations = this.props.data ? this.props.data.locations : [];
        let members;
        locations.forEach(location => {
            if (location.name === clickedLocation) {
                members = location.members;
                return;
            }
        });


        if (this.mapType === "checkbox") {
            this.setState(prevState => {
                let selectedLocations = new Set(prevState.selectedLocations);

                if (isSelected) {
                    selectedLocations.delete(clickedLocation);
                } else {
                    selectedLocations.add(clickedLocation);
                }
                return { ...prevState, selectedLocations };
            });
        }
        else {
            this.setState({ selectedLocation: clickedLocation, members: members });
        }
    }

    handleLocationFocus(event) {
        const focusedLocation = getLocationName(event);
        this.setState({ focusedLocation: focusedLocation });
    }

    handleLocationBlur() {
        this.setState({ focusedLocation: null });
    }

    getTypeOfMap = (data) => {
        if (data.selectable) {
            if (data.selectable && data.multiSelect) {
                return "checkbox";
            }
            return "radio";
        }
        return "none";
    }

    isLocationSelected(location) {
        if (this.mapType === "checkbox") {
            return this.state.selectedLocations.has(location.name);
        }
        else {
            console.log(this.state.selectedLocation, location.name);
            return this.state.selectedLocation === location.name;
        }
    }


    render() {
        return (
            <div id="mapOuterContainer" className="Map">
                <div className="mapContainer">
                    <Row type="flex">
                        <div style={{ paddingTop: '10px' }}>
                            <label className="legendLabel">Total Members</label>
                            <Legend data={this.props.data} />
                        </div>
                    </Row>
                    <Row>
                        <Col xs={23} sm={23} md={12} lg={12} xl={12} xxl={12}>
                            <SVGMap map={TN} data={this.props.data}
                                selectable={true}
                                type={this.mapType}
                                multiSelect={false}
                                onLocationMouseOver={this.handleLocationMouseOver}
                                onLocationMouseOut={this.handleLocationMouseOut}
                                onLocationMouseMove={this.handleLocationMouseMove}
                                onLocationBlur={this.onLocationBlur}
                                onLocationClick={this.handleLocationClick}
                                onLocationFocus={this.onLocationFocus}
                                isLocationSelected={this.isLocationSelected} />
                            <div ref={this.toolTip} className="map-tooltip" >
                                <label className="tooltip-state" ref={this.toolTipState}></label>
                                <label ref={this.toolTipWage}></label>
                                <div className="tooltip-arrow">
                                </div>
                            </div>
                        </Col>
                        <Col xs={23} sm={23} md={12} lg={12} xl={12} xxl={12}>
                            {this.state.selectedLocation && <div className="content">
                                <label className="title">{this.state.selectedLocation ? this.state.selectedLocation : ''}</label>
                                <Row>
                                    <Col className="field"> Total Voters : <label className="value">{2000000}</label></Col>
                                    <Col className="field"> Total Party Members : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Male Members : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Female Members : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Pending Requests : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Pending Requests : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Pending Requests : <label className="value">{this.state.members}</label></Col>
                                    <Col className="field"> Pending Requests : <label className="value">{this.state.members}</label></Col>

                                </Row>

                            </div>
                            }
                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}

export default Map;
