import { css } from "@emotion/react";

const lgScreen = `@media (min-width: 900px)`;
export const searchBarWrapperStyles = css`
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  position: sticky;
  top: 0;
  z-index: 2;
  transition: all 300ms;

  margin-top: -20px;
  padding-top: 20px;
  display: grid;
  place-items: center;
`;

export const searchBarStyles = (scrolled = false) => css`
  border: none;
  outline: none;
  border-radius: 0;
  font-weight: bold;

  background-color: black;
  color: white;

  transition: all 300ms;

  width: 100%;
  ${scrolled ? "width: calc(100% + 20px)" : "calc(100% - 0px)"};
  border: solid 1.5px #1c1c20;

  &:focus {
    border-color: #494954;
  }

  font-size: 18px;
  height: 45px;
  padding: 4px 8px;
  ${lgScreen} {
    font-size: 22px;
    padding: 10px;
    height: 50px;
  }

  &::placeholder {
    color: #494954;
  }
`;
