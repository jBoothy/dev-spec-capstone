import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import { TextField } from "@mui/material";

export default function EditRep() {
    const { id } = useParams();
    const [r, setR] = React.useState({
        firstname: "",
        lastname: ""
    });

    // Have rep info show on page load
    useEffect(() => {
        axios
            .get(`/api/reps/${id}`)
            .then(res => {
                setR(res.data[0]);
            }
            )
            .catch(err => {
                console.log(err);
            }
            );
    }, [id]);

    const onFNChange = (e) => {
        setR({
            ...r,
            firstname: e.target.value
        });
    }

    const onLNChange = (e) => {
        setR({
            ...r,
            lastname: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/reps/${id}`, r).then(res => {
            console.log(res);
            setR({
                firstname: "",
                lastname: ""
            });
            toast.success("Rep updated successfully!");
        }
        ).catch(err => {
            console.log(err);
            toast.error("Error updating rep!");
        }
        );
    }


    return (
    
    <div>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="formBox"
        >
            <TextField id="outlined-basic1" label="First Name" variant="outlined" value={r.firstname} onChange={onFNChange}/>
            <TextField id="outlined-basic2" label="Last Name" variant="outlined" value={r.lastname} onChange={onLNChange}/>
            <Button className="btn" type="submit" onClick={handleSubmit} >Submit</Button>
        </Box>
        <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>

    )
}