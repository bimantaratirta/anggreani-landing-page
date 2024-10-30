import Dummy from "@/public/carousel1.jpg";
import Image from "next/image";

export default function Warehouse() {
  return (
    <div className="container flex flex-col px-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-bold">
          Types of products that we sell ROMBAK DESIGNNYA
        </div>
        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 justify-center mt-8">
          <div className="">
            <div className="text-lg font-bold">Batik Material</div>
            <ul className="list-disc list-inside">
              <li>Stamp Fabric - Design & Technical Color</li>
              <li>Spray Fabric - Technical Color Only</li>
            </ul>
          </div>
          <div className="">
            <div className="text-lg font-bold">Batik Material</div>
            <ul className="list-disc list-inside">
              <li>Fat Quarter</li>
              <li>Layer Cake</li>
              <li>Jelly Roll </li>
              <li>Charm Pack</li>
              <li>Fat Eight (F8)</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mt-16">Our Material Product</div>
          <div className="text-xl font-bold mt-16 mb-8">Material Only</div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>Free custom packing with the Bolt or Roll.</li>
                <li>Pricing per yard</li>
                <li>Minimum order 300 yards/design or colors</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mt-16">Our Precut Product</div>
          <div className="text-xl font-bold mt-16 mb-8">
            Fat Quarter Pack Bundle
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>40 strip Cotton Fabric Fat Quarter or Custom</li>
                <li>40 Color of Fabric Fat Quarter or Custom </li>
                <li>
                  Each Fat Quarter Measures Approximately 9&apos;x 22&apos;
                </li>
                <li>Pricing per Bundle</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
          <div className="text-xl font-bold mt-16 mb-8">
            Jelly Roll Pack Bundle
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>40 strip Cotton Fabric Fat Quarter or Custom</li>
                <li>40 Color of Fabric Fat Quarter or Custom </li>
                <li>
                  Each Fat Quarter Measures Approximately 21.5&apos; x 44&apos;
                </li>
                <li>Pricing per Bundle</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
          <div className="text-xl font-bold mt-16 mb-8">
            Layer Cake Pack Bundle
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>40 strip Cotton Fabric Fat Quarter or Custom</li>
                <li>40 Color of Fabric Fat Quarter or Custom </li>
                <li>
                  Each Fat Quarter Measures Approximately 10&apos; x 10&apos;
                </li>
                <li>Pricing per Bundle</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
          <div className="text-xl font-bold mt-16 mb-8">Charm Pack Bundle</div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>40 strip Cotton Fabric Fat Quarter or Custom</li>
                <li>40 Color of Fabric Fat Quarter or Custom </li>
                <li>
                  Each Fat Quarter Measures Approximately 5&apos; x 5&apos;
                </li>
                <li>Pricing per Bundle</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
          <div className="text-xl font-bold mt-16 mb-8">
            Fat Eight Bundle (F8)
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Detail</div>
              <ul className="list-disc list-inside">
                <li>Use 100% cotton in construction 40&apos;s or 50&apos;s</li>
                <li>Free Use our design or custom design</li>
                <li>Free custom coloration</li>
                <li>40 strip Cotton Fabric Fat Quarter or Custom</li>
                <li>40 Color of Fabric Fat Quarter or Custom </li>
                <li>
                  Each Fat Quarter Measures Approximately 9&apos; x 22&apos;
                </li>
                <li>Pricing per Bundle</li>
              </ul>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="text-lg font-bold mb-4">Sampling</div>
              <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
