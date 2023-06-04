function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Brendan's Weekly Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{' '}
          <span className="underline decoration-4 decoration-[#40e0d0]">a place to learn about</span>{' '}
          my development roadmap.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New service offers | Latest in my Portfolio | tools, articles and more!
      </p>
    </div>
  );
}
export default Banner