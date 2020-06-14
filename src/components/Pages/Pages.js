import React, {Component} from 'react';
import { ButtonToggle, Card, CardBody, CardImg, CardText, CardTitle,} from "reactstrap";
import './pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from "../../axios";
import {Link} from "react-router-dom";



class Pages extends Component {
    state = {
        title: "",
        description: "",
        image: "",
        data: " "
    };

    componentDidMount() {
        axios.get('/news.json').then(response => {
            const data = response.data;
            this.setState({data: data,  });
            console.log(response);
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
                            <Link to="/fullpage"><ButtonToggle className="button"  color="primary">More</ButtonToggle ></Link>
                        </Card>
                </div>

        );
    }
}

export default Pages;