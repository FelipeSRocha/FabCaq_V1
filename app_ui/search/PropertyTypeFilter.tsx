"use client";

import {
  Button,
  Popper,
  Paper,
  ClickAwayListener,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useRef, useState } from "react";

const propertyTypes = [
  "Apartamento",
  "Casa",
  "Casa de Condomínio",
  "Kitnet/Studio",
];

const PropertyTypeFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        ref={buttonRef}
        variant="outlined"
        onClick={handleToggle}
        sx={{
          borderRadius: 999,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Tipos de imóvel
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ zIndex: 1200 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper elevation={3} sx={{ p: 2, width: 240, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Tipos de imóvel
            </Typography>
            <Stack spacing={1}>
              {propertyTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  control={
                    <Checkbox
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleChange(type)}
                    />
                  }
                  label={type}
                />
              ))}
            </Stack>
            <Divider sx={{ my: 1.5 }} />
            <Button
              onClick={handleClose}
              sx={{
                color: "primary.main",
                textTransform: "none",
                fontWeight: "bold",
                px: 0,
              }}
            >
              Atualizar resultados
            </Button>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default PropertyTypeFilter;
