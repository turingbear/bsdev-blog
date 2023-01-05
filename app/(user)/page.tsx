import { previewData } from 'next/headers';

function HomePage() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
}
export default HomePage;
