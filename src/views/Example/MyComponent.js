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

    addNewJob = (job) => {
        console.log(job)
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob} />
            </>
        )
    }
}

export default MyComponet;