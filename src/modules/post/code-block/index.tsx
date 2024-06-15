import type { PostType } from "..";
import { codeStyles, containerStyles, descriptionStyles } from "./styles";

type Props = {
  snippet: PostType["sections"][number]["snippets"][number];
};

const CodeBlock = ({ snippet }: Props) => {
  const { description, codeHtml } = snippet;

  return (
    <div css={containerStyles}>
      <div css={descriptionStyles}>
        {typeof description === "string" && <div>{description}</div>}
        {typeof description === "object" &&
          description.map((desc, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
      </div>
      <div
        css={codeStyles}
        dangerouslySetInnerHTML={{
          __html: codeHtml!,
        }}
      />
    </div>
  );
};

export default CodeBlock;
