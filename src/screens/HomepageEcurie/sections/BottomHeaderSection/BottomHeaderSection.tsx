import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const BottomHeaderSection = (): JSX.Element => {
  // Data for the three information columns
  const infoColumns = [
    {
      number: "01",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu tincidunt vulputate nibh eleifend leo.",
    },
    {
      number: "02",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu volutpat risus proin justo sit.",
    },
    {
      number: "03",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mi massa nibh ante facilisis varius duis.",
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        {/* <Separator className="mb-4" /> */}

        <div className="flex flex-wrap gap-16 md:gap-22">
          {infoColumns.map((column, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 flex-1 min-w-[300px]"
            >
              <div className="font-['Playfair_Display',Helvetica] font-bold text-white text-[25px]">
                {column.number}
              </div>

              <h3 className="font-['Inter',Helvetica] font-bold text-white text-lg">
                {column.title}
              </h3>

              <p className="font-['Inter',Helvetica] font-normal text-white text-lg">
                {column.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
