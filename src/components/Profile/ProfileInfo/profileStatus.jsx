import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [newStatus, setNewStatus] = useState(props.status)
    //const [status, setStatus] = useState(props.status);

   // let status = props.status ? props.status: 'Ничего особенного';

    const handleDoubleClick = () => {
        setEditMode(true);
    };

    const handleBlur = () => {
        setEditMode(false);
        props.updateStatusThunk(newStatus)
    };

    useEffect(()=>{
        setNewStatus(props.status)
    }, [props.status])
    const onStatusChange = (e)=>{
        setNewStatus(e.currentTarget.value)
    }
    // const handleChange = (e) => {
    //     setStatus(e.target.value);
    // };

    return (
        <div>
            {!editMode ? (
                <div>
                    <span onDoubleClick={handleDoubleClick}>{props.status || "-----"}</span>
                </div>
            ) : (
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={handleBlur} value={newStatus}  />
                </div>
            )}
        </div>
    );
}

export default ProfileStatus;