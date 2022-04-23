import axios from "axios";
import React from "react";


import './pages.style.css';
class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            students: [],
            loading: true,
        }
    }



    async componentDidMount(){
        const resp = await axios.get('http://127.0.0.1:8000/api/student-list');
        if(resp.data.status === 200){
            this.setState({
                students: resp.data.students,
                loading: false,
            });
        }
    }


    deleteStudent = async (e, id) =>{
        const resp = await axios.delete(`http://127.0.0.1:8000/api/student-delete/${id}`);
        if(resp.data.status === 200){
           console.log(resp.data.message);
        }
    }



    render(){
        var studentTable = "";
        if(this.state.loading === true){
            studentTable = <tr><td colSpan="5"><span>Fetching data...</span></td></tr>;
        }else{
            studentTable = this.state.students.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.school_id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.course}</td>
                        <td>{item.year}</td>
                        <td>{item.section}</td>
                        <td>
                            <button className="btn btn-success btn-sm"><a href={`/student-info/${item.id}`}>Info</a></button>
                        </td>
                        <td>
                            <button className="btn btn-success btn-sm"><a href={`/student-edit/${item.id}`}>Edit</a></button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm" onClick={e => this.deleteStudent(e, item.id)}>Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return(
            <div className="student-list">
               <table className="table-bordered student-table">
                   <thead>
                        <tr>
                            <th>ID</th>
                            <th>School ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Course</th>
                            <th>Year</th>
                            <th>Section</th>
                            <th>Info</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                   </thead>
                   <tbody>
                        {studentTable}
                   </tbody>
                </table>
            </div>
        );
    }
}

export default HomePage;