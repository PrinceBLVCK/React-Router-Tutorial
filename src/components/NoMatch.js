import logo from '../logo.svg'

const NoMatch = () =>{

    return(
        <div className='notFound'>
            <div>
            <img src={logo} alt="react-logo" width={250} height={250}/>
            <h1>404 Page Not Found</h1>
            </div>
        </div>
    )

}

export default NoMatch
