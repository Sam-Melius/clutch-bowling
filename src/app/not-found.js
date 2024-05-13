"use client";

import { useEffect } from "react";
import LinkButton from "./components/Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";
import HeadingAndBreadcrumbs from "./components/HeadingAndBreadcrumbs";
import GridlinesSection from "./components/GridlinesSection";
import GradientSection from "./components/GradientSection";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="404 Not Found" />
      <section>
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 p-10 lg:py-20">
            <div className="flex flex-col gap-5 lg:w-1/2">
              <h4 className="text-7xl 2xl:text-8xl">
                Sorry, we can't find that page.
              </h4>
              <LinkButton
                variant="secondary"
                linkText="Go home"
                linkTo="/"
                icon={<FaArrowRight />}
              />
            </div>
          </div>
        </div>
      </section>

      <GradientSection variant="dark" size="small" isRotated />
      <GridlinesSection
        variant="small"
        heading="Want to get in touch?"
        linkText="Contact us"
        isContact
      />
      <GradientSection variant="dark" size="small" />
    </main>
  );
}
