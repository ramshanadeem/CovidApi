import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import MediCard from './MediCard';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    const [data, setdata] = useState({})

    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api')
            .then((res) => {
                console.log(res.data)
                setConfirmed(res.data.confirmed.value);
                setRecovered(res.data.recovered.value);
                setDeath(res.data.deaths.value);
                setdata({
                    confirmed,
                    recovered,
                    deaths
                })
            })

    }, [])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={2}>
                    <MediCard text='Confirmed Cases' value={confirmed} color='blue' />
                    <MediCard text='Recoverd Cases' value={recovered} color='green' />
                    <MediCard text='Death Cases' value={deaths} color='yellow' />
                </Grid>
                <Grid item xs={6}>
                    <Doughnut data={{
                        labels: ['confirmed', 'Recovered', 'Deaths'], //x-axis
                        datasets: [
                            {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                data: [confirmed, recovered, deaths], //y-axis
                            },
                        ],
                    }} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Api