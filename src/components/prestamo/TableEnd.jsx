import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableEnd = () => {
  return (
    <TableContainer sx={{ boxShadow: 0, width: '100%', mb: 2}} component={Paper}>
      <Table sx={{border: 1, borderColor: 'common.black'}} size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{border: 1, borderColor: 'common.black', width: '25%'}}></TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black', fontSize: 16}} align="center">Nombre</TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black', fontSize: 16}} align="center">Firma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{border: 1, borderColor: 'common.black', fontSize: 14}} >Recibe por ITB:</TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black'}} align="right"></TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black'}} align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{border: 1, borderColor: 'common.black', fontSize: 14}}>Entrega:</TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black', fontSize: 16}} align="center"></TableCell>
            <TableCell sx={{border: 1, borderColor: 'common.black'}} align="right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableEnd;