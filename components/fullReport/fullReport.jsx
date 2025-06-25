import React from 'react';
import owner from '../../app/assets/full-report/Icone.png';
import Group from '../../app/assets/full-report/check.svg';
import Search from '../../app/assets/full-report/Search.svg';
import Group_tree from '../../app/assets/full-report/Group-tree.svg';
import Contact_Info from '../../app/assets/full-report/Contact-Info.svg';
import Social_media from '../../app/assets/full-report/Social_media.svg';
import Location from '../../app/assets/full-report/Location.svg';
import Photos from '../../app/assets/full-report/Photos.svg';
import Pic_1 from '../../app/assets/full-report/Pic_1.svg';
import Pic_2 from '../../app/assets/full-report/Pic_2.svg';
import Pic_3 from '../../app/assets/full-report/Pic_3.svg';
import Pic_4 from '../../app/assets/full-report/Pic_4.svg';
import Education from '../../app/assets/full-report/Education.svg';
import Other_information from '../../app/assets/full-report/Other_information.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';


function FullReport() {
  const {t} = useTranslation();
  return (
    <div className="pt-[110px]">
      {/* <!-- Dashboard Grid --> */}
      <div className="max-w-[1290px] mx-auto my-0 px-[15px]">
        {/* <!-- Header --> */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[64px]  max-md:text-[32px]  max-xl:text-[48px]  font-bold leading-[1.09375] tracking-[-1.92px] text-gray-900 ">
            Get the Full Report with <span className="text-blue-500">Findfast</span>
          </h2>
        </div>
        <div className="w-[calc(100%_+_12.5px)] flex items-center mr-[-12.5pX] max-md:hidden">

              {/* <!-- Owner's Details Card --> */}   {/* Relationships & Associates */}
          <div className="max-w-1/4 basis-1/4 pe-[12px] py-0">
              {/* <!-- Owner's Details Card --> */}
            <div className="bg-white rounded-xl p-6 mb-[36px] shadow-[0_16px_16px_#3392ff33] max-w-[305px]">
              <div className="mb-3">
                <div className="w-full inline-block align-top mb-4">
                  <Image src={owner} alt="owner" className="w-[48px]"/>
                </div>
                <h3 className="font-medium text-lg max-lg:text-[14px] leading-[1.334] text-gray-900">
                  Owner's Details
                </h3>
              </div>
              <div className="flex flex-col mb-1.5.5 text-sm text-gray-600 mb-4">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className="leading-4  max-lg:text-[11px] text-sm   font-normal">{t("PR_FULL_NAME")}</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className="leading-4 max-lg:text-[11px] text-sm  font-normal">Age</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span className="leading-4 max-lg:text-[11px] text-sm  font-normal">Gender</span>
                </div>
              </div>
              <Image
                className="rounded-[5px] w-[257px] h-[102px] object-cover"
                src={Search}
                alt="search"
              />
            </div>  


           {/* Relationships & Associates */}
            <div className="bg-white rounded-xl p-6  shadow-[0_16px_16px_#3392ff33] max-w-[305px]">
              <div className="mb-3">
                <div className="mb-4">
                  <Image src={Group_tree} alt="group_tree" />
                </div>

                <h3 className="font-semibold text-gray-900 max-lg:text-[14px]">Relationships & Associates</h3>
              </div>
              <div className="flex  flex-col text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className="text-sm max-lg:text-[11px] leading-3.5"> Jasmine Perez</span>
                </div>
                <div className="flex items-center">
                  <Image src={Group} />
                  <span className="text-sm max-lg:text-[11px] leading-3.5">John McLoud</span>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- Contact info --> */}     {/* <!-- SOCIAL MIDEA  --> */}

          <div className="max-w-1/4 basis-1/4 px-3 py-0">

              {/* <!-- Contact info --> */}
            <div className="bg-white rounded-xl max-w-[304px]  p-6  mb-6 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-3">
                <div className="mb-4">
                  <Image src={Contact_Info} alt="Contact_info" />
                </div>
                <h3 className=" text-gray-900 text-lg max-lg:text-[14px] leading-[1.33334] font-medium">Contact Info</h3>
              </div>
              
              <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm max-lg:text-[11px] leading-[normal]'>Phone Numbers</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-[11px] leading-[normal]'>Email Addresses</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-[11px] leading-[normal]'>Social Profiles</span>
                </div>
              </div>
              
            </div>

           {/* <!-- SOCIAL MIDEA  --> */}
            <div className="bg-white rounded-xl max-w-[304px]  p-6  mb-6 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-3">
                <div className="mb-4">
             <Image src={Social_media} alt="" />
                </div>
                <h3 className=" text-gray-900 text-lg max-lg:text-[14px] leading-[1.33334] font-medium">Social Media</h3>
              </div>
              <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm max-lg:text-[11px] leading-[1]'>Social Accounts</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-[11px] leading-[1]'>Dating Profiles</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-[11px] leading-[1]'>Photos</span>
                </div>
              </div>
            </div>

          </div>

                {/* <!-- Location Card=2 --> */}   {/* <!-- Relationships & Associates Card --> */}
         
          <div className="max-w-1/4 basis-1/4 px-[12px] py-0">
            {/* <!-- Location Card=2 --> */}
            <div className="bg-white rounded-xl max-w-[304px]  p-6  mb-6 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-3">
                <div className="mb-4">
             <Image src={Location} alt="" />
                </div> 
                <h3 className=" text-gray-900 text-lg max-lg:text-[14px] leading-[1.33334] font-medium">Location</h3>
              </div>
              <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm leading-[1]'>Current Address</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm leading-[1]'>Past Addresses</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm leading-[1]'>Co-Residents</span>
                </div>
              </div>
            </div>

            {/* <!-- Relationships & Associates Card --> */}
            <div className="bg-white rounded-xl shadow-[0_16px_16px_#3392ff33] p-6  md:col-span-2 lg:col-span-1 ">
              <div className=" mb-4">
                <div className="mb-[16px]">
                  <Image src={Photos} alt="Photos" />
                </div>
                <h3 className="font-semibold max-lg:text-[14px] text-gray-900">Possible Photos</h3>
              </div>
              <div className="flex gap-2">
                <div>
                  <Image src={Pic_1} alt="" className="mb-4" />
                  <Image src={Pic_2} alt="" />
                </div>
                <div>
                  <Image src={Pic_3} alt="" className="mb-4" />
                  <Image src={Pic_4} alt="" />
                </div>
              </div>
            </div>
          </div>

              {/* Education Background  */}  {/* <!-- Possible Photos Card --> */}

          <div className="max-w-1/4 basis-1/4 px-[12px] py-0">
          {/* Education Background  */}
          <div className="bg-white rounded-xl max-w-[304px]  p-6  mb-6 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-3">
                <div className="mb-4">
                  <Image src={Education} alt="Contact_info" />
                </div>
                <h3 className=" text-gray-900 text-lg max-lg:text-[14px] leading-[1.33334] font-medium">Education Background</h3>
              </div>
              <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm leading-[normal] max-lg:text-[11px]'>Education Details</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm leading-[normal] max-lg:text-[11px]'>Dating Profiles</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm leading-[normal] max-lg:text-[11px]'>Photos</span>
                </div>
              </div>
            </div>
             {/* <!-- Possible Photos Card --> */}
          <div className="bg-white rounded-xl max-w-[304px]  p-6  mb-6 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-3">
                <div className="mb-4">
             <Image src={Other_information} alt="" />
                </div>
                <h3 className=" text-gray-900 text-lg  max-lg:text-[14px] leading-[1.33334] font-medium">Other Information</h3>
              </div>
              <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm leading-[1] max-lg:text-[11px]'>onships & Associates</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm leading-[1] max-lg:text-[11px]'>Data Leak Checker</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm leading-[1] max-lg:text-[11px]'>More</span>
                </div>
              </div>
            </div>

           

          </div>




        </div>






























































































        {/* Responsive change 767 */}
        <div className="w-[calc(100%_+_12.5px)]  items-center mr-[-12.5px] max-md:flex-wrap hidden max-md:block">
          {/* <!-- Owner's Details Card --> */}
          <div className="max-w-1basisas25%]1/412px] py-0 max-md:max-w-full max-md:basis-full ">
            <div className="bg-white rounded-xl p-6 max-[480px]:p-5 mb-[36px] shadow-[0_16px_16px_#3392ff33] max-w-[305px] max-md:max-w-full max-md:flex max-md:justify-between ">
              <div>
                <div className="mb-2">
                  <div className="w-full inline-block align-top mb-4">
                    <Image src={owner} alt="owner" className="w-[48px] " />
                  </div>
                  <h3 className="font-medium text-[18px] leading-[1.334] text-gray-900">
                    Owner's Details
                  </h3>
                </div>
                <div className="flex flex-col mb-1.5.5 text-sm text-gray-600 mb-4 max-[480px]:!mb-0">
                  <div className="flex items-center mb-1.5 max-[480px]:!mb-0">
                    <Image src={Group} />
                    <span className="leading-4 font-normal">Full Name</span>
                  </div>
                  <div className="flex items-center mb-1.5">
                    <Image src={Group} />
                    <span className="leading-4 font-normal">Age</span>
                  </div>
                  <div className="flex items-center  ">
                    <Image src={Group} />
                    <span className="leading-4 font-normal">Gender</span>
                  </div>
                </div>
              </div>
              <Image
                className="  rounded-[5px] w-full max-md:w-[150px] max-md:h-[160px] max-md:object-cover max-md:rounded-[10px]"
                src={Search}
                alt="search"
              />
            </div>
          </div>
                       {/* Relationships & Associates */}         {/* Relationships & Associates */}  
          <div className="flex gap-6 w-full max-[480]:flex-col " >
            {/* Relationships & Associates */}
            <div className="bg-white rounded-xl p-6 max-[480px]:p-5  w-1/2 shadow-[0_16px_16px_#3392ff33] max-[480px]:w-full">
              <div className="mb-4">
                <div className="mb-4">
                  <Image src={Group_tree} alt="group_tree" />
                </div>

                <h3 className="font-semibold text-gray-900 text-lg  max-lg:text-[14px]">Relationships & Associates</h3>
              </div>
              <div className="flex  flex-col gap-[13px] text-sm text-gray-600">
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span className="text-sm leading-3.5">Jasmine Perez</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span className="text-sm leading-3.5">John McLoud</span>
                </div>
              </div>
            </div>


            {/* Contact Info */}
            <div className="bg-white rounded-xl  p-6 max-[480px]:p-5  max-[480px]:w-full w-1/2 shadow-[0_16px_16px_#3392ff33]">
              <div className="mb-2.5">
                <div className="mb-4">
                  <Image src={Contact_Info} alt="Contact_info" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Contact Info</h3>
              </div>
             <div className=" text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='text-sm max-lg:text-sm leading-[normal]'>Phone Numbers</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-sm leading-[normal]'>Email Addresses</span>
                </div>
                <div className="flex items-center ">
                  <Image src={Group} />
                  <span  className='text-sm max-lg:text-sm leading-[normal]'>Social Profiles</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Relationships & Associates Card --> */}
          <div className="bg-white rounded-xl shadow-[0_16px_16px_#3392ff33] p-5 mb-[15px]  md:col-span-2 lg:col-span-1 flex justify-between">
            <div className=" mb-4">
              <div className="mb-[16px]">
                <Image src={Photos} alt="Photos" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Possible Photos</h3>
            </div>
            <div className="flex  gap-2">
              <div>
                <Image src={Pic_1} alt="" className="mb-3.5"/>
                <Image src={Pic_2} alt="" />
              </div>
              <div>
                <Image src={Pic_3} alt="" className="mb-3.5"/>
                <Image src={Pic_4} alt="" />
              </div>
            </div>
          </div>
          <div className="flex max-[480px]:flex-col gap-6 w-full mb-[15px]">
            {/* <!-- social meadia Card --> */}
            <div className="bg-white rounded-xl w-[50%] shadow-[0_16px_16px_#3392ff33] max-[480px]:p-5  max-[480px]:w-full   ">
              <div className="mb-2.5">
                <div className="mb-4">
                  <Image src={Social_media} alt="" />
                </div>
                <h3 className="font-bold lead text-gray-900 text-lg leading-[1.3334]">Social Media</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='leading-3.5'>Social Accounts</span>
                </div>
                <div className="flex items-center mb-1.5">                 
                  <Image src={Group} />
                  <span className='leading-3.5'>Dating Profiles</span>
                </div> 
                <div className="flex items-center">
                  <Image src={Group} />
                  <span className='leading-3.5'>Photos</span>
                </div>
              </div> 
            </div>
            {/* <!-- Location Card --> */}
          <div className="bg-white rounded-xl w-[50%] shadow-[0_16px_16px_#3392ff33] max-[480px]:p-5  max-[480px]:w-full   ">
              <div className="mb-2.5">
                <div className="mb-4">
                  <Image src={Location} alt=""/>
                </div>
                <h3 className="font-bold lead text-gray-900 text-lg leading-[1.33334]">Location</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='leading-3.5'>Current Address</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='leading-3.5'>Past Addresses</span>
                </div>
                <div className="flex items-center">
                  <Image src={Group} />
                  <span className='leading-3.5'>Co-Residents</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6  py-0  max-[480px]:flex-col  ">
           
           
            {/* <!-- Possible Photos Card --> */}
            <div className="bg-white rounded-xl w-[50%] shadow-[0_16px_16px_#3392ff33] max-[480px]:p-5  max-[480px]:w-full   ">
              <div className="mb-2.5">
                <div className="mb-4">
                  <Image src={Other_information} alt=""/>
                </div>
                <h3 className="font-bold lead text-gray-900 text-lg leading-[1.33334]">Other Information</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='leading-3.5'>Name & Ancestry</span>
                </div>
                <div className="flex items-center mb-1.5">
                  <Image src={Group} />
                  <span className='leading-3.5'>Data Leak Checker</span>
                </div>
                <div className="flex items-center">
                  <Image src={Group} />
                  <span className='leading-3.5'>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullReport;
