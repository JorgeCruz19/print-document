
import { useState, useRef} from 'react'
import ReactToPrint from "react-to-print";
import JoditEditor from "jodit-react";

import { Container, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import Navbar from './Navbar'
import Footer from './Footer'
import Design from './Design'

const Formulario = () => {
  const editor = useRef(null)
  const componentRef = useRef();

  const [content, setContent] = useState('')
  const [name, setName] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const config = {
    readonly: false,
    language: 'es',
    uploader: {
      insertImageAsBase64URI: true
    }
  }

  return (
    <Container sx={{py: 6}}  maxWidth="md" style={{minHeight: 'calc(100vh - 128px)'}} >
      <form>
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', mb: 5 }} component='h1' variant='h4' >Comprobante de Entrega</Typography>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="demo-simple-select-label">Nombre del colaborador de ITB:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Nombre del colaborador de ITB:"
            onChange={handleChangeName}
          >
            <MenuItem value={'Jorge Cruz'}>Jorge Cruz</MenuItem>
            <MenuItem value={'Kelvin Sagastume'}>Kelvin Sagastume</MenuItem>
          </Select>
        </FormControl>
        <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => {}}
        />
        <ReactToPrint
          documentTitle='ITB'
          pageStyle= "@page { size: auto;  margin: 15mm 20mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
          trigger={() => <Button variant="contained" sx={{mt:3, width: '100%'}} >Imprimir</Button>}
          content={() => componentRef.current}
        />
      </form>
    <Design ref={componentRef} name={name} content={content} />         
    </Container>
  )
}

export default Formulario