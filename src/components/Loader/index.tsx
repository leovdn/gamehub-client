import React from 'react'
import styled, { css } from 'styled-components'

export default function Loading() {
  return <Loader />
}

const Loader = styled.div`
  ${({ theme }) => css`
    border: 16px solid ${theme.colors.lightBg}; /* Light grey */
    border-top: 16px solid ${theme.colors.primary}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: auto;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
