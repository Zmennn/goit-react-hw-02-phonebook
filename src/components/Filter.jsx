import { Component } from "react";


class Filter extends Component{
    


    render() {
        return (<>
            <label htmlFor="find">Find contacts by name</label>
            <input
                className={style.input}
                id="find"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]"
                onChange={(ev)=>props.handleChangeFindInput(ev)}
                ></input>
     </>   )
    }
}

export default Filter