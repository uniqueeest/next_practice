'use client';

import { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { MPBoxDetail } from '../MPBoxDetail';

const CONTAINER_GAP = 'flex gap-[10px]';
const TEXT_STYLE = 'text-sm text-[#BDBDBD]';

// 테이블 더미 데이터
const tableHeaders = ['총 공약수', '완료', '추진중', '보류', '기타'];
const tableData = [
  { category: '공약수', details: ['/', '/', '/', '/', '/'] },
  { category: '비고', details: ['/', '/', '/', '/', '/'] },
];

export const MPBox = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative flex flex-col gap-[24px]">
      <article className="flex justify-start gap-[20px]">
        <div className="relative w-[104px] h-[104px] overflow-hidden rounded-xl border border-[#EEEEEE]">
          <Image src={'/mpImage.svg'} width={104} height={104} alt="mpImage" />
          <div className="absolute top-0 left-0 flex justify-center items-center w-[28px] h-[28px] bg-[#F3E8FF] rounded-br-xl text-[#A855F7]">
            1
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="font-semibold text-[24px]">김00</span>
            <div className="bg-[#FAF5FF] border px-3 py-1.5 h-fit text-[#9333EA] font-medium text-[14px] border-[#E9D5FF] rounded-xl">
              마포구을
            </div>
          </div>
          <div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>선거구</span>
              <span className="text-sm text-[#636363]">
                서울특별시 마포구을
              </span>
            </div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>공약이행률</span>
              <span className="text-sm">
                <span className="text-[#9333EA] font-bold">80%</span>(4/5개)
              </span>
            </div>
            <div className={twMerge(CONTAINER_GAP)}>
              <span className={twMerge(TEXT_STYLE)}>소속</span>
              <span className="text-sm text-[#636363]">더불어민주당</span>
            </div>
          </div>
        </div>
      </article>
      <button
        className="absolute bottom-0 right-0 w-[33px] h-[28px] rounded-tl-xl rounded-br-xl bg-[#9333EA] text-white cursor-pointer"
        onClick={handleToggleClick}
      >
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <MPBoxDetail tableHeaders={tableHeaders} tableData={tableData} />
      )}
    </section>
  );
};
