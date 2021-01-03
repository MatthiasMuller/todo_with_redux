import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
    state = {cellinput: " ", todos: [], comment: ""}

    componentDidMount() {
    }


    handleChangeText = (e) => {
        this.setState({cellinput: e.target.value})
    }
    handleChangeSubmit = (e) => {
        this.setState({
            cellinput: "",
            todos: [...this.state.todos,
                {key: this.state.todos.length, text: this.state.cellinput}]
        })
    }
    checkTodo=(e)=> {
        console.log(this)
        console.log(e.target.value.toString())
        this.setState(
            {todos: this.state.todos.filter(value => value.key !== e.target.value)}
        )/*this.state.Todos.filter(value => value.key !== e.target.value)*/

    }

    render() {

        return (
            <div>
                <h4>ToDo List!</h4>
                <input type="text" onChange={this.handleChangeText} value={this.state.cellinput}/>
                <div>
                    <input type="submit" value="Agregar" onClick={this.handleChangeSubmit}/>
                </div>
                {this.state.todos.map(
                     (val) => {
                        return (
                                <Todos text={val.text} checked={false} checkTodo = {this.checkTodo} key={val.key.toString()} id={val.key.toString()}/>
                        );
                    }
                )}
            </div>)

    }
}

class Todos extends React.Component {
    state = {text: this.props.text, checked: this.props.checked}

    render() {
        
        return (
            <div key={this.props.id}>
                <input type="checkbox" onClick={this.props.checkTodo} value = {this.props.id}/>
                {this.state.text}
            </div>
        )
    }
}


ReactDOM.render(<Index/>, document.querySelector("#root"));
