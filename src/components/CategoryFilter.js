import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function CategoryFilter({ onFilterChange }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Color</InputLabel>
        <Select
          label="Color"
          defaultValue=""
          onChange={(e) => onFilterChange('color', e.target.value)}
        >
          <MenuItem value="">All Colors</MenuItem>
          <MenuItem value="Natural Wood">Natural Wood</MenuItem>
          <MenuItem value="Light Coffee">Light Coffee</MenuItem>
          <MenuItem value="Dark Charcoal">Dark Charcoal</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Pattern</InputLabel>
        <Select
          label="Pattern"
          defaultValue=""
          onChange={(e) => onFilterChange('pattern', e.target.value)}
        >
          <MenuItem value="">All Patterns</MenuItem>
          <MenuItem value="Fine Grooves">Fine Grooves</MenuItem>
          <MenuItem value="Prominent Waves">Prominent Waves</MenuItem>
          <MenuItem value="Subtle Waves">Subtle Waves</MenuItem>
          <MenuItem value="Smooth Surface">Smooth Surface</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CategoryFilter;
