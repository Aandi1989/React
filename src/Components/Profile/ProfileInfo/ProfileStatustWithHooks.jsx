
import React,{useState, useEffect} from "react";

 const ProfileStatustWithHooks=(props)=>{
    
    let [editMode,setEditMode]=useState(false);
    let [status,setStatus]=useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateEditMode = () =>{
        setEditMode(true);
    }

   const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                {editMode 
                    ? <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                     value={status} />
                    : <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                }
            </div>
        )
}

export default ProfileStatustWithHooks