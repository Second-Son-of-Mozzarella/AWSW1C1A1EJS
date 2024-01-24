import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { amber, yellow, grey, white } from '@mui/material/colors';

class Country extends Component {
    state = {
        name: 'United States of America',
        golds: 0,
        silvers: 0,
        bronzes: 0,
    }

    renderMedals(medals) {

        return (medals === undefined || medals === null ? 0 : medals);
    }

    // helper method

    AddGolds = () => {
        // convert the function to an arrow function
        // arrow functions inherit 'this' keyword
        console.log(this.state.golds);
        // the setState method is inherited from the base Component class
        // when a component's state is altered, it is re-rendered asynchronously by react
        this.setState({ golds: this.state.golds += 1 })
    }

    RemoveGolds = () => {
        // convert the function to an arrow function
        // arrow functions inherit 'this' keyword
        console.log(this.state.golds);
        // the setState method is inherited from the base Component class
        // when a component's state is altered, it is re-rendered asynchronously by react
        if (this.state.golds >= 1) {
            this.setState({ golds: this.state.golds -= 1 })
        } else {
            alert("you cant have negitive medals")
        }

    }

    AddSilvers = () => {
        console.log(this.state.silvers);
        this.setState({ silvers: this.state.silvers += 1 })
    }

    RemoveSilvers = () => {
        console.log(this.state.silvers);
        if (this.state.silvers >= 1) {
            this.setState({ silvers: this.state.silvers -= 1 })
        } else {
            alert("you cant have negitive medals")
        }

    }

    AddBronzes = () => {
        // convert the function to an arrow function
        // arrow functions inherit 'this' keyword
        console.log(this.state.bronzes);
        // the setState method is inherited from the base Component class
        // when a component's state is altered, it is re-rendered asynchronously by react
        this.setState({ bronzes: this.state.bronzes += 1 })
    }

    RemoveBronzes = () => {
        // convert the function to an arrow function
        // arrow functions inherit 'this' keyword
        console.log(this.state.bronzes);
        // the setState method is inherited from the base Component class
        // when a component's state is altered, it is re-rendered asynchronously by react
        if (this.state.bronzes >= 1) {
            this.setState({ bronzes: this.state.bronzes -= 1 })
        } else {
            alert("you cant have negitive medals")
        }

    }
    render() {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                className='Country'
            >
                <div>
                    <Container maxWidth="fit" align="center">
                        <Card sx={{ width: 400, display: "flex", justifyContent: "flex-center", margin: 10, bgcolor: grey[50] }}  >
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {this.state.name}
                                </Typography>
                                <hr></hr>
                                <Typography variant="body2">
                                    <Grid container spacing={2} align="center">
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: yellow[500], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(this.state.golds)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={this.RemoveGolds} /> <AddCircleOutline onClick={this.AddGolds} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: grey[400], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(this.state.silvers)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={this.RemoveSilvers} /> <AddCircleOutline onClick={this.AddSilvers} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: amber['A700'], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(this.state.bronzes)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={this.RemoveBronzes} /> <AddCircleOutline onClick={this.AddBronzes} />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>


                </div>
            </Box>



            // <div >
            // { this.state.name } 
            // </div>
            // <div>
            // { this.state.golds }  <Chip onClick={ this.handleClick } label="+"></Chip>
            // </div>

        );
    }
}

export default Country