import Breadcrumbs from "./Breadcrumbs";

export default function HeadingAndBreadcrumbs({ pageHeading }) {
  return (
    <section className="flex flex-col gap-4 h-fit w-full relative pt-28">
      <h2 className="text-3xl md:text-6xl xl:text-7xl font-medium pt-5 px-5 lg:px-10">
        {pageHeading}
      </h2>
      <Breadcrumbs />
    </section>
  );
}
