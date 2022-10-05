import { Button, makeStyles } from '@material-ui/core'
import accounting from 'accounting'
import React from 'react'
import {getBasketTotal} from "../reducer"
import { useStateValue } from "../StateProvider";


const useStyles = makeStyles ((theme) => ({
    root: {
        display: "fles",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },
    button: {
        marginTop: "2rem"
    }

}))
export const Total = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
        <h5>Total items: {basket?.length}</h5>
        <h5>{accounting.formatMoney ( getBasketTotal(basket), "€")}</h5>
        <Button className={classes.button} variant="contained" color="secondary">check</Button>
    </div>
  )
}
