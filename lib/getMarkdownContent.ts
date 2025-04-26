import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getMarkdownContent(id: string) {
  const markdownPath = path.join(
    process.cwd(),
    "public",
    "markdowns",
    `${id}.md`
  );

  try {
    const fileContents = fs.readFileSync(markdownPath, "utf8");
    const { content } = matter(fileContents); // frontmatter 무시하고 content만
    return content;
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return "마크다운 파일을 찾을 수 없습니다.";
  }
}
