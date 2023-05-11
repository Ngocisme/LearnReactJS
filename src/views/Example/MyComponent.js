import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponet extends React.Component {
    state = {
        arrJobs: [
            { id: 'Job1', title: 'Dev', salary: 500 },
            { id: 'Job2', title: 'Tester', salary: 300 },
            { id: 'Job3', title: 'EngineerSW', salary: 5000 },
        ]
    }

    render() {
        return (
            <>
                <AddComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponet;