import { css } from "@emotion/react";

const coloredBox = css`
  width: 100px;
  height: 100px;
  background-color: #5f0080;
  color: white;
`;

export default function StaticComp() {
  return <div css={coloredBox}>스태틱</div>;
}
