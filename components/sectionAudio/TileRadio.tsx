import LiveRadios from '@/data/dataRadio'
import React from 'react'

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
console.log( LiveRadios )

export const TileRadio = () => {
  return (
		<div>
			{LiveRadios.map((radio, index) => (
				<div key={index}>
					<Card sx={{marginBottom: "10px"}}>
						<CardActionArea sx={{ display: "flex",  }}>
							<CardMedia
								component="img"
								alt={radio.nameRadio}
								sx={{ width: 100, height: 100, mx: "auto", my: "auto" }}
								image={radio.image}
							/>
							<CardContent sx={{ width: 300 }}>
								<Typography variant="h6" component="div">
									{radio.nameRadio}
								</Typography>
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
