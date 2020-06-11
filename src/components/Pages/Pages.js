import React, {Component} from 'react';
import {ButtonToggle, Card, CardBody, CardImg, CardText, CardTitle,} from "reactstrap";
import './pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from "axios";
import {Link, NavLink} from "react-router-dom";


class Pages extends Component {
    state = {
        title: "",
        description: "",
        image: "",
    };

    componentDidMount() {
        axios.get('https://newsapp-95ffc.firebaseio.com/News.json').then(response => {
            const data = response.data;
            this.setState({ title: data.Title, description: data.Description, image: data.Img})
        })
    }

    render() {
        return (
                <div className="container">
                        <Card className="card" >
                            <CardImg bottom src={this.state.image} alt="Card image cap" className="Image" />
                            <CardBody>
                                <CardTitle>{this.state.title}</CardTitle>
                                <CardText>{this.state.description}</CardText>
                            </CardBody>


                            <Link to="/fullpage"><button>More</button></Link>


                        </Card>
                </div>

        );
    }
}

export default Pages;