import { css, Global } from "@emotion/react";

const fontsStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css");
`;

export function GlobalStyle() {
  return <Global styles={fontsStyle} />;
}
