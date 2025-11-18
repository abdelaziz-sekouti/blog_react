import{AppBar,Toolbar,Typography,Button} from'@mui/material'
import '@fontsource/roboto'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 0,backgroundColor:'#1976d2',display: 'flex', flexDirection: { xs: 'column', sm: 'row' },  }} >
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '38px', textShadow : '2px 2px 4px rgba(237, 8, 8, 0.51)',transition:"all .3s","&:hover":{color:"rgba(109, 195, 249, 1)"}}}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Blog 
              </Link>
            </Typography>  

            
<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button sx={{  fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px'}} color="inherit">Home</Button>
</Link>
<Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button sx={{  fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px'}} color="inherit">About</Button>
</Link>

<Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>

            <Button sx={{  fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px'}} color="inherit">Contact</Button>
</Link>
<Link to="/add-blog" style={{ textDecoration: 'none', color: 'inherit' }}>

            <Button sx={{  fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px'}} color="inherit">Add Blog</Button>
</Link>
<Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>

            <Button sx={{  fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px'}} color="inherit">Blogs</Button>
</Link>
<Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>           
            <Button sx={{fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px',background:'#d2cc19ff',marginLeft: 1,transition:"all .3s",color:"#fa0808ff","&:hover":{background:'#c1b',color:"#fa0"}}}>Login</Button>
</Link>
<Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button  sx={{fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px',background:'#bdd219ff',marginLeft: 1,transition:"all .3s",color:"#fa0808ff","&:hover":{background:'#c1b',color:"#fa0"}}}>Signup</Button>
</Link>

            
        </Toolbar>
    </AppBar> 
  )   
}

export default Header