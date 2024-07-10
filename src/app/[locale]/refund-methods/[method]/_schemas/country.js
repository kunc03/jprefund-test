// ini belum semua negara

import USA from '../_images/united-states-of-america.svg';
import ABK from '../_images/abkhazia.svg';
import AFG from '../_images/afghanistan.svg';

const country = [
  {
    value: 'USA',
    image: USA, // ini perlu di ganti
    listOfBanks: [
      'JPMorgan Chase & Co.',
      'Bank of America',
      'Wells Fargo & Co.',
      'Citigroup Inc.',
      'Goldman Sachs Group Inc.',
      'Morgan Stanley',
      'U.S. Bank',
      'PNC Financial Services',
    ],
  },
  {
    value: 'Abkhazia',
    image: ABK,
    listOfBanks: [],
  },
  {
    value: 'Afghanistan',
    image: AFG,
    listOfBanks: [],
  },
];

export { country };
