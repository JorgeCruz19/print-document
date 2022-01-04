import { Container, Typography } from "@mui/material"

const Home = () => {
  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} style={{minHeight: 'calc(100vh - 128px)'}}>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#0F3460' }} component='h1' variant='h3' >IT BROADCAST</Typography>
    </Container>
  )
}

export default Home
