import React, {Component} from 'react';
import {  Card, CardBody, CardImg, CardText, CardTitle,} from "reactstrap";
import './mainScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from '../../../axios'
import {Link} from "react-router-dom";



class MainScreen extends Component {
    state = {
       news: []

    };
    componentDidMount() {
        axios.get('news.json').then(response => {
            const newsData = [];
            for (let key in response.data){
                newsData.push({...response.data[key], id: key});
            }
            this.setState({news: newsData});
        })
    }
    render() {
        const news = this.state.news.reverse();
        const newsList = news.length ? (
            news.map(news =>{
                return (
                    <Card className="card"  key={news.id}>
                        <Link className="link" to={`/news/${news.id}`}>
                                <CardImg bottom src={news.Image} alt="Card image cap" className="Image" />
                                <CardBody>
                                    <CardTitle className="card_title">{news.Title}</CardTitle>
                                    <CardText className="card_text">{news.Description}</CardText>
                                </CardBody>
                    </Link>
                    </Card>

                )
            })
            ) : (
                <div>no news</div>
        );
        return (
                <div className="container">
                    {newsList}
                </div>

        );
    }
}

export default MainScreen;