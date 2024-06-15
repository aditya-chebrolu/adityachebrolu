import { css, keyframes } from "@emotion/react";

const lgScreen = `@media (min-width: 900px)`;

const scrollAnim = keyframes`
  from {   
    scale: 0.9;
    opacity: 0;
  }
  to { 
    scale: 1;
    opacity: 1;
  }
`;

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  position: relative;
  border: solid 1.5px #343841;
  /* scale: 0.9; */
  /* opacity: 0; */

  animation: ${scrollAnim} forwards linear;
  /* animation-timeline: scroll(); //block for y scroll ; inline for x scroll */
  /* animation-timeline: view(500px 0px); dist. from top and dist. from bottom */
  animation-timeline: view();
  animation-range: 0px 100px; //  start when top is 100px from bottom
  /* animation-range: cover; */
  /* animation-range-start: 0px; // start when elem top is 0px from bottom */
  /* animation-range-end: 100px; // end when elem top is 0px from bottom */
  /* animation-range: 0px 100px; // shorthand for start and end */
`;

export const descriptionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
  font-size: 14px;

  color: #c0c0c0;
  border-bottom: solid 1.5px #343841;
  background-color: #17181c;

  > div {
    > .highlighted {
      color: #318ce7;
    }
  }

  ${lgScreen} {
    font-size: 15px;
    padding: 10px 15px;
  }
`;

export const codeStyles = css`
  background-color: #0d0d0f;
  color: #dbdbdb;
  font-family: var(--code-font);
  font-size: 14px;
  padding: 6px 8px;
  line-height: 22px;
  overflow-x: auto;

  ${lgScreen} {
    padding: 10px 15px;
    line-height: 24px;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #343841;
    }
    &::-webkit-scrollbar-track {
      background: #0d0d0f;
    }
  }
`;
