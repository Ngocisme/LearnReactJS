import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ? <div>
                    <button onClick={() => this.handleShowHide()}>Show</button>
                </div>
                    :
                    <>
                        <div className="arrJobs-List">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 500)
                                        return (
                                            <div key={item.id}>
                                                {item.title}-{item.salary} $    <></> <span onClick={() => this.handleDelete(item)}>x</span>
                                            </div>
                                        )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;
