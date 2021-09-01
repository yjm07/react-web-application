import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        location.state ?? history.push("/");
    }

    render() {
        const { location } = this.props;
        return location.state
        ? <span>{location.state.title}</span>
        : null;
    }
}

export default Detail;