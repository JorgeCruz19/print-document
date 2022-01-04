
import { useState, useRef} from 'react'
import ReactToPrint from "react-to-print";
import JoditEditor from "jodit-react";

import { Container, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import Form from './Form'

const Entrega = () => {
  const editor = useRef(null)
  const componentRef = useRef();

  const [content, setContent] = useState('')
  const [name, setName] = useState('Alfonso Peña');

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
        <Typography sx={{ textAlign: 'center', fontWeight: 'normal', mb: 5 }} component='h1' variant='h5' >Comprobante de Entrega</Typography>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="demo-simple-select-label">Nombre del colaborador de ITB:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Nombre del colaborador de ITB:"
            onChange={handleChangeName}
          >
            <MenuItem value={'Alfonso Peña'}>Alfonso Peña</MenuItem>
            <MenuItem value={'Edwin Ilovares'}>Edwin Ilovares</MenuItem>
            <MenuItem value={'Jorge Cruz'}>Jorge Cruz</MenuItem>
            <MenuItem value={'Kelvin Sagastume'}>Kelvin Sagastume</MenuItem>
            <MenuItem value={'Luis Amador'}>Luis Amador</MenuItem>
            <MenuItem value={'Wesly Lopez'}>Wesly Lopez</MenuItem>
            <MenuItem value={'Wilson Mendez'}>Wilson Mendez</MenuItem>
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
          pageStyle= "@page { size: auto;  margin: 4mm 20mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
          trigger={() => <Button variant="contained" sx={{mt:3, width: '100%'}} >Imprimir</Button>}
          content={() => componentRef.current}
        />
      </form>
    <Form ref={componentRef} name={name} content={content} />         
    </Container>
  )
}

export default Entrega
