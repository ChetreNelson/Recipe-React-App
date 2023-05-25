import React,{useRef} from 'react'
import styles from "./Common.module.css"


export default function SearchFiled(props) {
    const SearchInputRef=useRef();
    const handleSearch=()=>{
        let value=SearchInputRef.current.value;
        props?.onSearchInitiate(value)
    }
  return (
    <div>
          <input ref={SearchInputRef} />
          <button onClick={()=>handleSearch()}>Search</button>
    </div>
  )
}
