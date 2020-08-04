import React, {Component} from 'react';
import  axios from "../../../axios";
import {ButtonToggle} from "reactstrap";
import {Link} from "react-router-dom";
import News from "./News";
import './fullPage.css';
class FullPage extends Component {

    state = {
        title: "",
        description: "",
        image: "",
    };

     componentDidMount ()  {
         axios.get(`news/${this.props.match.params.id}.json`).then(response => {
            const data = response.data;
            this.setState({ data: data, title: response.data.Title, description: response.data.Description, image: response.data.Image})
        })
    };
    removeNews = async () => {
       await axios.delete(`news/${this.props.match.params.id}.json`).then(response =>{
            const data = response.data;
            this.setState({ data: data})
        })
    };
    goBack() {
        this.props.history.goBack();
    }

    render() {
        const {  history } = this.props;
        return (
            <div className="newsWrapper">
                {this.state.data ?  (<News image={this.state.image} title={this.state.title} description={this.state.description}/>) : <span>Deleted</span>}
                <div className="btn-wrapper">
                    <ButtonToggle color="primary"  onClick={() => history.goBack()}>Back</ButtonToggle >
                    <Link to="/AddForm"><ButtonToggle color="danger">Edit</ButtonToggle></Link>
                    <ButtonToggle color="danger" onClick={this.removeNews}>Delete</ButtonToggle>
                </div>

            </div>
        );
    }
}

export default FullPage;