import { CSSProperties } from 'react';

const needHelpStyle: CSSProperties = { 
    position: "absolute", 
    bottom: 16, 
    left: 16, 
    width: 192, 
    background: "#343D53", 
    color: "#ffffff", 
    padding: "8px 16px", 
    borderRadius: "4px" 
}

export default function NeedHelp() {
    return (
        <div className="cursor-pointer" style={needHelpStyle}>
          <p className="m-0" style={{opacity: 0.8}}>
            Need any help?
          </p>
          <p className="font-GalanoGrotesqueMedium m-0">
            Chat with us
          </p>
        </div>
    )
}