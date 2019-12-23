import MarkdownIt from 'markdown-it';
import { Parser as HtmlToReactParser } from 'html-to-react';

const markdownParser = new MarkdownIt();
const htmlToReactParser = new HtmlToReactParser();

export const toReactElement = (markdown) => {
  const htmlRaw = markdownParser.render(markdown);
  const reactElement =  htmlToReactParser.parse(htmlRaw);

  return reactElement;
}