import React, {Component} from 'react';
import axios from "axios";


class FullPage extends Component {

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
    goBack() {
        this.props.history.goBack();
    }
    render() {
        const {  history } = this.props;
        return (
            <div>
                <h1>{this.state.title}</h1>

                <button onClick={() => history.goBack()}>back</button>
            </div>
        );
    }
}

export default FullPage;