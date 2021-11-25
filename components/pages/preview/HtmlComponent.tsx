interface Props {
  htmlContent: string;
}

const HtmlComponent: React.FC<Props> = ({ htmlContent: mdxContent }) => {
  return (
    <div className="h-full">
      <div
        className="blog h-full lg:text-lg px-4 py-3 outline-none   resize-none ${className}"
        dangerouslySetInnerHTML={{ __html: mdxContent }}
      ></div>
    </div>
  );
};

export default HtmlComponent;
