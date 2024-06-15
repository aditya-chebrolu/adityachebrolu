import { css } from "@emotion/react";

export const pageStyles = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const sectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > .title {
    color: #fada5e;
    font-size: 18px;
  }

  &:not(:last-of-type) {
    border-bottom: solid 1px #232323;
    padding-bottom: 25px;
  }
`;
