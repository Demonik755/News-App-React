import React, {Component} from 'react';
import  axios from "../../../axios";
import './fullPage.css';

import {ButtonToggle} from "reactstrap";
import {Link} from "react-router-dom";
import News from "./News";

class FullPage extends Component {

    state = {
        title: "",
        description: "",
        image: "",
    };

    componentDidMount() {
        axios.get(`news/${this.props.match.params.id}.json`).then(response => {
          console.log(response);
            this.setState({title: response.data.Title, description: response.data.Description, image: response.data.Image})
        })
    }
    goBack() {
        this.props.history.goBack();
    }

    render() {
        console.log(this.state.posts);
        const {  history } = this.props;
        return (
            <div className="newsWrapper">
                <News image={this.state.image} title={this.state.title} description={this.state.description}/>
                <div className="btn-wrapper">
                    <ButtonToggle color="primary"  onClick={() => history.goBack()}>Back</ButtonToggle >
                    <Link to="/AddForm"><ButtonToggle color="danger">Edit</ButtonToggle></Link>
                </div>

            </div>
        );
    }
}

export default FullPage;