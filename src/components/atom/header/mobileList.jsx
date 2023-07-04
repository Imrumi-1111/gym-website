import { ImMenu } from "react-icons/im";
import {useState} from 'react'
import Mobile from './mobileView'
import { Link } from 'react-router-dom'
import styles from './mobileView.module.css'



export default function Head(){
    const [menu, setMenu] = useState(false)

    function showList(){
        setMenu(true)

    }
    function closeList(){
        setMenu(false)
    }
    
    if(menu){
        return <Mobile closeFunction = {closeList}/>
    }
    return(
        
        <headers className={styles.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>
            <b>Strength camp</b>
          </p>
          
        </Link>
            <ImMenu
            className={styles.menu}
            onClick={showList}
            />
            
        </headers>
    )
    
}