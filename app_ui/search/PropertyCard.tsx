"use client";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export interface Property {
  id: string;
  title: string;
  description: string;
  priceTotal: string;
  priceRent: string;
  area: string;
  rooms: string;
  address: string;
  image: string;
  tags?: string[];
}

const PropertyCard = ({
  title,
  description,
  priceTotal,
  priceRent,
  area,
  rooms,
  address,
  image,
  tags = [],
}: Property) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ borderRadius: 4 }}
        />
        {/* Tags */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ position: "absolute", top: 8, left: 8 }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              color="default"
              sx={{
                backgroundColor: "white",
                fontWeight: 600,
                fontSize: 11,
              }}
            />
          ))}
        </Stack>
      </Box>

      <CardContent sx={{ px: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={1}>
          {priceTotal}{" "}
          <Typography component="span" variant="body2">
            total
          </Typography>
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1}>
          {priceRent} aluguel
        </Typography>

        <Typography variant="body2" fontWeight="500">
          {area} · {rooms}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>

      <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
        <FavoriteBorderIcon />
      </IconButton>
    </Card>
  );
};

export default PropertyCard;
