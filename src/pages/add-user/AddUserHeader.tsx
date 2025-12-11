type AddUserHeaderProps = {
  title: string;
};

const AddUserHeader: React.FC<AddUserHeaderProps> = ({ title }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-blue-900 mb-2">{title}</h2>
      <h4 className="text-sm font-normal text-gray-600 mb-6">
        A sub-heading is a mini-headline given to a subsection or paragraph
        within a main piece of writing. They're smaller than the main headline
        but larger than the paragraph text of the article.
      </h4>
    </>
  );
};

export default AddUserHeader;
