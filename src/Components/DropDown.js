import { useState } from "react";



function DropDown() {

    const [toggle , setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }
    
    return (
        <div class={"dropdown " + (toggle ? "" : "is-active")} style={{"float" : 'right'}}>
            <div class="dropdown-trigger">
                <button onClick={handleClick} class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Click me</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div onClick={ handleClick } class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        USD
                    </a>
                    <a href="#" class="dropdown-item">
                        THB
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DropDown

