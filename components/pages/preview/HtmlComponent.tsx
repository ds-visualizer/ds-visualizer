interface Props {
  htmlContent: string;
}

const HtmlComponent: React.FC<Props> = ({ htmlContent: mdxContent }) => {
  return (
    <div className="w-[45vw] min-h-screen">
      <div
        className="w-[47vw] blog overflow-scroll lg:text-lg text-gray-200 px-4 py-3 outline-none  h-screen resize-none ${className}"
        dangerouslySetInnerHTML={{ __html: mdxContent }}
      ></div>
    </div>
  );
};

export default HtmlComponent;
