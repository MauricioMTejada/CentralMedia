import { LiveRadios } from '@/data/dataRadio'
import React, { useContext, useEffect, useState } from 'react'

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { DataContext } from '@/context';

import onIndicator from "@/public/on_indicator2.png"
import offIndicator from "@/public/on_indicator3.png"

export const TileRadio = () => {

	const { radioSet, setRadioSet } = useContext(DataContext)


	return (
			<div>
				{LiveRadios.map((radio, index) => (
					<div key={index}>
						<Card sx={{marginBottom: "10px"}}>
							<CardActionArea
								sx={{ display: "flex",  }}
								onClick={() => setRadioSet(radio)}
							>
								<CardMedia
									component="img"
									alt={radio.nameRadio}
									sx={{ width: 100, height: 100, mx: "auto", my: "auto" }}
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
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				))}
			</div>
		);
}
