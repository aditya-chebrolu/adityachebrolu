import SearchBar from "./search-bar";
import CodeBlock from "./code-block";
import { pageStyles, sectionStyles } from "./styles";
import { useCallback, useState } from "react";

export type PostType = {
  title: string;
  language: string;
  tags: string[];
  sections: {
    subtitle: string;
    snippets: {
      code: string;
      description: string | string[];
      codeHtml?: string | undefined;
    }[];
  }[];
};

type Props = {
  data: PostType;
};

const PostPage = ({ data }: Props) => {
  const [post, setPost] = useState(data);

  const filterData = useCallback(
    (searchTerm: string) => {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filteredSections = [];
      for (const subsection of data.sections) {
        const filteredSnippets = [];
        for (const snippet of subsection.snippets) {
          if (
            typeof snippet.description === "string" &&
            snippet.description.toLowerCase().includes(lowercasedTerm)
          ) {
            filteredSnippets.push(snippet);
          } else if (
            typeof snippet.description === "object" &&
            snippet.description.some((desc) => desc.includes(lowercasedTerm))
          ) {
            filteredSnippets.push(snippet);
          } else if (snippet.code.toLowerCase().includes(lowercasedTerm)) {
            filteredSnippets.push(snippet);
          }
        }
        if (filteredSnippets.length > 0) {
          filteredSections.push({
            ...subsection,
            snippets: filteredSnippets,
          });
        }
      }
      return {
        ...data,
        sections: filteredSections,
      };
    },
    [data]
  );

  const onSearch = (e: any) => {
    if (!data) return;
    const val = e.target.value;
    setPost(filterData(val));
  };

  return (
    <div css={pageStyles}>
      <SearchBar title={post.title} onSearch={onSearch} />
      {post.sections.map((section, idx) => (
        <Section section={section} key={idx} />
      ))}
    </div>
  );
};

const Section = ({ section }: { section: PostType["sections"][number] }) => {
  return (
    <div css={sectionStyles}>
      <div className="title">{section.subtitle}</div>
      {section.snippets.map((snippet, idx) => (
        <CodeBlock snippet={snippet} key={idx} />
      ))}
    </div>
  );
};

export default PostPage;
