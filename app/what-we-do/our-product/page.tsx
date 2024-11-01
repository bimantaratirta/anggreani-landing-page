import Dummy from "../../../public/carousel1.jpg";
import Image from "next/image";
import HeaderImage from "../../../public/image/our-product.jpg";

const datas = [
  {
    title: "Fat Quarter Pack Bundle",
    details: [
      "Use 100% cotton in construction 40's or 50's",
      "Free Use our design or custom design",
      "Free custom coloration",
      "40 strip Cotton Fabric Fat Quarter or Custom",
      "40 Color of Fabric Fat Quarter or Custom",
      "Each Fat Quarter Measures Approximately 9'x 22'",
      "Pricing per Bundle",
    ],
  },
  {
    title: "Jelly Roll Pack Bundle",
    details: [
      "Use 100% cotton in construction 40's or 50's",
      "Free Use our design or custom design",
      "Free custom coloration",
      "40 strip Cotton Fabric Fat Quarter or Custom",
      "40 Color of Fabric Fat Quarter or Custom",
      "Each Fat Quarter Measures Approximately 21.5' x 44'",
      "Pricing per Bundle",
    ],
  },
  {
    title: "Layer Cake Pack Bundle",
    details: [
      "Use 100% cotton in construction 40's or 50's",
      "Free Use our design or custom design",
      "Free custom coloration",
      "40 strip Cotton Fabric Fat Quarter or Custom",
      "40 Color of Fabric Fat Quarter or Custom",
      "Each Fat Quarter Measures Approximately 10' x 10'",
      "Pricing per Bundle",
    ],
  },
  {
    title: "Charm Pack Bundle",
    details: [
      "Use 100% cotton in construction 40's or 50's",
      "Free Use our design or custom design",
      "Free custom coloration",
      "40 strip Cotton Fabric Fat Quarter or Custom",
      "40 Color of Fabric Fat Quarter or Custom",
      "Each Fat Quarter Measures Approximately 5' x 5'",
      "Pricing per Bundle",
    ],
  },
  {
    title: "Fat Eight Bundle (F8)",
    details: [
      "Use 100% cotton in construction 40's or 50's",
      "Free Use our design or custom design",
      "Free custom coloration",
      "40 strip Cotton Fabric Fat Quarter or Custom",
      "40 Color of Fabric Fat Quarter or Custom",
      "Each Fat Quarter Measures Approximately 9' x 22'",
      "Pricing per Bundle",
    ],
  },
];

export default function OurProduct() {
  return (
    <div className="flex flex-col w-screen">
      <div className="relative w-full aspect-[20/9]">
        <Image
          src={HeaderImage}
          alt={""}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-center font-bold text-4xl">
            Types of products that we sell
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center bg-blue-900">
        <div className="flex-1 p-8 bg-blue-900 text-white">
          <div className="text-2xl font-bold text-center mb-4">
            Batik Material
          </div>
          <div className="flex flex-col justify-center items-center text-lg font-bold">
            <div>Stamp Fabric - Design & Technical Color</div>
            <div>Spray Fabric - Technical Color Only</div>
          </div>
        </div>
        <div className="w-[75%] md:w-[3px] h-[3px] md:h-[200px] bg-white bg-opacity-75 self-center" />
        <div className="flex-1 p-8 bg-blue-900 text-white">
          <div className="text-2xl font-bold text-center mb-4">
            Batik Material
          </div>
          <div className="flex flex-col justify-center items-center text-lg font-bold">
            <div>Fat Quarter</div>
            <div>Layer Cake</div>
            <div>Jelly Roll </div>
            <div>Charm Pack</div>
            <div>Fat Eight (F8)</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center max-w-[70%]">
            <div className="text-2xl text-center font-bold mt-16 mb-8 w-full rounded-lg shadow-lg py-4 text-white bg-blue-900">
              Our Material Product
            </div>
            <div className="card bg-white p-8 rounded-lg shadow-lg w-full">
              <div className="text-xl font-bold mb-8 text-center md:text-left">
                Material Only
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center flex-1">
                  <div className="flex gap-4 flex-col md:flex-row">
                    <div className="relative w-[150px] h-[200px]">
                      <Image
                        src={Dummy}
                        alt="sample1"
                        layout="fill"
                        objectFit="cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="relative w-[150px] h-[200px]">
                      <Image
                        src={Dummy}
                        alt="sample1"
                        layout="fill"
                        objectFit="cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <ul className="list-disc list-inside">
                    <li>
                      Use 100% cotton in construction 40&apos;s or 50&apos;s
                    </li>
                    <li>Free Use our design or custom design</li>
                    <li>Free custom coloration</li>
                    <li>Free custom packing with the Bolt or Roll.</li>
                    <li>Pricing per yard</li>
                    <li>Minimum order 300 yards/design or colors</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* sparator */}
            <div className="text-2xl text-center font-bold mt-16 mb-8 w-full rounded-lg shadow-lg py-4 text-white bg-blue-900">
              Our Precut Product
            </div>
            {datas.map((product, index) => (
              <div
                key={index}
                className="card bg-white p-8 rounded-lg shadow-lg mb-8 w-full"
              >
                <div className="text-xl font-bold mb-8 text-center md:text-left">
                  {product.title}
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center flex-1">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-[150px] h-[200px]">
                        <Image
                          src={Dummy}
                          alt="sample1"
                          layout="fill"
                          objectFit="cover"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="relative w-[150px] h-[200px]">
                        <Image
                          src={Dummy}
                          alt="sample1"
                          layout="fill"
                          objectFit="cover"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <ul className="list-disc list-inside">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
