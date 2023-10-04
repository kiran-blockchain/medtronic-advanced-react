import { useState } from "react"

export const Textbox=(props)=>{
    const textboxConfig =props.textboxConfig;
    const handleChange = props.handleChange;
    const [value,setValue] = useState(textboxConfig.value);
    return(
        <div className="col-md-3">
            <input type={textboxConfig.type} 
            className="form-control"
            name={textboxConfig.name}
            value={value}
            onChange={e=>{
                setValue(value)
                handleChange(e.target.name,e.target.value)
            }}
            placeholder={textboxConfig.placeholder}
           
            />
            {textboxConfig.value}
        </div>
    )
}