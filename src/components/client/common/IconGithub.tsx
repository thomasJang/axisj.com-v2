"use client";
import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  size?: string;
  onClick?: () => void;
}

export function IconGithub({ size, onClick }: Props) {
  return (
    <Container size={size} onClick={onClick}>
      <svg viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.3997 -0.017334C6.43727 -0.017334 -0.0175781 6.43751 -0.0175781 14.4C-0.0175781 22.3624 6.43727 28.8173 14.3997 28.8173C22.3622 28.8173 28.817 22.3624 28.817 14.4C28.817 6.43751 22.3622 -0.017334 14.3997 -0.017334ZM2.81702 14.4C2.81702 8.00302 8.00277 2.81727 14.3997 2.81727C20.7967 2.81727 25.9824 8.00302 25.9824 14.4C25.9824 19.5928 22.5651 23.9876 17.8567 25.458C17.206 25.4398 17.3998 24.6001 17.3998 24.6001V22.3001C17.3998 20.0001 16.5998 19.5001 16.5998 19.5001C16.5998 19.5001 20.5998 19.5001 21.5998 16.0001C22.5998 12.4001 20.6998 10.6001 20.6998 10.6001C21.2998 8.80009 20.5998 7.50009 20.5998 7.50009C19.1998 7.30009 17.3998 8.70009 17.3998 8.70009C14.3998 7.80009 11.5998 8.70009 11.5998 8.70009C9.79978 7.30009 8.39978 7.50009 8.39978 7.50009C7.69978 9.00009 8.29978 10.6001 8.29978 10.6001C8.29978 10.6001 6.19978 12.4001 7.49978 16.4001C8.49978 19.4001 12.2998 19.5001 12.2998 19.5001C12.2998 19.5001 11.6998 20.0001 11.6998 21.0001C11.6998 21.0001 10.9998 21.3001 10.2998 21.3001C9.59978 21.3001 8.99978 21.3001 8.29978 20.1001C7.59978 18.9001 6.59978 18.9001 6.39978 18.9001C6.19978 18.9001 5.79978 19.1001 6.19978 19.4001C6.59978 19.7001 7.19978 20.2001 7.49978 20.9001C7.51637 20.9388 7.53327 20.979 7.55071 21.0206C7.84861 21.7301 8.30486 22.8167 10.0998 23.1001C10.5998 23.2001 11.5998 23.0001 11.5998 23.0001V24.9001C11.5998 24.9001 11.6841 25.4061 11.3106 25.5662C6.41337 24.2144 2.81702 19.7272 2.81702 14.4ZM13.3353 25.9344C13.6858 25.9663 14.0409 25.9827 14.3997 25.9827C14.5379 25.9827 14.6756 25.9802 14.8126 25.9754L13.3353 25.9344Z'
          fill='white'
        />
      </svg>
    </Container>
  );
}

const Container = styled.div<Props>`
  cursor: pointer;
  svg {
    width: ${(props) => (props.size ? `${props.size}` : "100%")};
    height: ${(props) => (props.size ? `${props.size}` : "100%")};
  }
`;