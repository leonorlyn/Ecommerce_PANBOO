import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CategoryFilter({ onFilterChange }) {
  const handleCheckboxChange = (type, value) => (event) => {
    onFilterChange(type, event.target.checked ? value : '');
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('color', 'Natural Wood')} />}
              label="Natural Wood"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('color', 'Light Coffee')} />}
              label="Light Coffee"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('color', 'Dark Charcoal')} />}
              label="Dark Charcoal"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Patterns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('pattern', 'Fine Grooves')} />}
              label="Fine Grooves"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('pattern', 'Prominent Waves')} />}
              label="Prominent Waves"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('pattern', 'Subtle Waves')} />}
              label="Subtle Waves"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange('pattern', 'Smooth Surface')} />}
              label="Smooth Surface"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      {/* Repeat for other categories such as 'Size' */}
    </div>
  );
}

export default CategoryFilter;
