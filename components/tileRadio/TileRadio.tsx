import { LiveRadios } from '@/data/dataRadio'
import React, { useContext, useEffect, useState } from 'react'

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';
import { DataContext } from '@/context';
const RadioBrowser = require('radio-browser')

import { onIndicator, offIndicator } from "@/public/images/index";

export const TileRadio = () => {

	const { radioSet, setRadioSet } = useContext(DataContext)

	const stationFilter = "all"

	const setupApi = async (stationFilter: any) => {
        const api = RadioBrowser

        const stations = await api
            .searchStations({
                language: "",
                tag: stationFilter,
                limit: 1000,
            })
            .then((data: any) => {
                // console.log(data);
                return data;
            });

        return stations;
    };

	setupApi("all");

	return (
			<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
				{LiveRadios.map((radio, index) => (
					<div key={index}>
						<Card sx={{marginBottom: "10px", marginLeft: "10px", backgroundColor: "#1a313f"}}>
							<CardActionArea
								sx={{ display: "flex",  }}
								onClick={() => setRadioSet(radio)}
							>
								<CardMedia
									component="img"
									alt={radio.nameRadio}
									sx={{ width: 90, height: 90, mx: "auto", my: "auto", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}
									image={radio.image}
								/>
								<CardContent sx={{ width: 300 }}>
									<div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
										<Typography variant="h6" component="div">
											{radio.nameRadio}
										</Typography>
										<img
											src={(radioSet == radio)? onIndicator.src : offIndicator.src}
											alt="is on" width={10}
										/>
									</div>
									<Typography color="textSecondary" sx={{ fontSize: "14px", }}>
										{`Frecuencia: ${radio.frequency}`}
									</Typography>
									<Typography color="textSecondary" sx={{ fontSize: "14px", }}>
										{`Origen: ${radio.origin}`}
									</Typography>
									<Link
										href={radio.oficialPage}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											fontSize: "14px",
											color: "#84e5ec",
											'&:hover': {
												color: "#ffedad",
											},
										}}
									>
										Sitio web oficial
									</Link>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				))}
			</div>
		);
}
