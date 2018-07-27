import React,{Component} from "react";

class Calculator extends Component {
    render(){
        return (
            <div>
                <h1 className="text-right">340</h1>
                <hr/>
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        iphone x 1 = 200.0
                        <button className="btn btn-right btn-sm">x</button>
                    </li>
                    <li className="text-right text-success title">
                        ipad x 2 = 300.0
                        <button className="btn btn-right btn-sm">x</button>
                    </li>
                   
                 </ul>   
                 <hr/>
                 <button className="btn btn-block btn-danger title">confirm</button>
                 <button className="btn btn-block btn-secondary title">cancel</button>

            </div>
        )
    }
}

export default Calculator