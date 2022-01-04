//deleteassignment code class
 
import './App.css';
import {useEffect,useState} from "react";

function App() {

    const [initialState,setinitialState]=useState([])
 
 function getassignments(){


    fetch('teacher/assignments').then(res=>{
        if(res.ok){return res.json()}
    }).then(jsonResponse =>setinitialState(jsonResponse))
    console.log(initialState);   
 }
    useEffect(()=>{
        getassignments();
    },[])

/**/ 
function deleteassign(id){
fetch(`http://localhost:3001/teacher/delassignment/${id}`,{
    method:"DELETE"
}).then((result)=>{
    result.json().then((resp)=>{
        console.warn(resp)
        getassignments()
    })
})

}
    return (
        <div style={{ 
            backgroundImage: `url("https://cdn.crispedge.com/095859.png")` 
          }}>
    
        <><text style={{fontFamily:'cursive',alignSelf:'center',fontSize:'35px'}}>ASSIGNMENT INFORMATION</text><div className="App">
        <div><table>
                <tr>
                    <th>description</th>
                    <th>Questions</th>
                    <th>marks</th>
                    <th>student_id</th>
                    <th>uplaoded_file</th>
                </tr>
                {initialState.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.description}</td>
                            <td>{val.Questions.Q}</td>
                            <td>{val.Questions.marks}</td>
                            <td>{val.Attempted.student_id}</td>
                            <td>{val.Attempted.uplaoded_file}</td>
                            <td><button onClick={()=>deleteassign(val.student_id)}>Delete</button></td>
                        </tr>
                    )})}
            </table>
            <button style={{backgroundColor:"pink",flexDirection:'column',borderBlockColor:'purple'}} title='SHOW MORE'>SEE MORE</button>
            <button style={{backgroundColor:"pink",flexDirection:'column',borderBlockColor:'purple'}}>COURSE INFORMATION</button></div>
        </div>
        </></div>

);
}

export default App;



//showstudent route code class
/*

import './App.css';
import {useEffect,useState} from "react";

function App() {

    const [initialState,setinitialState]=useState([])
 
 function getassignments(){


    fetch('teacher/assignments').then(res=>{
        if(res.ok){return res.json()}
    }).then(jsonResponse =>setinitialState(jsonResponse))
    console.log(initialState);   
 }
    useEffect(()=>{
        getassignments();
    },[])

 
function deleteassign(id){
fetch(`http://localhost:3001/teacher/delassignment/${id}`,{
    method:"DELETE"
}).then((result)=>{
    result.json().then((resp)=>{
        console.warn(resp)
        getassignments()
    })
})

}
    return (
        <div style={{ 
            backgroundImage: `url("https://cdn.crispedge.com/095859.png")` 
          }}>
    
        <><text style={{fontFamily:'cursive',alignSelf:'center',fontSize:'35px'}}>ASSIGNMENT INFORMATION</text><div className="App">
        <div><table>
                <tr>
                    <th>description</th>
                    <th>Questions</th>
                    <th>marks</th>
                    <th>student_id</th>
                    <th>uplaoded_file</th>
                </tr>
                {initialState.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.description}</td>
                            <td>{val.Questions.Q}</td>
                            <td>{val.Questions.marks}</td>
                            <td>{val.Attempted.student_id}</td>
                            <td>{val.Attempted.uplaoded_file}</td>
                            <td><button onClick={()=>deleteassign(val.student_id)}>Delete</button></td>
                        </tr>
                    )})}
            </table>
            <button style={{backgroundColor:"pink",flexDirection:'column',borderBlockColor:'purple'}} title='SHOW MORE'>SEE MORE</button>
            <button style={{backgroundColor:"pink",flexDirection:'column',borderBlockColor:'purple'}}>COURSE INFORMATION</button></div>
        </div>
        </></div>

);
}

export default App;*/