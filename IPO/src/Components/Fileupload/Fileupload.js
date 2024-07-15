import React, { useState } from 'react'
import * as XLSX from "xlsx"
import "./Fileupload.css"
function Fileupload() {
         const [excelfile,setexcelfile]=useState(null)
         const [typeerror,settypeerror]=useState(null)

         const [exceldata,setexceldata]=useState(null)

   const handlefile=(e)=>{
    let filetypes=['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv']
    let selectedfile=e.target.files[0]
    if(selectedfile){
      if(selectedfile&&filetypes.includes(selectedfile.type)){
       settypeerror(null)
       let reader= new FileReader()
       reader.readAsArrayBuffer(selectedfile)
       reader.onload=(e)=>{
        setexcelfile(e.target.result)
       }
    console.log(selectedfile.type)
      }
      else{
        settypeerror("please select only excel file type")
        setexcelfile(null)
     }
    }else{
        console.log("please select your file")
    }
    
   }
   const handlefilesubmit=(e)=>{
     e.preventDefault()
     if(excelfile!==null){
        const workbook=XLSX.read(excelfile,{type: 'buffer'})
        const worksheetname=workbook.SheetNames[0]
        const worksheet= workbook.Sheets[worksheetname]
        const data= XLSX.utils.sheet_to_json(worksheet)
        setexceldata(data.slice(0,10))
     }
   }
    return (
        
      <div className='wrapper'>
          <h3 className='excel-head'>Upload Excel Sheet</h3>
          <form className='form-group custom-form' action="" onSubmit={handlefilesubmit}>
            <input type="file" name="" className="form-control" required onChange={handlefile} />
            <button type='submit' className='btn btn-success btn-nd'>UPLOAD</button>
            {typeerror&&(
                <div className='alert alert-danger' role='alert'>{typeerror}</div>
            )}
          </form>
          <div className="viewer">
            {exceldata?(<div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            {Object.keys(exceldata[0]).map((key)=>(
                            <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {exceldata.map((individualexceldata,index)=>(
                          <tr key={index}>
                            {Object.keys(individualexceldata).map((key)=>(
                                <td key={key}>{individualexceldata[key]}</td>
                            ))}
                          </tr>  
                          
                        ))}
                    </tbody>

                </table>
            </div>):(<div className='alert alert-secondary'>File not uploaded yet!!!</div>)}
          </div>
      </div>
    )
  }


export default Fileupload
