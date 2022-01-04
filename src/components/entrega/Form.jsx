import { forwardRef } from 'react';

import { Container, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import {showTime, showDate } from '../../utils/getDateAndTime'
import TableBasic from './Table'
import Logo from '../../assets/logo.png'

const Form = forwardRef(({name, content}, ref) => {

  return (
    <Container sx={{display: 'none'}}>
      <div ref={ref}>
        <img width={80} src={Logo} alt="Logo" />
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }} component='h2' variant='h4' >DEPARTAMENTO DE IT BROADCAST</Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2, underline: 'always', fontSize: 18 }} style={{textDecoration: 'underline'}} component='h2' variant='h5' >COMPROBANTE DE  ENTREGA DE EQUIPO/ACCESORIOS</Typography>
        <Typography sx={{ fontSize: 16, mb: 1 }} component='p'>FECHA: {showDate()}</Typography>
        <Typography sx={{ fontSize: 16, mb: 1 }} component='p'>HORA: {showTime()} </Typography>
        <Divider sx={{ mb: 2, borderColor: 'common.black', borderBottom: 2 }}/>
        <Typography sx={{ fontSize: 16, mb: 2 }} component='p'>Por medio de la presente se hace entrega del siguiente equipo que se detalla a continuación:</Typography>
        <Box sx={{ width: '100%', minHeight: 200, border: 1, mb: 2, p: 2, boxSizing: 'border-box', overflow: 'hidden'}} dangerouslySetInnerHTML={{__html: content}} />
        <TableBasic name={name} />
        <Typography sx={{ fontSize: 16, mb: 1 }} component='p'>Se hace constar que el equipo se entrega en óptimas condiciones y ha sido revisado por quien lo recibe.</Typography>
        <Divider sx={{ mb: 2, borderColor: 'common.black', borderBottom: 2 }}/>
        <Typography sx={{ fontSize: 16, mb: 1 }} component='p'>Nota:</Typography>
        <Divider sx={{ mb: 4, borderColor: 'common.black', borderBottom: 1 }}/>
        <Divider sx={{ mb: 4, borderColor: 'common.black', borderBottom: 1 }}/>
        <Divider sx={{ mb: 4, borderColor: 'common.black', borderBottom: 1 }}/>
      </div>
    </Container>
  )
})
  
export default Form
