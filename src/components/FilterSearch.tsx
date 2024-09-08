import React from 'react'
import searchIcon from '/search.svg'

interface FilterSearchProps {
  search: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterSearch: React.FC<FilterSearchProps> = ({
  search,
  onSearchChange,
}) => {
  return (
    <div
      style={{
        width: '829px',
        height: '50px',
        padding: '15px',
        borderRadius: '12px',
        boxShadow: '0px 4px 50px 0px #6F6F6F1A',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={searchIcon}
        alt=''
        style={{
          marginRight: '5px',
        }}
      />
      <input
        type='search'
        placeholder='Search'
        value={search}
        onChange={onSearchChange}
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          padding: '15px',
          outline: 'none',
          fontFamily: 'Inter',
          fontWeight: 300,
        }}
      />
    </div>
  )
}

export default FilterSearch
