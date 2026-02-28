import LeftHeader from './components/LeftHeader';

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <LeftHeader />
      <div></div>
      <div></div>
    </div>
  );
};

export default PageHeader;
