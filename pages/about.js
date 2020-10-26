import React from 'react'

// functional component | arrow function
// WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentational components
// const About = () => {
//     const a = "Hi!"
//     return (
//         <h1>Hello about page! - {a} </h1>
//     )
// }

// const About = () => {
//     const a = "Hi!"
//     return React.createElement('div', null, 'Hello Mellow')
// }

// functional component | normal function
// function About() {
//     return (
//         <h1>Hello about page!</h1>
//     )
// }


class About extends React.Component{
    render() {
        return (
                <div className="my-main d-flex justify-content-center align-items-center">
                    <h1 className="">About page</h1>
                </div>
        )
    }
}

export default About