import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  gap: 10px;

  > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  > span::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: #b3d7ff;
  }

  > input:not(:disabled):active + span::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  > input:focus + span::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  > input:focus:not(:checked) + span::before {
    border-color: #80bdff;
  }

  > input:checked + span::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  > textarea + input:checked {
    display: flex;
  }

  > input:disabled + span::before {
    background-color: #e9ecef;
  }

  > input:checked + TextAreaCheckBox {
    display: flex;
  }
`;
