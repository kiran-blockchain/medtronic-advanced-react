import { useState } from "react";
export const Dropdown =({dropdownConfig,handleChange,collection})=>{
    const[selectedValue,setSelectedValue] = useState(dropdownConfig.value)
    return(
        <div className="col-md-3">
            <select
             name={dropdownConfig.name}
             id={dropdownConfig.id}
             value={selectedValue}
            className="form-control"
                onChange={e=>{
                    setSelectedValue(e.target.value)
                    handleChange(e.target.name,e.target.value)
                }} >
                <option value=''>{dropdownConfig.placeholder}</option>
                <Options list={collection}/>
            </select>
        </div>
    )
}
export const Options =({list})=>{
    return list.map((item,index)=>{
        return <option key={index} value={item.value}>{item.text}</option>
    })
}