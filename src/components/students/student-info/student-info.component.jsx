import React from 'react';
import axios from 'axios';

import '../student-css/student-css.style.css';
class StudentInfo extends React.Component{
    constructor() {
        super();

        this.state = {
           last_name: '',
        }
    }
   
   
    async componentDidMount() {
        const user_id = this.props.match.params.id;

        const resp = await axios.get(`http://127.0.0.1:8000/api/student-edit/${user_id}`);
        console.log(resp.data.student.last_name)
        if(resp.data.status === 200){
          this.setState({
                first_name: resp.data.student.first_name,
                last_name: resp.data.student.last_name,
            });
        }
        
    }


    render(){
        return(
            <div className="student-info">
                <div class="card">
                    <div class="card-header">
                        <span className='card-header-first'>Student Name:</span>
                        <span> </span>
                        <span>{this.state.last_name}</span>
                        <span>, </span>
                        <span>{this.state.first_name}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Subjects</h5>
                        <table className="table table-bordered add-info-table">
                            <thead>
                                <tr>
                                    <th scope="col">Major Subjects</th>
                                    <th scope="col">Minor Subjects</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">System Administration</th>
                                    <th scope="row">English</th>
                                </tr>
                                <tr>
                                    <th scope="row">Web Dev</th>
                                    <th scope="row">Science</th>
                                </tr>
                                <tr>
                                    <th scope="row">Computer Technology</th>
                                    <th scope="row">ESP</th>
                                </tr>
                                <tr>
                                    <th scope="row">Web Design</th>
                                    <th scope="row">Math</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentInfo;