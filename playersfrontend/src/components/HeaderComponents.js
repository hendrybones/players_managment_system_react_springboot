import React, { Component } from 'react'

 class HeaderComponents extends Component {
     constructor(props){
         super(props)

         this.state={

         }
     }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">Players Management System</a></div>

                    </nav>
                </header>
                
            </div>
        )
    }
}
export default HeaderComponents
