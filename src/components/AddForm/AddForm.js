import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './addForm.css'
import axios from '../../axios'
class AddForm extends Component {
    state = {
        title: " ",
        description: " ",
        image: " "
};
    valueChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };
    addNews = event => {
      event.preventDefault();
      const news = {
          news:  {
              Title: this.state.title,
              Description: this.state.description,
              Image: this.state.image,
          }
      };
      axios.put(".json", news).then(res=>{
          console.log(res)
      });
    };
    render() {
        const {  history } = this.props;
        return (

            <div className="formWrapper">
                <div><h1>Admin Panel</h1></div>
                <Form className="addForm">
                    <FormGroup>
                        <Label for="exampleEmail">Title</Label>
                        <Input onChange={this.valueChange} value={this.state.title} type="text" name="title"  placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Description</Label>
                        <Input onChange={this.valueChange} value={this.state.description} name="description"  placeholder="Description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Image</Label>
                        <Input onChange={this.valueChange} value={this.state.image} name="image"  placeholder="Image" />
                    </FormGroup>
                    <div className="btn-wrapper_admin">
                        <Button onClick={(event)=>this.addNews(event)}>Submit</Button>
                        <Button onClick={() => history.goBack()} >Back</Button>
                    </div>

                </Form>
            </div>
        );
    }
}

export default AddForm;