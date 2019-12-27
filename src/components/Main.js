import React from 'react'
import Cards from './Cards'
const Main = function(){
    return <>
        <main role="main" className="container">
            <section className="jumbotron text-center">
                <h1 className="jumbotron-heading">Apostolic Church International Fellowship</h1>
                <p className="lead text-muted">We have several conferences in different parts of Europe. You are very welcome to join us!</p>
            </section>
            <Cards></Cards>
        </main>
    </>
}


export default Main