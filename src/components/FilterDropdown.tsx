import React from 'react'
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  FormGroup,
  FormControlLabel,
  Typography,
  SelectChangeEvent,
  Box,
} from '@mui/material'

interface FilterOption {
  label: string
  checked: boolean
}

interface FilterGroup {
  name: string
  options: FilterOption[]
}

interface FilterDropdownProps {
  selectedValues: string[]
  onChange: (selected: string[]) => void
}

const filters: FilterGroup[] = [
  {
    name: 'Status',
    options: [
      {label: 'All', checked: false},
      {label: 'Active', checked: false},
      {label: 'Upcoming', checked: false},
      {label: 'Past', checked: false},
    ],
  },
  {
    name: 'Level',
    options: [
      {label: 'Easy', checked: false},
      {label: 'Medium', checked: false},
      {label: 'Hard', checked: false},
    ],
  },
]

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  selectedValues,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    event.preventDefault()
  }

  const handleCheckboxChange = (groupIndex: number, optionIndex: number) => {
    const newSelectedValues = [...selectedValues]
    const optionLabel = filters[groupIndex].options[optionIndex].label

    if (newSelectedValues.includes(optionLabel)) {
      newSelectedValues.splice(newSelectedValues.indexOf(optionLabel), 1)
    } else {
      newSelectedValues.push(optionLabel)
    }

    onChange(newSelectedValues)
  }

  return (
    <Select
      multiple
      onChange={handleChange}
      value={selectedValues}
      label='Filter'
      displayEmpty
      inputProps={{'aria-label': 'Without label'}}
      renderValue={() => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography>
            {selectedValues.length > 0
              ? `Filter (${selectedValues.length})`
              : 'Filter'}
          </Typography>
        </Box>
      )}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 300,
            width: 250,
          },
        },
      }}
      sx={{
        '& .MuiSelect-select': {
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #EAEAEA',
          width: '130px',
          fontFamily: 'Inter',
          padding: '12.5px 14px',
          height: '50px',
        },
      }}
    >
      {filters.map((group, groupIndex) => (
        <MenuItem
          key={group.name}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Typography variant='subtitle1'>{group.name}</Typography>
          <FormGroup>
            {group.options.map((option, optionIndex) => (
              <FormControlLabel
                key={option.label}
                control={
                  <Checkbox
                    checked={selectedValues.includes(option.label)}
                    onChange={() =>
                      handleCheckboxChange(groupIndex, optionIndex)
                    }
                    onClick={(event) => event.stopPropagation()}
                  />
                }
                label={<ListItemText primary={option.label} />}
              />
            ))}
          </FormGroup>
        </MenuItem>
      ))}
    </Select>
  )
}

export default FilterDropdown
