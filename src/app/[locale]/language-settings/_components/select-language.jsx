'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { useState } from 'react';

const SelectLanguage = () => {
  const t = useTranslations('languageSettings');
  const [selectedFinancialInstituteName, setSelectedFinancialInstituteName] =
    useState(null);

  const languages = {
    english: 'english',
    japanese: 'japanese',
    chinese: 'chinese',
    korean: 'korean',
  };

  return (
    <div className="w-full">
      <ul className="list-none pl-17.5">
        {Object.keys(languages).map((language) => (
          <li
            key={language}
            onClick={() => setSelectedFinancialInstituteName(language)}
            aria-hidden="true"
          >
            <div className="flex h-58 cursor-pointer flex-row items-center justify-between border-b border-b-gray-500 py-22.5 pl-8">
              <p className="text-1613 font-medium text-black">{t(language)}</p>

              {selectedFinancialInstituteName === language && (
                <Image
                  alt="checklist"
                  height={18}
                  src="/icons/checklist.svg"
                  width={18}
                  className="size-auto pr-22.5"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SelectLanguage };
