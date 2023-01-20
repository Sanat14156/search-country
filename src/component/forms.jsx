import React from "react";
import Country from "./Country.json";
const Forms=()=>{
    
    let data=Country;
    return <section className="form-block">
            <form>
                <label htmlFor="search">Search Country</label>
                <input type="text" placeholder="search country.." id="search" list="country"></input>
                <datalist id="country">
                {data.map((value)=>{
                    return(<option value={value.code} key={value.name}>{value.name}</option>);
                })};
                    
                </datalist>
                <button>Submit</button>
            </form>
        
    </section>
};
export default Forms;