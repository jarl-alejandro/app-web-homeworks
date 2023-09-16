import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Button, TextField} from "@mui/material";
import './modal.css'
import {useState} from "react";



function StudentDialog(props) {
    const [form, setForm] = useState({
        identifier: '',
        name: '',
        career: '',
        age: '',
        direction: '',
    })

    const onChange = (event) => {
        const { name, value } = event.target
        setForm(Object.assign({}, form, {
            [name]: value
        }))
    }

    const handleClose = () => {
        // eslint-disable-next-line react/prop-types
        props.onClose(null);
    };

    const handleSave = () => {
        // eslint-disable-next-line react/prop-types
        props.onClose(form)
    }


    return (
        // eslint-disable-next-line react/prop-types
        <Dialog onClose={handleClose} open={props.open}  maxWidth="md" fullWidth={true}>
            <DialogTitle>Crear nuevo estudiante</DialogTitle>

            <div className="grid-form">
                <TextField required label="Identificador" onChange={onChange} value={form.identifier} name={"identifier"} />
                <TextField required label="Nombre" onChange={onChange} value={form.name} name={"name"} />
                <TextField required label="Carrera" onChange={onChange} value={form.career} name={"career"} />
                <TextField required label="Edad" onChange={onChange} value={form.age} name={"age"} />
                <TextField required label="Direccion" onChange={onChange} value={form.direction} name={"direction"} />
            </div>

            <div className="modal-footer">
                <Button variant="outlined" color="error" className="modal-footer--close" style={{ marginInlineEnd: '1rem' }} onClick={handleClose}>Cerrar</Button>
                <Button variant="contained" onClick={handleSave}>Guardar</Button>
            </div>
        </Dialog>
    );
}

export default StudentDialog
