import React, {Component} from 'react';
import  axios from "../../axios";
import './fullPage.css';

import {ButtonToggle} from "reactstrap";
import {Link} from "react-router-dom";

class FullPage extends Component {

    state = {
        title: "",
        description: "",
        image: "",
        data: " "
    };

    componentDidMount() {
        axios.get('/news.json').then(response => {
            const data = response.data;
            this.setState({data: data, title: data.Title, description: data.Description, image: data.Img})
        })
    }
    goBack() {
        this.props.history.goBack();
    }

    render() {
        const {  history } = this.props;
        return (
            <div>
                <h1>{this.state.title}</h1>

                <div className="btn-wrapper">
                    <ButtonToggle color="primary"  onClick={() => history.goBack()}>Back</ButtonToggle >
                    <Link to="/AddForm"><ButtonToggle color="danger">Edit</ButtonToggle></Link>
                </div>

            </div>
        );
    }
}

export default FullPage;