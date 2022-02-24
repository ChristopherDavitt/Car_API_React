import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle

} from '@mui/material';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks'
import { CarForm } from '../../components'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Car name',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'camera_quality',
    headerName: 'Camera Quality',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'A description of the car',
    sortable: false,
    width: 160,
    
  },
];

interface gridData{
  data:{
    id?:string;
  }
}
export const DataTable = () => {
  let { carData, getData } = useGetData();
  let [ open, setOpen ] = useState(false);
  let [ gridData, setData ] = useState<GridSelectionModel>([ ])

  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false);
  }

  let deleteData = async() => {
    for (let id in gridData){
      await serverCalls.delete(`${gridData[id]}`)
    }
    
    window.location.reload()
  }
  console.log(gridData)
return (
  <div style={{ height: 400, width: '100%' }}>
      <h2>Cars In Inventory</h2>
    <DataGrid
      rows={carData}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      onSelectionModelChange={(newSelectionModel)=>{setData(newSelectionModel);}}
    />
    <Button onClick={handleOpen}>Update Car</Button>
    <Button variant='contained' color='secondary' onClick={deleteData}>Delete car</Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Update a Car</DialogTitle>
      <DialogContent>
        <DialogContentText>Car Id: {gridData[0]}</DialogContentText>
        <CarForm id={ `${gridData[0]}` } />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}