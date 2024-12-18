import Image from "next/image";
import { Cotton, SansFrans, SansFransBold } from "../utils/fonts";

export default function DaAward() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:place-items-center bg-njblue-500">
      <div className="relative h-20 xl:h-fit">
        <div className="grid grid-cols-3 place-items-center">
          <div className="col-span-1 relative">
            <Image
              src="/assets/image/me_hanbok.png"
              width={600}
              height={600}
              alt="me_hanbok"
              className="block lg:translate-x-14 -rotate-12 lg:opacity-75 w-44 opacity-30 lg:translate-y-0 translate-y-64 translate-x-32  "
            />
            <Image
              src="/assets/image/me_ydp.png"
              width={600}
              height={600}
              alt="me_hanbok"
              className="block absolute lg:top-8 w-52 rotate-12 left-96 lg:opacity-60 lg:left-72 opacity-30 top-52"
            />
          </div>
          <div
            className={`relative rotate-6 ${Cotton.className} -translate-y-44 lg:-translate-y-16 text-6xl md:text-7xl lg:text-8xl lg:-translate-x-36`}
          >
            <p className={`text-white absolute opacity-20 left-2`}>Award</p>
            <p className={`text-white absolute top-4`}>Award</p>
            <p className={`text-white absolute top-8 opacity-25 left-1`}>
              Award
            </p>
          </div>
        </div>
        <Image
          src={`/assets/image/camera_retro.png`}
          width={700}
          height={700}
          alt="camera_retro"
          className="w-8 absolute right-4 rotate-6 -bottom-4"
        />
        <Image
          src={`/assets/image/bubble_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-5 absolute right-56 bottom-3"
        />
        <Image
          src={`/assets/image/dot_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-2 absolute right-24 -bottom-2"
        />
        <Image
          src={`/assets/image/star_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-8 absolute right-16 bottom-20"
        />
      </div>

      <div className="lg:p-12 md:p-8 rounded-md">
        <div className="">
          <div className={`${SansFrans.className} text-white max-w-lg mx-auto`}>
            <div className="pb-3 pt-3 grid grid-cols-3 border-t-2 border-white bg-white text-njblue-500 rounded-t-lg">
              <div className="px-2">&lt;</div>
              <p className="w-full text-center">정휘영 (Ryan)</p>
            </div>

            <div className="border-2 border-white rounded-b-lg">
              <div className="px-3 py-5 text-njblue-700 grid grid-cols-1 gap-y-4">
                {" "}
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/third_place.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      3rd Place - hackjakarta 2024
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Grab, hackglobal
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 7/24
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/first_place.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Global Nomination 1 - 2023 Space Apps Challenge
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      NASA Space Apps Jakarta
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 10/23
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/graduation_cap.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Awardee - Global Korea Scholarship (GKS) Non-degree
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Korea Ministry of Education
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 4/23
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/first_place.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      1st Winner - Hackathon SoCS
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      School of Computer Science Binus University
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 11/22
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/first_place.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      1st Winner - Techfest Exhibition Competition
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      HIMTI Binus University
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 12/22
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/graduation_cap.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Awardee - Beasiswa SejutaCita Batch 1
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      SejutaCita Indonesia
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 4/21
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/trophy.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Winner - Friendship Without Barriers Poster Competition
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Friends Care Community (FCC) Binus University
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 9/22
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/puzzle.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Participant - International Community Development Program
                      (ICDP)
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Binus University
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 8/22
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
              </div>

              <div className="flex bg-white rounded-full p-2 m-2 items-center">
                <p className=" text-gray-400 flex-1 px-2">Send message</p>
                <div className="bg-white rounded-full text-gray-400">
                  <Image
                    src={`/assets/image/ios_send.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="w-8 aspect-square"
                    priority
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
