import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: '',
    }
    handletitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handlesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title:</label><br />
                <input type="text" value={this.state.titleJob} onChange={(event) => this.handletitleJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handlesalary(event)} /><br />
                <input type="button" value="Submit" onClick={(event) => { this.handleSubmit(event) }} />
            </form>
        )
    }
}

export default AddComponent;