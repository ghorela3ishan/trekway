import React,{Component} from 'react';
import  DialogActions  from '@material-ui/core/DialogActions';
import  Divider  from '@material-ui/core/Divider';
import  Button  from '@material-ui/core/Button';
import  Dialog  from '@material-ui/core/Dialog';
import  DialogTitle  from '@material-ui/core/DialogTitle';
import  DialogContent  from '@material-ui/core/DialogContent';
import  DialogContentText  from '@material-ui/core/DialogContentText';
import  { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    invoiceContainer : {
        maxWidth: '20%'
    }
  });

class Invoice extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.invoiceContainer}>
                <Dialog  open={this.props.isInvoiceVisible} 
                        onClose={this.props.toggleInvoice}  fullWidth={true}
                        aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                    <DialogTitle id="alert-dialog-title">Invoice</DialogTitle>
                    <Divider/>
                    <br/>
                    <DialogContent> 
                       <DialogContentText id="alert-dialog-description">Total Bill: {this.props.totalBill}
                       </DialogContentText>
                    </DialogContent>
                    <Divider/>
                    <DialogActions>
                      <Button onClick={this.props.toggleInvoice} variant="outlined" color="primary" size="small" autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                </Dialog>      
            </div>          
        )
    }
} 

export default withStyles(styles)(Invoice);