import React from "react";

const Footer = (props) => {

    const {company,email} = props;

    return (
        <div>Power by {company} | Contact  {email}</div>
        
    )
}

export default Footer;