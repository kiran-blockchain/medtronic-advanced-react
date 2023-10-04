import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";

export const App =()=>{
  const nameOfTheCompany='Medtronic';
  const [profile,setProfile] = useState({FirstName:"",LastName:""})
  const [countryList,setCountryList]= useState([]);
  const handleChange = (name,value)=>{
    let content = profile;
    content[name]=value;
    setProfile({...content});
  };
  useEffect(()=>{
    const getCountryList = async()=>{
      try{
         let result = await getDataByAxios("https://restcountries.com/v2/all");
          let convertedResult = result.map(x=>{
            return {text:x.name,value:x.alpha2Code}
          })
         setCountryList(convertedResult);
      }catch(ex){
        console.log(ex)
      }
    };
    getCountryList()

  },[])
  //getData("https://restcountries.com/v2/all")
  
  // const countryList =[{
  //   value:"IN",
  //   text:"India"
  // },{
  //   value:"USA",
  //   text:"United States"
  // }]
  return(
  <div>
    <Header companyName={nameOfTheCompany}/>
    <div className="container mt-5">
      <div className="row">
        <Textbox textboxConfig={register.FirstName} handleChange={handleChange}/>
        <Textbox textboxConfig={register.LastName} handleChange={handleChange}/>
        <Dropdown dropdownConfig={register.Country} handleChange={handleChange} collection={countryList}/>
        <button className="btn btn-primary col-md-3" onClick={e=>{
          console.log(profile);
        }}>Register</button>
      </div>{JSON.stringify(profile)}
    </div>
  </div>
  )
};

