import React from 'react'
import ControlledForm from '../components/controlled-form'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <ControlledForm />
            <Link to="/account">
                <h2>Go To Account Page</h2>
            </Link>
            {/* <Footer /> */}
        </>
    )
}

export default Home;

