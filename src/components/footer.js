import React from 'react';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '20px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style} className="justify-content-center">
                <p className="nav-item active centered footer-text">made by: Daniel Wręczycki and Kewin Bobel </p>
            </div>
        </div>
    )
}

export default Footer