const Header = ({info}) => {
  
    return (
        <div className='header'>
            <h1>My name is {info.firstName} {info.lastName}</h1>
            <h2>Class: {info.className} {info.myClass}</h2>
        </div>
    )
}
export default Header;