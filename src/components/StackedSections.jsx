import PremiumRotateCenter from "../components/core/HomePage/FInanceSection";

import carSheet from "../assets/Images/sheet.jpg";
import pipe from "../assets/Images/pipe.jpg";
import toolFixture6 from "../assets/Images/toolFixture6.jpg";
import toolFixture7 from "../assets/Images/toolFixture7.jpg";

import machineries5 from "../assets/Images/mechineries5.jpg";
import press from "../assets/Images/press.png";
import printer from "../assets/Images/printer.png";
import single from "../assets/Images/single.png";

import productsBg from "../assets/Images/productsbg.jpg";
import machineryBg from "../assets/Images/productsbg1.jpg";

export default function StackedSections() {

    const productImages = [
        { img: toolFixture7, name: "Checking gauge" },
        { img: toolFixture6, name: "Welding Fixture" },
        { img: pipe, name: "Seat for defence" },
        { img: carSheet, name: "Seating" },
      ];
      
      const machineryImages = [
        { img: machineries5, name: "VMC machine" },
        { img: press, name: "Press Machine" },
        { img: printer, name: "Pipe bending machine" },
        { img: single, name: "Pneumatic Press Machine" },
      ];

  return (
    <div className="relative h-[200vh]">

      <section className="h-screen sticky top-0 z-10">
        <PremiumRotateCenter
          title="Our Products"
          images={productImages}
          bgImage={productsBg}
        />
      </section>

      <section className="h-screen sticky top-0 z-20 ">
        <PremiumRotateCenter
          title="Our Machinery"
          images={machineryImages}
          bgImage={machineryBg}
        />
      </section>

    </div>
  );
}

