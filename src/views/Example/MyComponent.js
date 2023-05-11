import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponet extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'Job1', title: 'Dev', salary: 500 },
            { id: 'Job2', title: 'Tester', salary: 300 },
            { id: 'Job3', title: 'EngineerSW', salary: 5000 },
        ]
    }

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div>
                    Hello Form
                </div>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleLastName(event)} /><br />
                    <input type="button" value="Submit" onClick={(event) => { this.handleSubmit(event) }} />
                </form>
                <ChildComponent name={this.state.firstName} age={23} adress={'TP.HCM'} arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponet;