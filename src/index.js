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
        if (this.state.cellinput !== "") {
            this.setState({
                cellinput: "",
                todos: [...this.state.todos,
                    {key: this.state.todos.length, text: this.state.cellinput}]
            })
        }
    }
    checkTodo = () =>{
        console.log(this)
        this.setState(
            {todos:[]}
        )
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
                            <div key={val.key.toString()}>
                                <Todos text={val.text} checked={false} checkTodo = {this.checkTodo}/>
                            </div>
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
            <div>
                <input type="checkbox" onClick={this.props.checkTodo}/>
                {this.state.text}
            </div>
        )
    }
}


ReactDOM.render(<Index/>, document.querySelector("#root"));
