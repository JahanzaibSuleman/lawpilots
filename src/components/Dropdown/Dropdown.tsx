import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DropdownItemProps, DropdownProps } from './types';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100px;
`;

const DropdownButton = styled.button`
  background-color: #f8f8f8;
  color: #333333;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li<DropdownItemProps>`
  padding: 10px;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #e7e7e7;
    `}

  &:hover {
    background-color: #dddddd;
  }
`;

/** 
 * A dropdown component that allows selecting an option from a list.
 * 
 * */
export const Dropdown: React.FC<DropdownProps> = ({ options = [''], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect();
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem isSelected={selectedOption === option} key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
