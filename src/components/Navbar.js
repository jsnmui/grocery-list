const Navbar = (props) =>{
    return (
       <nav style={styles.navStyle}>
          <h1>{props.text}</h1>
       </nav>
    );
};

const styles = {
    navStyle:{
        display: 'flex',
        justifyContent: 'space-around',
        border:'solid red 2px'
    }
}

export default Navbar