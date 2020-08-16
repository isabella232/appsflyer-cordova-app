import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  searchBar: {
    width: '100%',
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  },
  bottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  backgroundTitle:{
    color: '#C5C5C8',
    margin: 20,

  }
}));

const ShoppingList = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>Shopping List</h1>
        </div>
    );
};


export default ShoppingList;