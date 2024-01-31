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
import { amber, yellow, grey } from '@mui/material/colors';

class Country extends Component {
    state = {
        name: this.props.country.name,
        golds: this.props.country.golds,
        silvers: this.props.country.silvers,
        bronzes: this.props.country.bronzes,
    }

    renderMedals(medals) {

        return (medals === undefined || medals === null ? 0 : medals);
    }

    // helper method


    render() {
        const { country, GAdd, SAdd, BAdd, GRemove, SRemove, BRemove } = this.props;
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
                        <Card sx={{ width: 400, display: "flex", justifyContent: "flex-center", margin: 2, bgcolor: grey[50] }}  >
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {country.name}
                                </Typography>
                                <hr></hr>
                                <Typography variant="body2">
                                    <Grid container spacing={2} align="center">
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: yellow[500], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(country.golds)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={() => GRemove(country.id)} /> <AddCircleOutline onClick={() => GAdd(country.id)} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: grey[400], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(country.silvers)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={() => SRemove(country.id)} /> <AddCircleOutline onClick={() => SAdd(country.id)} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4} align="center">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8} align="center">
                                                    <Avatar sx={{ bgcolor: amber['A700'], width: 80, height: 80, fontSize: 60 }}>{this.renderMedals(country.bronzes)}</Avatar>
                                                </Grid>
                                                <Grid item xs={8} align="center">
                                                    <RemoveCircleOutlineIcon onClick={() => BRemove(country.id)} /> <AddCircleOutline onClick={() => BAdd(country.id)} />
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