import React from "react"

export default function Main() {
    return (
        <main className="main">
            <h1 className="main--name">Chris Campbell</h1>
            <h3 className="main--title">Diplomat, Developer</h3>
            <a className="main--link" href="https://github.com/clccode"><p>https://github.com/clccode</p></a>
            <div className="buttons">
                <a href="mailto:clccodes@yahoo.com"><button className="email"><img src="./images/mail.png" className="mail-icon" />Email</button></a>
            </div>
            <h4 className="main--about">About</h4>
            <p className="main--about_para">Twenty years experience in diplomacy and foreign affairs. Also a developer. Sports enthusiast. Reader.</p>
            <h4 className="main--interests">Interests</h4>
            <p className="main--interests_para">Foreign Policy. Coding. Ice Hockey. Soccer (Football). Reading.</p>
        </main>
    )
}