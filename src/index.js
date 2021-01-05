import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Index extends React.Component {
    state = {cellinput: "", todos: [], comment: "Ingresar Todo:", keyvalue: 1}

    componentDidMount() {

    }

    async requestTrumpData() {
        let data = await axios.get("https://api.tronalddump.io/random/quote")
        return data.data.value
        siii
    }


    handleChangeText = (e) => {
        this.setState({cellinput: e.target.value})
    }
    handleChangeSubmit = async (e) => {
        e.preventDefault();
        let comentary = await this.requestTrumpData()
        if (this.state.cellinput !== "") {
            this.setState({
                cellinput: "",
                todos: [...this.state.todos,
                    {key: this.state.keyvalue, text: this.state.cellinput}],
                keyvalue: this.state.keyvalue + 1
                , comment: comentary
            })
        }
    }
    removeTodo = (e) => {
        this.setState(
            {todos: this.state.todos.filter(value => value.key.toString() !== e.target.value)}
        )/*this.state.Todos.filter(value => value.key !== e.target.value)*/

    }

    render() {
        return (
            <div>
                <h4>ToDos List!</h4>
                <h6>{this.state.comment}</h6>
                <form action=" " onSubmit={this.handleChangeSubmit}>
                    <input type="text" onChange={this.handleChangeText} value={this.state.cellinput}/>
                    <div>
                        <input type="button" value="Agregar" onClick={this.handleChangeSubmit}/>
                    </div>
                </form>
                {this.state.todos.map(
                    (val) => {
                        return (
                            <Todos text={val.text} checked={false} removeTodo={this.removeTodo} key={val.key.toString()}
                                   id={val.key.toString()}/>
                        );
                    }
                )}
            </div>)

    }
}

class Todos extends React.Component {

    render() {
        return (
            <div key={this.props.id}>
                <input type="checkbox" value={this.props.id}/>
                {this.props.text}
                <input type="checkbox" onClick={this.props.removeTodo} value={this.props.id}/>
            </div>
        )
    }
}


ReactDOM.render(<Index/>, document.querySelector("#root"));
