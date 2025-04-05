"use client";

import { Box, Stack, Button, IconButton, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PropertyTypeFilter from "./PropertyTypeFilter";

const FilterSection = () => {
  const filterButton = () => {
    return (
      <Button variant="outlined" sx={{ borderRadius: 999, fontWeight: "bold" }}>
        Valor total
      </Button>
    );
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        paddingY: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={1.5}>
        {/* Localização */}
        <Button
          variant="outlined"
          startIcon={<RoomIcon />}
          sx={{ borderRadius: 999, textTransform: "none" }}
        >
          Qualquer lugar em São Paulo, SP
        </Button>

        <PropertyTypeFilter />

        {/* Filtros */}
        <Button variant="outlined" sx={{ borderRadius: 999 }}>
          Alugar
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, fontWeight: "bold" }}
        >
          Valor total
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, fontWeight: "bold" }}
        >
          Tipos de imóvel
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, color: "primary.main" }}
        >
          1+ quartos
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, fontWeight: "bold" }}
        >
          Vagas de garagem
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, color: "primary.main" }}
        >
          1+ banheiros
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 999, fontWeight: "bold" }}
        >
          Área
        </Button>

        {/* Separador */}
        <IconButton
          sx={{
            borderRadius: 999,
            backgroundColor: "white",
            boxShadow: 1,
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        {/* Mais filtros */}
        <Button
          variant="outlined"
          startIcon={<TuneIcon />}
          sx={{ borderRadius: 999 }}
        >
          Mais filtros
        </Button>

        {/* Criar alerta */}
        <Button
          variant="outlined"
          startIcon={<NotificationsNoneIcon />}
          sx={{ borderRadius: 999, fontWeight: "bold" }}
        >
          Criar alerta de imóvel
        </Button>
      </Stack>
    </Box>
  );
};

export default FilterSection;
