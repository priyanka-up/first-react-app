import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <React.Fragment>
                <section className ="card-container">
                    <header className ="card-header">
                    <span initials = "PU" className= "card-header span"></span>
                    <h2 className="card-header h2">Priyanka Upadhyaya</h2>
                    </header>
                    <main>
                        <ul>
                            <li><span>Birthday</span>Apr 10, 1989</li>
                            <li><span>Company</span>Veritas</li>
                            <li><span>Address</span>11356 26th ave</li>
                            <li><span>Phone</span>7818279344</li>
                            

                        </ul>
                    </main>
                </section>
            </React.Fragment>
        )
    }
}

export default Card;