import React from 'react';
import "../pages/Home/style.css"

const User = ({id, idname, idbirthdate, idgender, idcpf, idemail, idstartdate}) => {
    return (
        <div className="txtlist">
            <span>{id} / </span>
            <span>{idname} / </span>
            <span>{idbirthdate} / </span>
            <span>{idgender} / </span>
            <span>{idcpf} / </span>
            <span>{idemail} / </span>
            <span>{idstartdate}</span>
        </div>
  )
}

export default User;