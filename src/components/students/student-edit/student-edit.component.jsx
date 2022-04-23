import axios from "axios";
import React from "react";

import '../student-css/student-css.style.css';
class EditStudent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            school_id: '',
            first_name: '',
            last_name: '',
            course: '',
            year: '',
            section: '',
        }

    }

    async componentDidMount() {
        const user_id = this.props.match.params.id;

        const resp = await axios.get(`http://127.0.0.1:8000/api/student-edit/${user_id}`);

        if(resp.data.status === 200){
          this.setState({
                school_id: resp.data.student.school_id,
                first_name: resp.data.student.first_name,
                last_name: resp.data.student.last_name,
                course: resp.data.student.course,
                year: resp.data.student.year,
                section: resp.data.student.section,
            });
        }
        
    }


    updateStudent = async (e) => {
        e.preventDefault();
        const student_id = this.props.match.params.id;

                const resp = await axios.put(`http://127.0.0.1:8000/api/student-update/${student_id}`, this.state);

                console.log(resp);
                if(resp.data.status === 200){
                    console.log(resp.data.message)
                    this.setState({
                        school_id: '',
                        first_name: '',
                        last_name: '',
                        course: '',
                        year: '',
                        section: '',
                    });
                }
    }



    render(){
        return(
            <div className="edit-student">
               <form onSubmit={this.updateStudent} className="student-edit-form">
               <div className="mb-3">
                        <label htmlFor="school_id" className="form-label">School ID</label>
                        <input type="text" name="school_id" onChange={e => 
                            {this.setState({school_id:e.target.value})}} 
                            value={this.state.school_id} className="form-control" id="school_id" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" name="first_name" onChange={e => 
                            {this.setState({first_name:e.target.value})}} 
                            value={this.state.first_name} className="form-control" id="first_name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text" name="last_name" onChange={e => 
                            {this.setState({last_name:e.target.value})}} 
                            value={this.state.last_name} className="form-control" id="last_name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="course" className="form-label">Course</label>
                        <input type="text" name="course" onChange={e => 
                            {this.setState({course:e.target.value})}} 
                            value={this.state.course} className="form-control" id="course" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Year</label>
                        <input type="text" name="year" onChange={e => 
                            {this.setState({year:e.target.value})}} 
                            value={this.state.year} className="form-control" id="year" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="section" className="form-label">Section</label>
                        <input type="text" name="section" onChange={e => 
                            {this.setState({section:e.target.value})}} 
                            value={this.state.section} className="form-control" id="section" required/>
                    </div>
                    <button type="submit" className="btn btn-warning">Update</button>
                </form>
            </div>
        );
    }
}

export default EditStudent;