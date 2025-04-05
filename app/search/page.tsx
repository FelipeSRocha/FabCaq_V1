"use client";
import MainBanner from "@/app_ui/MainBanner";
import SideMenu from "@/app_ui/search/SideMenu";
import { Box, Stack } from "@mui/material";
import React from "react";

import { Grid2 } from "@mui/material";
import PropertyCard, { Property } from "../../app_ui/search/PropertyCard";

const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento no Paraíso",
    description:
      "Aluguel de apartamento mobiliado, de 55 m² com 1 quarto e 1 banheiro em Paraíso.",
    priceTotal: "R$ 3.757",
    priceRent: "R$ 3.100",
    area: "55 m²",
    rooms: "1 quarto",
    address: "Rua Desembargador Eliseu Guilherme, Paraíso · São Paulo",
    image: "https://via.placeholder.com/300x180.png?text=Apto+1", // troque para imagem real
    tags: ["Exclusivo", "Em breve"],
  },
  {
    id: "2",
    title: "Santa Cecília",
    description:
      "Aluguel de apartamento mobiliado, de 57 m² com 1 quarto e 1 banheiro em Santa Cecília.",
    priceTotal: "R$ 3.460",
    priceRent: "R$ 2.600",
    area: "57 m²",
    rooms: "1 quarto",
    address: "Alameda Barros, Santa Cecília · São Paulo",
    image: "https://via.placeholder.com/300x180.png?text=Apto+2",
    tags: ["Exclusivo", "Em breve"],
  },
  {
    id: "3",
    title: "Jardins - Av. Paulista",
    description: "Apartamento de 2 quartos para alugar.",
    priceTotal: "R$ 3.951",
    priceRent: "R$ 3.162",
    area: "80 m²",
    rooms: "2 quartos",
    address: "Avenida Paulista, Jardins · São Paulo",
    image: "https://via.placeholder.com/300x180.png?text=Apto+3",
    tags: ["Anúncio novo"],
  },
];

export default function RootPage() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Grid2 container spacing={3}>
        {properties.map((property) => (
          <Grid2 key={property.id} component="div">
            <PropertyCard {...property} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
