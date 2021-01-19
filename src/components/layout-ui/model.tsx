import React, { useState } from 'react';
import { Snackbar, SnackbarContent, Paper, TextField, Button, Grid } from '@material-ui/core';
import { FaCalendarAlt } from 'react-icons/fa';
import { MailService } from '../../services/mail-services';
import moment from 'moment';

const Modal = () => {

  var msgname: string = 'Enter user name.';
  var msgemail: string = "Enter email and it should be in correct format as 'xyz@abc.com/in/org'.";
  var msgphone: string = "Enter phone number and it contains only 10 digit number.";

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setOpen((prev) => !prev);
    return;
  };
  const handleClose1 = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setOpen1((prev) => !prev);
    return;
  };
  const handleClose2 = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setOpen2((prev) => !prev);
    return;
  };

  const handleSave = async () => {
    var username = (document.getElementById("Name") as HTMLInputElement).value;
    var useremail = (document.getElementById("Email") as HTMLInputElement).value;
    var userphone = (document.getElementById("Phone") as HTMLInputElement).value;
    var validateemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validatephone = /^((\\+91-?)|0)?[0-9]{10}$/;

    if (username == null || username == "") {
      setOpen((prev) => !prev);
      return;
    }
    if (!useremail.match(validateemail) || useremail == null || useremail == "") {
      setOpen1((prev) => !prev);
      return;
    }
    if (!userphone.match(validatephone) || userphone == null || userphone == "") {
      setOpen2((prev) => !prev);
      return;
    }
    if (username && useremail && userphone) {
      let dataEmail = {
        To: useremail,
        From: 'exultitsolution@gmail.com',
        Subject: "User Request for Exultit",
        Username: username,
        Userphone: userphone,
        UserDate: date
      };
      //   const data = await mailService.sendMail(dataEmail).then(response => {
      //     if (response.msg == "Mail sent successfully.") {
      //       alert(response.msg);
      //       (document.getElementById("Message") as HTMLInputElement).value = '';
      //       (document.getElementById("Name") as HTMLInputElement).value = '';
      //       (document.getElementById("Email") as HTMLInputElement).value = '';
      //       (document.getElementById("Phone") as HTMLInputElement).value = '';
      //     }
      //     else {
      //       alert("Mail failed.")
      //     }
      //   });
    }
  };
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [date, setDate] = useState(
    moment(new Date()).format("YYYY-MM-DD"));

  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  return (
    <div>
      <Button className={checked ? 'button-free-councelling-services-on-click' : 'button-free-councelling-services'} onClick={handleChange}><FaCalendarAlt /></Button>

      <div className="">
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <SnackbarContent style={{
            backgroundColor: 'red',
            marginTop: 30,
            color: 'white'
          }}
            message={msgname}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={open1}
          autoHideDuration={3000}
          onClose={handleClose1}
        >
          <SnackbarContent style={{
            backgroundColor: 'red',
            marginTop: 30,
            color: 'white'
          }}
            message={msgemail}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={open2}
          autoHideDuration={3000}
          onClose={handleClose2}
        >
          <SnackbarContent style={{
            backgroundColor: 'red',
            marginTop: 30,
            color: 'white'
          }}
            message={msgphone}
          />
        </Snackbar>
        <div className={checked ? 'div-request-mail-onclick' : 'div-request-mail'}>
          <Paper >
            <h3 className="h3-request-homebar-services">Schedule</h3>
            <div className="request-div-home">
              <Grid container className="row-width-100">
                  <div>
                    <TextField type="date" value={date} className="input-request-home-services-date"
                      InputLabelProps={{ shrink: true }} onChange={handleChangeDate}></TextField>
                  </div>
                  <div>
                    <input type="text" id="Name" className="input-request-home-services" placeholder="Your name" />
                  </div>
                  <div>
                    <input type="email" id="Email" className="input-request-home-services" placeholder="Email address" />
                  </div>
                  <div>
                    <input type="number" id="Phone" className="input-request-home-services" placeholder="Phone number" />
                  </div>
                  <Button className="inquirybtn-home-services" onClick={handleSave}>Send Inquiry</Button>
              </Grid>
            </div>
          </Paper>
        </div>
      </div>

    </div>)
}

export default Modal