import React from "react";

class MyComponet extends React.Component {
    state = {
        firstName: '',
        lastName: ''
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
            </>
        )
    }
}

export default MyComponet;