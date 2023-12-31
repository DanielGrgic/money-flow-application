export const USER_TYPE = {
  VIEW: 'Insert/View',
  INSERT: 'Insert',
  ADMIN: 'Admin'
};

export const BRAND_STPES = {
  BRAND_NAME: 'Insert Brand Name',
  CATEGORY_SELECT: 'Category Select',
  AGENT_SYSTEM_SELECT: 'Agent System Select',
  COUNTRY: 'Country',
  CURRENCY: 'Currency',
  SELLING: 'Selling',
  COMMENTS: 'Comments'
};

export const AGENT_STEPS = {
  AGENT_SELECT: 'Agent select',
  CATEGORY_SELECT: 'Select Category',
  AGENT_NAME: 'Agent Name',
  COUNTRY: 'Country',
  CURRENCY: 'Currency',
  SELLING: 'Selling',
  COMMENTS: 'Comments'
};

export const CATEGORY = {
  AGENT_SYSTEM: {
    title: 'Agent system',
    value: 'AGENT_SYSTEM'
  },
  API: {
    title: 'Api',
    value: 'API'
  },
  WHITE_LABEL: {
    title: 'White Label',
    value: 'WHITE_LABEL'
  },
  OTHER: {
    title: 'Other',
    value: 'OTHER'
  }
};

export const AGENT_SYSTEM = {
  SUPERMASTER: {
    title: 'Super Master',
    value: 2
  },
  MASTER: {
    title: 'Master',
    value: 3
  },
  AGENT: {
    title: 'Agent',
    value: 4
  }
};

export const KEY_IN_INCOME_STEPS = {
  SELECT_BRAND: 'Select Brand',
  SELECT_AGENT: 'Select Agent',
  SELECT_DATE: 'Select Date',
  SELECT_SUM: 'Select Sum',
  SELECT_PAYMENT_METHOD: 'Select Payment Method',
  SELECT_RECEIVED: 'Select Received',
  SELECT_COMMENTS: 'Select Comments'
};

export const KEY_IN_STEPS = {
  SELECT_BRAND: 'Select brand',
  SELECT_SUPPLIER: 'Select supplier',
  SELECT_DATE: 'Select date',
  SELECT_COUNTRY: 'Select country',
  SELECT_CURRENCY: 'Select currency',
  SELECT_EXPENSES_TYPE: 'Select expenses type',
  SELECT_SUM: 'Select sum',
  SELECT_PAYMENT_METHOD: 'Select payment method',
  SELECT_RECEIVED: 'Select received',
  SELECT_COMMENTS: 'Select comments'
};

export const KEY_IN_TYPE = {
  INCOME: 'Income',
  EXPENSES: 'Expenses'
};

export const RECEIVED_STATUS = {
  YES: 'Yes',
  PENDING: 'No'
};

export const ADD_NEW_ITEM_STEPS = {
  SELECT_ADD_TYPE: 'Select add type',
  ADD_PAYMENT_METHOD: 'Add payment method',
  ADD_EXPENSES_TYPE: 'Add expenses type',
  ADD_CATEGORY: 'Add category',
  ADD_CURRENCY: 'Add currency',
  ADD_COUNTRY: 'Add country',
};

// export const EXPENSES_TYPE = [
//   'Chips-out',
//   'Hosting',
//   'Domain renewal',
//   'Mobile expenses',
//   'Office supply',
//   'Salary',
//   'Set up fee',
//   'Transportation',
//   'Travel',
//   'Other'
// ];

// export const EXPENSES_TYPE = {
//   CHIPS_OUT: 'Chips-out',
//   HOSTING: 'Hosting',
//   DOMAIN_RENEWAL: 'Domain renewal',
//   MOBILE_EXPENSES: 'Mobile expenses',
//   OFFICE_SUPPLY: 'Office supply',
//   SALARY: 'Salary',
//   SET_UP_FEE: 'Set up fee',
//   TRANSPORTATION: 'Transportation',
//   TRAVEL: 'Travel',
//   OTHER: 'Other'
// };

export const COUNTRIES = [
   {
     name: 'Afghanistan',
     dial_code: '+93',
     code: 'AF'
   },
   {
     name: 'Aland Islands',
     dial_code: '+358',
     code: 'AX'
   },
   {
     name: 'Albania',
     dial_code: '+355',
     code: 'AL'
   },
  {
    name: 'Algeria',
    dial_code: '+213',
    code: 'DZ'
  },
   {
     name: 'AmericanSamoa',
     dial_code: '+1684',
     code: 'AS'
   },
   {
     name: 'Andorra',
     dial_code: '+376',
     code: 'AD'
   },
   {
     name: 'Angola',
     dial_code: '+244',
     code: 'AO'
   },
   {
     name: 'Anguilla',
     dial_code: '+1264',
     code: 'AI'
   },
   {
     name: 'Antarctica',
     dial_code: '+672',
     code: 'AQ'
   },
   {
     name: 'Antigua and Barbuda',
     dial_code: '+1268',
     code: 'AG'
   },
  {
    name: 'Argentina',
    dial_code: '+54',
    code: 'AR'
  },
   {
     name: 'Armenia',
     dial_code: '+374',
     code: 'AM'
   },
   {
     name: 'Aruba',
     dial_code: '+297',
     code: 'AW'
   },
  {
    name: 'Australia',
    dial_code: '+61',
    code: 'AU'
  },
   {
     name: 'Austria',
     dial_code: '+43',
     code: 'AT'
   },
   {
     name: 'Azerbaijan',
     dial_code: '+994',
     code: 'AZ'
   },
   {
     name: 'Bahamas',
     dial_code: '+1242',
     code: 'BS'
   },
   {
     name: 'Bahrain',
     dial_code: '+973',
     code: 'BH'
   },
   {
     name: 'Bangladesh',
     dial_code: '+880',
     code: 'BD'
   },
   {
     name: 'Barbados',
     dial_code: '+1246',
     code: 'BB'
   },
   {
     name: 'Belarus',
     dial_code: '+375',
     code: 'BY'
   },
   {
     name: 'Belgium',
     dial_code: '+32',
     code: 'BE'
   },
   {
     name: 'Belize',
     dial_code: '+501',
     code: 'BZ'
   },
   {
     name: 'Benin',
     dial_code: '+229',
     code: 'BJ'
   },
   {
     name: 'Bermuda',
     dial_code: '+1441',
     code: 'BM'
   },
   {
     name: 'Bhutan',
     dial_code: '+975',
     code: 'BT'
   },
   {
     name: 'Bolivia, Plurinational State of',
     dial_code: '+591',
     code: 'BO'
   },
   {
     name: 'Bosnia and Herzegovina',
     dial_code: '+387',
     code: 'BA'
   },
   {
     name: 'Botswana',
     dial_code: '+267',
     code: 'BW'
   },
   {
     name: 'Brazil',
     dial_code: '+55',
     code: 'BR'
   },
   {
     name: 'British Indian Ocean Territory',
     dial_code: '+246',
     code: 'IO'
   },
   {
     name: 'Brunei Darussalam',
     dial_code: '+673',
     code: 'BN'
   },
   {
     name: 'Bulgaria',
     dial_code: '+359',
     code: 'BG'
   },
   {
     name: 'Burkina Faso',
     dial_code: '+226',
     code: 'BF'
   },
   {
     name: 'Burundi',
     dial_code: '+257',
     code: 'BI'
   },
  {
    name: 'Cambodia',
    dial_code: '+855',
    code: 'KH'
  },
   {
     name: 'Cameroon',
     dial_code: '+237',
     code: 'CM'
   },
  {
    name: 'Canada',
    dial_code: '+1',
    code: 'CA'
  },
   {
     name: 'Cape Verde',
     dial_code: '+238',
     code: 'CV'
   },
   {
     name: 'Cayman Islands',
     dial_code: '+ 345',
     code: 'KY'
   },
   {
     name: 'Central African Republic',
     dial_code: '+236',
     code: 'CF'
   },
   {
     name: 'Chad',
     dial_code: '+235',
     code: 'TD'
   },
   {
     name: 'Chile',
     dial_code: '+56',
     code: 'CL'
   },
   {
     name: 'China',
     dial_code: '+86',
     code: 'CN'
   },
   {
     name: 'Christmas Island',
     dial_code: '+61',
     code: 'CX'
   },
   {
     name: 'Cocos (Keeling) Islands',
     dial_code: '+61',
     code: 'CC'
   },
  {
    name: 'Colombia',
    dial_code: '+57',
    code: 'CO'
  },
   {
     name: 'Comoros',
     dial_code: '+269',
     code: 'KM'
   },
   {
     name: 'Congo',
     dial_code: '+242',
     code: 'CG'
   },
   {
     name: 'Congo, The Democratic Republic of the Congo',
     dial_code: '+243',
     code: 'CD'
   },
   {
     name: 'Cook Islands',
     dial_code: '+682',
     code: 'CK'
   },
   {
     name: 'Costa Rica',
     dial_code: '+506',
     code: 'CR'
   },
   {
     name: "Cote d'Ivoire",
     dial_code: '+225',
     code: 'CI'
   },
   {
     name: 'Croatia',
     dial_code: '+385',
     code: 'HR'
   },
   {
     name: 'Cuba',
     dial_code: '+53',
     code: 'CU'
   },
  {
    name: 'Cyprus',
    dial_code: '+357',
    code: 'CY'
  },
   {
     name: 'Czech Republic',
     dial_code: '+420',
     code: 'CZ'
   },
   {
     name: 'Denmark',
     dial_code: '+45',
     code: 'DK'
   },
   {
     name: 'Djibouti',
     dial_code: '+253',
     code: 'DJ'
   },
   {
     name: 'Dominica',
     dial_code: '+1767',
     code: 'DM'
   },
   {
     name: 'Dominican Republic',
     dial_code: '+1849',
     code: 'DO'
   },
  {
    name: 'Ecuador',
    dial_code: '+593',
    code: 'EC'
  },
   {
     name: 'Egypt',
     dial_code: '+20',
     code: 'EG'
   },
   {
     name: 'El Salvador',
     dial_code: '+503',
     code: 'SV'
   },
   {
     name: 'Equatorial Guinea',
     dial_code: '+240',
     code: 'GQ'
   },
   {
     name: 'Eritrea',
     dial_code: '+291',
     code: 'ER'
   },
   {
     name: 'Estonia',
     dial_code: '+372',
     code: 'EE'
   },
   {
     name: 'Ethiopia',
     dial_code: '+251',
     code: 'ET'
   },
   {
     name: 'Falkland Islands (Malvinas)',
     dial_code: '+500',
     code: 'FK'
   },
   {
     name: 'Faroe Islands',
     dial_code: '+298',
     code: 'FO'
   },
   {
     name: 'Fiji',
     dial_code: '+679',
     code: 'FJ'
   },
   {
     name: 'Finland',
     dial_code: '+358',
     code: 'FI'
   },
   {
     name: 'France',
     dial_code: '+33',
     code: 'FR'
   },
   {
     name: 'French Guiana',
     dial_code: '+594',
     code: 'GF'
   },
   {
     name: 'French Polynesia',
     dial_code: '+689',
     code: 'PF'
   },
   {
     name: 'Gabon',
     dial_code: '+241',
     code: 'GA'
   },
   {
     name: 'Gambia',
     dial_code: '+220',
     code: 'GM'
   },
   {
     name: 'Georgia',
     dial_code: '+995',
     code: 'GE'
   },
   {
     name: 'Germany',
     dial_code: '+49',
     code: 'DE'
   },
   {
     name: 'Ghana',
     dial_code: '+233',
     code: 'GH'
   },
   {
     name: 'Gibraltar',
     dial_code: '+350',
     code: 'GI'
   },
   {
     name: 'Greece',
     dial_code: '+30',
     code: 'GR'
   },
   {
     name: 'Greenland',
     dial_code: '+299',
     code: 'GL'
   },
   {
     name: 'Grenada',
     dial_code: '+1473',
     code: 'GD'
   },
   {
     name: 'Guadeloupe',
     dial_code: '+590',
     code: 'GP'
   },
   {
     name: 'Guam',
     dial_code: '+1671',
     code: 'GU'
   },
   {
     name: 'Guatemala',
     dial_code: '+502',
     code: 'GT'
   },
   {
     name: 'Guernsey',
     dial_code: '+44',
     code: 'GG'
   },
   {
     name: 'Guinea',
     dial_code: '+224',
     code: 'GN'
   },
   {
     name: 'Guinea-Bissau',
     dial_code: '+245',
     code: 'GW'
   },
   {
     name: 'Guyana',
     dial_code: '+595',
     code: 'GY'
   },
   {
     name: 'Haiti',
     dial_code: '+509',
     code: 'HT'
   },
   {
     name: 'Holy See (Vatican City State)',
     dial_code: '+379',
     code: 'VA'
   },
   {
     name: 'Honduras',
     dial_code: '+504',
     code: 'HN'
   },
   {
     name: 'Hong Kong',
     dial_code: '+852',
     code: 'HK'
   },
   {
     name: 'Hungary',
     dial_code: '+36',
     code: 'HU'
   },
   {
     name: 'Iceland',
     dial_code: '+354',
     code: 'IS'
   },
  {
    name: 'India',
    dial_code: '+91',
    code: 'IN'
  },
   {
     name: 'Indonesia',
     dial_code: '+62',
     code: 'ID'
   },
   {
     name: 'Iran, Islamic Republic of Persian Gulf',
     dial_code: '+98',
     code: 'IR'
   },
   {
     name: 'Iraq',
     dial_code: '+964',
     code: 'IQ'
   },
   {
     name: 'Ireland',
     dial_code: '+353',
     code: 'IE'
   },
   {
     name: 'Isle of Man',
     dial_code: '+44',
     code: 'IM'
   },
   {
     name: 'Israel',
     dial_code: '+972',
     code: 'IL'
   },
   {
     name: 'Italy',
     dial_code: '+39',
     code: 'IT'
   },
   {
     name: 'Jamaica',
     dial_code: '+1876',
     code: 'JM'
   },
   {
     name: 'Japan',
     dial_code: '+81',
     code: 'JP'
   },
   {
     name: 'Jersey',
     dial_code: '+44',
     code: 'JE'
   },
   {
     name: 'Jordan',
     dial_code: '+962',
     code: 'JO'
   },
   {
     name: 'Kazakhstan',
     dial_code: '+77',
     code: 'KZ'
   },
   {
     name: 'Kenya',
     dial_code: '+254',
     code: 'KE'
   },
   {
     name: 'Kiribati',
     dial_code: '+686',
     code: 'KI'
   },
   {
     name: "Korea, Democratic People's Republic of Korea",
     dial_code: '+850',
     code: 'KP'
   },
  {
    name: 'Korea, Republic of South Korea',
    dial_code: '+82',
    code: 'KR'
  },
   {
     name: 'Kuwait',
     dial_code: '+965',
     code: 'KW'
   },
   {
     name: 'Kyrgyzstan',
     dial_code: '+996',
     code: 'KG'
   },
   {
     name: 'Laos',
     dial_code: '+856',
     code: 'LA'
   },
   {
     name: 'Latvia',
     dial_code: '+371',
     code: 'LV'
   },
   {
     name: 'Lebanon',
     dial_code: '+961',
     code: 'LB'
   },
   {
     name: 'Lesotho',
     dial_code: '+266',
     code: 'LS'
   },
  {
    name: 'Liberia',
    dial_code: '+231',
    code: 'LR'
  },
   {
     name: 'Libyan Arab Jamahiriya',
     dial_code: '+218',
     code: 'LY'
   },
   {
     name: 'Liechtenstein',
     dial_code: '+423',
     code: 'LI'
   },
   {
     name: 'Lithuania',
     dial_code: '+370',
     code: 'LT'
   },
   {
     name: 'Luxembourg',
     dial_code: '+352',
     code: 'LU'
   },
   {
     name: 'Macao',
     dial_code: '+853',
     code: 'MO'
   },
   {
     name: 'Macedonia',
     dial_code: '+389',
     code: 'MK'
   },
   {
     name: 'Madagascar',
     dial_code: '+261',
     code: 'MG'
   },
   {
     name: 'Malawi',
     dial_code: '+265',
     code: 'MW'
   },
   {
     name: 'Malaysia',
     dial_code: '+60',
     code: 'MY'
   },
   {
     name: 'Maldives',
     dial_code: '+960',
     code: 'MV'
   },
   {
     name: 'Mali',
     dial_code: '+223',
     code: 'ML'
   },
   {
     name: 'Malta',
     dial_code: '+356',
     code: 'MT'
   },
   {
     name: 'Marshall Islands',
     dial_code: '+692',
     code: 'MH'
   },
   {
     name: 'Martinique',
     dial_code: '+596',
     code: 'MQ'
   },
   {
     name: 'Mauritania',
     dial_code: '+222',
     code: 'MR'
   },
   {
     name: 'Mauritius',
     dial_code: '+230',
     code: 'MU'
   },
   {
     name: 'Mayotte',
     dial_code: '+262',
     code: 'YT'
   },
  {
    name: 'Mexico',
    dial_code: '+52',
    code: 'MX'
  },
   {
     name: 'Micronesia, Federated States of Micronesia',
     dial_code: '+691',
     code: 'FM'
   },
   {
     name: 'Moldova',
     dial_code: '+373',
     code: 'MD'
   },
   {
     name: 'Monaco',
     dial_code: '+377',
     code: 'MC'
   },
   {
     name: 'Mongolia',
     dial_code: '+976',
     code: 'MN'
   },
   {
     name: 'Montenegro',
     dial_code: '+382',
     code: 'ME'
   },
   {
     name: 'Montserrat',
     dial_code: '+1664',
     code: 'MS'
   },
   {
     name: 'Morocco',
     dial_code: '+212',
     code: 'MA'
   },
   {
     name: 'Mozambique',
     dial_code: '+258',
     code: 'MZ'
   },
   {
     name: 'Myanmar',
     dial_code: '+95',
     code: 'MM'
   },
   {
     name: 'Namibia',
     dial_code: '+264',
     code: 'NA'
   },
   {
     name: 'Nauru',
     dial_code: '+674',
     code: 'NR'
   },
   {
     name: 'Nepal',
     dial_code: '+977',
     code: 'NP'
   },
   {
     name: 'Netherlands',
     dial_code: '+31',
     code: 'NL'
   },
   {
     name: 'Netherlands Antilles',
     dial_code: '+599',
     code: 'AN'
   },
   {
     name: 'New Caledonia',
     dial_code: '+687',
     code: 'NC'
   },
   {
     name: 'New Zealand',
     dial_code: '+64',
     code: 'NZ'
   },
   {
     name: 'Nicaragua',
     dial_code: '+505',
     code: 'NI'
   },
   {
     name: 'Niger',
     dial_code: '+227',
     code: 'NE'
   },
   {
     name: 'Nigeria',
     dial_code: '+234',
     code: 'NG'
   },
   {
     name: 'Niue',
     dial_code: '+683',
     code: 'NU'
   },
   {
     name: 'Norfolk Island',
     dial_code: '+672',
     code: 'NF'
   },
   {
     name: 'Northern Mariana Islands',
     dial_code: '+1670',
     code: 'MP'
   },
   {
     name: 'Norway',
     dial_code: '+47',
     code: 'NO'
   },
   {
     name: 'Oman',
     dial_code: '+968',
     code: 'OM'
   },
   {
     name: 'Pakistan',
     dial_code: '+92',
     code: 'PK'
   },
   {
     name: 'Palau',
     dial_code: '+680',
     code: 'PW'
   },
   {
     name: 'Palestinian Territory, Occupied',
     dial_code: '+970',
     code: 'PS'
   },
   {
     name: 'Panama',
     dial_code: '+507',
     code: 'PA'
   },
   {
     name: 'Papua New Guinea',
     dial_code: '+675',
     code: 'PG'
   },
  {
    name: 'Paraguay',
    dial_code: '+595',
    code: 'PY'
  },
  {
    name: 'Peru',
    dial_code: '+51',
    code: 'PE'
  },
  {
    name: 'Philippines',
    dial_code: '+63',
    code: 'PH'
  },
   {
     name: 'Pitcairn',
     dial_code: '+872',
     code: 'PN'
   },
   {
     name: 'Poland',
     dial_code: '+48',
     code: 'PL'
   },
   {
     name: 'Portugal',
     dial_code: '+351',
     code: 'PT'
   },
   {
     name: 'Puerto Rico',
     dial_code: '+1939',
     code: 'PR'
   },
   {
     name: 'Qatar',
     dial_code: '+974',
     code: 'QA'
   },
   {
     name: 'Romania',
     dial_code: '+40',
     code: 'RO'
   },
   {
     name: 'Russia',
     dial_code: '+7',
     code: 'RU'
   },
   {
     name: 'Rwanda',
     dial_code: '+250',
     code: 'RW'
   },
   {
     name: 'Reunion',
     dial_code: '+262',
     code: 'RE'
   },
   {
     name: 'Saint Barthelemy',
     dial_code: '+590',
     code: 'BL'
   },
   {
     name: 'Saint Helena, Ascension and Tristan Da Cunha',
     dial_code: '+290',
     code: 'SH'
   },
   {
     name: 'Saint Kitts and Nevis',
     dial_code: '+1869',
     code: 'KN'
   },
   {
     name: 'Saint Lucia',
     dial_code: '+1758',
     code: 'LC'
   },
   {
     name: 'Saint Martin',
     dial_code: '+590',
     code: 'MF'
   },
   {
     name: 'Saint Pierre and Miquelon',
     dial_code: '+508',
     code: 'PM'
   },
   {
     name: 'Saint Vincent and the Grenadines',
     dial_code: '+1784',
     code: 'VC'
   },
   {
     name: 'Samoa',
     dial_code: '+685',
     code: 'WS'
   },
   {
     name: 'San Marino',
     dial_code: '+378',
     code: 'SM'
   },
   {
     name: 'Sao Tome and Principe',
     dial_code: '+239',
     code: 'ST'
   },
   {
     name: 'Saudi Arabia',
     dial_code: '+966',
     code: 'SA'
   },
   {
     name: 'Senegal',
     dial_code: '+221',
     code: 'SN'
   },
   {
     name: 'Serbia',
     dial_code: '+381',
     code: 'RS'
   },
   {
     name: 'Seychelles',
     dial_code: '+248',
     code: 'SC'
   },
   {
     name: 'Sierra Leone',
     dial_code: '+232',
     code: 'SL'
   },
   {
     name: 'Singapore',
     dial_code: '+65',
     code: 'SG'
   },
   {
     name: 'Slovakia',
     dial_code: '+421',
     code: 'SK'
   },
   {
     name: 'Slovenia',
     dial_code: '+386',
     code: 'SI'
   },
   {
     name: 'Solomon Islands',
     dial_code: '+677',
     code: 'SB'
   },
   {
     name: 'Somalia',
     dial_code: '+252',
     code: 'SO'
   },
  {
    name: 'South Africa',
    dial_code: '+27',
    code: 'ZA'
  },
   {
     name: 'South Sudan',
     dial_code: '+211',
     code: 'SS'
   },
   {
     name: 'South Georgia and the South Sandwich Islands',
     dial_code: '+500',
     code: 'GS'
   },
   {
     name: 'Spain',
     dial_code: '+34',
     code: 'ES'
   },
  {
    name: 'Sri Lanka',
    dial_code: '+94',
    code: 'LK'
  },
   {
     name: 'Sudan',
     dial_code: '+249',
     code: 'SD'
   },
   {
     name: 'Suriname',
     dial_code: '+597',
     code: 'SR'
   },
   {
     name: 'Svalbard and Jan Mayen',
     dial_code: '+47',
     code: 'SJ'
   },
   {
     name: 'Swaziland',
     dial_code: '+268',
     code: 'SZ'
   },
  {
    name: 'Sweden',
    dial_code: '+46',
    code: 'SE'
  },
   {
     name: 'Switzerland',
     dial_code: '+41',
     code: 'CH'
   },
   {
     name: 'Syrian Arab Republic',
     dial_code: '+963',
     code: 'SY'
   },
   {
     name: 'Taiwan',
     dial_code: '+886',
     code: 'TW'
   },
   {
     name: 'Tajikistan',
     dial_code: '+992',
     code: 'TJ'
   },
   {
     name: 'Tanzania, United Republic of Tanzania',
     dial_code: '+255',
     code: 'TZ'
   },
   {
     name: 'Thailand',
     dial_code: '+66',
     code: 'TH'
   },
   {
     name: 'Timor-Leste',
     dial_code: '+670',
     code: 'TL'
   },
   {
     name: 'Togo',
     dial_code: '+228',
     code: 'TG'
   },
   {
     name: 'Tokelau',
     dial_code: '+690',
     code: 'TK'
   },
   {
     name: 'Tonga',
     dial_code: '+676',
     code: 'TO'
   },
   {
     name: 'Trinidad and Tobago',
     dial_code: '+1868',
     code: 'TT'
   },
  {
    name: 'Tunisia',
    dial_code: '+216',
    code: 'TN'
  },
  {
    name: 'Turkey',
    dial_code: '+90',
    code: 'TR'
  },
   {
     name: 'Turkmenistan',
     dial_code: '+993',
     code: 'TM'
   },
   {
     name: 'Turks and Caicos Islands',
     dial_code: '+1649',
     code: 'TC'
   },
   {
     name: 'Tuvalu',
     dial_code: '+688',
     code: 'TV'
   },
  {
    name: 'Uganda',
    dial_code: '+256',
    code: 'UG'
  },
   {
     name: 'Ukraine',
     dial_code: '+380',
     code: 'UA'
   },
   {
     name: 'United Arab Emirates',
     dial_code: '+971',
     code: 'AE'
   },
   {
     name: 'United Kingdom',
     dial_code: '+44',
     code: 'GB'
   },
   {
     name: 'United States',
     dial_code: '+1',
     code: 'US'
   },
   {
     name: 'Uruguay',
     dial_code: '+598',
     code: 'UY'
   },
   {
     name: 'Uzbekistan',
     dial_code: '+998',
     code: 'UZ'
   },
   {
     name: 'Vanuatu',
     dial_code: '+678',
     code: 'VU'
   },
   {
     name: 'Venezuela, Bolivarian Republic of Venezuela',
     dial_code: '+58',
     code: 'VE'
   },
   {
     name: 'Vietnam',
     dial_code: '+84',
     code: 'VN'
   },
   {
     name: 'Virgin Islands, British',
     dial_code: '+1284',
     code: 'VG'
   },
   {
     name: 'Virgin Islands, U.S.',
     dial_code: '+1340',
     code: 'VI'
   },
   {
     name: 'Wallis and Futuna',
     dial_code: '+681',
     code: 'WF'
   },
   {
     name: 'Yemen',
     dial_code: '+967',
     code: 'YE'
   },
   {
     name: 'Zambia',
     dial_code: '+260',
     code: 'ZM'
   },
   {
     name: 'Zimbabwe',
     dial_code: '+263',
     code: 'ZW'
   }
];

export const getCountryForSelect = countryCode => {
  const findOne = countries.find(item => item.code === countryCode);
  return { value: countryCode, label: findOne.name };
};

export const LANGUAGES = [
  { code: 'AF', name: 'Afrikaans' },
  { code: 'SQ', name: 'Albanian' },
  { code: 'AR', name: 'Arabic' },
  { code: 'HY', name: 'Armenian' },
  { code: 'EU', name: 'Basque' },
  { code: 'BN', name: 'Bengali' },
  { code: 'BG', name: 'Bulgarian' },
  { code: 'CA', name: 'Catalan' },
  { code: 'KM', name: 'Cambodian' },
  { code: 'ZH', name: 'Chinese (Mandarin)' },
  { code: 'HR', name: 'Croatian' },
  { code: 'CS', name: 'Czech' },
  { code: 'DA', name: 'Danish' },
  { code: 'NL', name: 'Dutch' },
  { code: 'EN', name: 'English' },
  { code: 'ET', name: 'Estonian' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finnish' },
  { code: 'FR', name: 'French' },
  { code: 'KA', name: 'Georgian' },
  { code: 'DE', name: 'German' },
  { code: 'EL', name: 'Greek' },
  { code: 'GU', name: 'Gujarati' },
  { code: 'HE', name: 'Hebrew' },
  { code: 'HI', name: 'Hindi' },
  { code: 'HU', name: 'Hungarian' },
  { code: 'IS', name: 'Icelandic' },
  { code: 'ID', name: 'Indonesian' },
  { code: 'GA', name: 'Irish' },
  { code: 'IT', name: 'Italian' },
  { code: 'JA', name: 'Japanese' },
  { code: 'JW', name: 'Javanese' },
  { code: 'KO', name: 'Korean' },
  { code: 'LA', name: 'Latin' },
  { code: 'LV', name: 'Latvian' },
  { code: 'LT', name: 'Lithuanian' },
  { code: 'MK', name: 'Macedonian' },
  { code: 'MS', name: 'Malay' },
  { code: 'ML', name: 'Malayalam' },
  { code: 'MT', name: 'Maltese' },
  { code: 'MI', name: 'Maori' },
  { code: 'MR', name: 'Marathi' },
  { code: 'MN', name: 'Mongolian' },
  { code: 'NE', name: 'Nepali' },
  { code: 'NO', name: 'Norwegian' },
  { code: 'FA', name: 'Persian' },
  { code: 'PL', name: 'Polish' },
  { code: 'PT', name: 'Portuguese' },
  { code: 'PA', name: 'Punjabi' },
  { code: 'QU', name: 'Quechua' },
  { code: 'RO', name: 'Romanian' },
  { code: 'RU', name: 'Russian' },
  { code: 'SM', name: 'Samoan' },
  { code: 'SR', name: 'Serbian' },
  { code: 'SK', name: 'Slovak' },
  { code: 'SL', name: 'Slovenian' },
  { code: 'ES', name: 'Spanish' },
  { code: 'SW', name: 'Swahili' },
  { code: 'SV', name: 'Swedish ' },
  { code: 'TA', name: 'Tamil' },
  { code: 'TT', name: 'Tatar' },
  { code: 'TE', name: 'Telugu' },
  { code: 'TH', name: 'Thai' },
  { code: 'BO', name: 'Tibetan' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TR', name: 'Turkish' },
  { code: 'UK', name: 'Ukrainian' },
  { code: 'UR', name: 'Urdu' },
  { code: 'UZ', name: 'Uzbek' },
  { code: 'VI', name: 'Vietnamese' },
  { code: 'CY', name: 'Welsh' },
  { code: 'XH', name: 'Xhosa' }
];

export const CURRENCIES = {
  USD: {
    symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars'
  },
  CAD: {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'CAD',
    name_plural: 'Canadian dollars'
  },
  EUR: {
    symbol: '€',
    name: 'Euro',
    symbol_native: '€',
    decimal_digits: 2,
    rounding: 0,
    code: 'EUR',
    name_plural: 'euros'
  },
  AED: {
    symbol: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol_native: 'د.إ.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'AED',
    name_plural: 'UAE dirhams'
  },
  AFN: {
    symbol: 'Af',
    name: 'Afghan Afghani',
    symbol_native: '؋',
    decimal_digits: 0,
    rounding: 0,
    code: 'AFN',
    name_plural: 'Afghan Afghanis'
  },
  ALL: {
    symbol: 'ALL',
    name: 'Albanian Lek',
    symbol_native: 'Lek',
    decimal_digits: 0,
    rounding: 0,
    code: 'ALL',
    name_plural: 'Albanian lekë'
  },
  AMD: {
    symbol: 'AMD',
    name: 'Armenian Dram',
    symbol_native: 'դր.',
    decimal_digits: 0,
    rounding: 0,
    code: 'AMD',
    name_plural: 'Armenian drams'
  },
  ARS: {
    symbol: 'AR$',
    name: 'Argentine Peso',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'ARS',
    name_plural: 'Argentine pesos'
  },
  AUD: {
    symbol: 'AU$',
    name: 'Australian Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'AUD',
    name_plural: 'Australian dollars'
  },
  AZN: {
    symbol: 'man.',
    name: 'Azerbaijani Manat',
    symbol_native: 'ман.',
    decimal_digits: 2,
    rounding: 0,
    code: 'AZN',
    name_plural: 'Azerbaijani manats'
  },
  BAM: {
    symbol: 'KM',
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbol_native: 'KM',
    decimal_digits: 2,
    rounding: 0,
    code: 'BAM',
    name_plural: 'Bosnia-Herzegovina convertible marks'
  },
  BDT: {
    symbol: 'Tk',
    name: 'Bangladeshi Taka',
    symbol_native: '৳',
    decimal_digits: 2,
    rounding: 0,
    code: 'BDT',
    name_plural: 'Bangladeshi takas'
  },
  BGN: {
    symbol: 'BGN',
    name: 'Bulgarian Lev',
    symbol_native: 'лв.',
    decimal_digits: 2,
    rounding: 0,
    code: 'BGN',
    name_plural: 'Bulgarian leva'
  },
  BHD: {
    symbol: 'BD',
    name: 'Bahraini Dinar',
    symbol_native: 'د.ب.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'BHD',
    name_plural: 'Bahraini dinars'
  },
  BIF: {
    symbol: 'FBu',
    name: 'Burundian Franc',
    symbol_native: 'FBu',
    decimal_digits: 0,
    rounding: 0,
    code: 'BIF',
    name_plural: 'Burundian francs'
  },
  BND: {
    symbol: 'BN$',
    name: 'Brunei Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'BND',
    name_plural: 'Brunei dollars'
  },
  BOB: {
    symbol: 'Bs',
    name: 'Bolivian Boliviano',
    symbol_native: 'Bs',
    decimal_digits: 2,
    rounding: 0,
    code: 'BOB',
    name_plural: 'Bolivian bolivianos'
  },
  BRL: {
    symbol: 'R$',
    name: 'Brazilian Real',
    symbol_native: 'R$',
    decimal_digits: 2,
    rounding: 0,
    code: 'BRL',
    name_plural: 'Brazilian reals'
  },
  BWP: {
    symbol: 'BWP',
    name: 'Botswanan Pula',
    symbol_native: 'P',
    decimal_digits: 2,
    rounding: 0,
    code: 'BWP',
    name_plural: 'Botswanan pulas'
  },
  BYN: {
    symbol: 'Br',
    name: 'Belarusian Ruble',
    symbol_native: 'руб.',
    decimal_digits: 2,
    rounding: 0,
    code: 'BYN',
    name_plural: 'Belarusian rubles'
  },
  BZD: {
    symbol: 'BZ$',
    name: 'Belize Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'BZD',
    name_plural: 'Belize dollars'
  },
  CDF: {
    symbol: 'CDF',
    name: 'Congolese Franc',
    symbol_native: 'FrCD',
    decimal_digits: 2,
    rounding: 0,
    code: 'CDF',
    name_plural: 'Congolese francs'
  },
  CHF: {
    symbol: 'CHF',
    name: 'Swiss Franc',
    symbol_native: 'CHF',
    decimal_digits: 2,
    rounding: 0.05,
    code: 'CHF',
    name_plural: 'Swiss francs'
  },
  CLP: {
    symbol: 'CL$',
    name: 'Chilean Peso',
    symbol_native: '$',
    decimal_digits: 0,
    rounding: 0,
    code: 'CLP',
    name_plural: 'Chilean pesos'
  },
  CNY: {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    symbol_native: 'CN¥',
    decimal_digits: 2,
    rounding: 0,
    code: 'CNY',
    name_plural: 'Chinese yuan'
  },
  COP: {
    symbol: 'CO$',
    name: 'Colombian Peso',
    symbol_native: '$',
    decimal_digits: 0,
    rounding: 0,
    code: 'COP',
    name_plural: 'Colombian pesos'
  },
  CRC: {
    symbol: '₡',
    name: 'Costa Rican Colón',
    symbol_native: '₡',
    decimal_digits: 0,
    rounding: 0,
    code: 'CRC',
    name_plural: 'Costa Rican colóns'
  },
  CVE: {
    symbol: 'CV$',
    name: 'Cape Verdean Escudo',
    symbol_native: 'CV$',
    decimal_digits: 2,
    rounding: 0,
    code: 'CVE',
    name_plural: 'Cape Verdean escudos'
  },
  CZK: {
    symbol: 'Kč',
    name: 'Czech Republic Koruna',
    symbol_native: 'Kč',
    decimal_digits: 2,
    rounding: 0,
    code: 'CZK',
    name_plural: 'Czech Republic korunas'
  },
  DJF: {
    symbol: 'Fdj',
    name: 'Djiboutian Franc',
    symbol_native: 'Fdj',
    decimal_digits: 0,
    rounding: 0,
    code: 'DJF',
    name_plural: 'Djiboutian francs'
  },
  DKK: {
    symbol: 'Dkr',
    name: 'Danish Krone',
    symbol_native: 'kr',
    decimal_digits: 2,
    rounding: 0,
    code: 'DKK',
    name_plural: 'Danish kroner'
  },
  DOP: {
    symbol: 'RD$',
    name: 'Dominican Peso',
    symbol_native: 'RD$',
    decimal_digits: 2,
    rounding: 0,
    code: 'DOP',
    name_plural: 'Dominican pesos'
  },
  DZD: {
    symbol: 'DA',
    name: 'Algerian Dinar',
    symbol_native: 'د.ج.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'DZD',
    name_plural: 'Algerian dinars'
  },
  EEK: {
    symbol: 'Ekr',
    name: 'Estonian Kroon',
    symbol_native: 'kr',
    decimal_digits: 2,
    rounding: 0,
    code: 'EEK',
    name_plural: 'Estonian kroons'
  },
  EGP: {
    symbol: 'EGP',
    name: 'Egyptian Pound',
    symbol_native: 'ج.م.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'EGP',
    name_plural: 'Egyptian pounds'
  },
  ERN: {
    symbol: 'Nfk',
    name: 'Eritrean Nakfa',
    symbol_native: 'Nfk',
    decimal_digits: 2,
    rounding: 0,
    code: 'ERN',
    name_plural: 'Eritrean nakfas'
  },
  ETB: {
    symbol: 'Br',
    name: 'Ethiopian Birr',
    symbol_native: 'Br',
    decimal_digits: 2,
    rounding: 0,
    code: 'ETB',
    name_plural: 'Ethiopian birrs'
  },
  GBP: {
    symbol: '£',
    name: 'British Pound Sterling',
    symbol_native: '£',
    decimal_digits: 2,
    rounding: 0,
    code: 'GBP',
    name_plural: 'British pounds sterling'
  },
  GEL: {
    symbol: 'GEL',
    name: 'Georgian Lari',
    symbol_native: 'GEL',
    decimal_digits: 2,
    rounding: 0,
    code: 'GEL',
    name_plural: 'Georgian laris'
  },
  GHS: {
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    symbol_native: 'GH₵',
    decimal_digits: 2,
    rounding: 0,
    code: 'GHS',
    name_plural: 'Ghanaian cedis'
  },
  GNF: {
    symbol: 'FG',
    name: 'Guinean Franc',
    symbol_native: 'FG',
    decimal_digits: 0,
    rounding: 0,
    code: 'GNF',
    name_plural: 'Guinean francs'
  },
  GTQ: {
    symbol: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol_native: 'Q',
    decimal_digits: 2,
    rounding: 0,
    code: 'GTQ',
    name_plural: 'Guatemalan quetzals'
  },
  HKD: {
    symbol: 'HK$',
    name: 'Hong Kong Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'HKD',
    name_plural: 'Hong Kong dollars'
  },
  HNL: {
    symbol: 'HNL',
    name: 'Honduran Lempira',
    symbol_native: 'L',
    decimal_digits: 2,
    rounding: 0,
    code: 'HNL',
    name_plural: 'Honduran lempiras'
  },
  HRK: {
    symbol: 'kn',
    name: 'Croatian Kuna',
    symbol_native: 'kn',
    decimal_digits: 2,
    rounding: 0,
    code: 'HRK',
    name_plural: 'Croatian kunas'
  },
  HUF: {
    symbol: 'Ft',
    name: 'Hungarian Forint',
    symbol_native: 'Ft',
    decimal_digits: 0,
    rounding: 0,
    code: 'HUF',
    name_plural: 'Hungarian forints'
  },
  IDR: {
    symbol: 'Rp',
    name: 'Indonesian Rupiah',
    symbol_native: 'Rp',
    decimal_digits: 0,
    rounding: 0,
    code: 'IDR',
    name_plural: 'Indonesian rupiahs'
  },
  ILS: {
    symbol: '₪',
    name: 'Israeli New Sheqel',
    symbol_native: '₪',
    decimal_digits: 2,
    rounding: 0,
    code: 'ILS',
    name_plural: 'Israeli new sheqels'
  },
  INR: {
    symbol: 'Rs',
    name: 'Indian Rupee',
    symbol_native: 'টকা',
    decimal_digits: 2,
    rounding: 0,
    code: 'INR',
    name_plural: 'Indian rupees'
  },
  IQD: {
    symbol: 'IQD',
    name: 'Iraqi Dinar',
    symbol_native: 'د.ع.‏',
    decimal_digits: 0,
    rounding: 0,
    code: 'IQD',
    name_plural: 'Iraqi dinars'
  },
  IRR: {
    symbol: 'IRR',
    name: 'Iranian Rial',
    symbol_native: '﷼',
    decimal_digits: 0,
    rounding: 0,
    code: 'IRR',
    name_plural: 'Iranian rials'
  },
  ISK: {
    symbol: 'Ikr',
    name: 'Icelandic Króna',
    symbol_native: 'kr',
    decimal_digits: 0,
    rounding: 0,
    code: 'ISK',
    name_plural: 'Icelandic krónur'
  },
  JMD: {
    symbol: 'J$',
    name: 'Jamaican Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'JMD',
    name_plural: 'Jamaican dollars'
  },
  JOD: {
    symbol: 'JD',
    name: 'Jordanian Dinar',
    symbol_native: 'د.أ.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'JOD',
    name_plural: 'Jordanian dinars'
  },
  JPY: {
    symbol: '¥',
    name: 'Japanese Yen',
    symbol_native: '￥',
    decimal_digits: 0,
    rounding: 0,
    code: 'JPY',
    name_plural: 'Japanese yen'
  },
  KES: {
    symbol: 'Ksh',
    name: 'Kenyan Shilling',
    symbol_native: 'Ksh',
    decimal_digits: 2,
    rounding: 0,
    code: 'KES',
    name_plural: 'Kenyan shillings'
  },
  KHR: {
    symbol: 'KHR',
    name: 'Cambodian Riel',
    symbol_native: '៛',
    decimal_digits: 2,
    rounding: 0,
    code: 'KHR',
    name_plural: 'Cambodian riels'
  },
  KMF: {
    symbol: 'CF',
    name: 'Comorian Franc',
    symbol_native: 'FC',
    decimal_digits: 0,
    rounding: 0,
    code: 'KMF',
    name_plural: 'Comorian francs'
  },
  KRW: {
    symbol: '₩',
    name: 'South Korean Won',
    symbol_native: '₩',
    decimal_digits: 0,
    rounding: 0,
    code: 'KRW',
    name_plural: 'South Korean won'
  },
  KWD: {
    symbol: 'KD',
    name: 'Kuwaiti Dinar',
    symbol_native: 'د.ك.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'KWD',
    name_plural: 'Kuwaiti dinars'
  },
  KZT: {
    symbol: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol_native: 'тңг.',
    decimal_digits: 2,
    rounding: 0,
    code: 'KZT',
    name_plural: 'Kazakhstani tenges'
  },
  LBP: {
    symbol: 'LB£',
    name: 'Lebanese Pound',
    symbol_native: 'ل.ل.‏',
    decimal_digits: 0,
    rounding: 0,
    code: 'LBP',
    name_plural: 'Lebanese pounds'
  },
  LKR: {
    symbol: 'SLRs',
    name: 'Sri Lankan Rupee',
    symbol_native: 'SL Re',
    decimal_digits: 2,
    rounding: 0,
    code: 'LKR',
    name_plural: 'Sri Lankan rupees'
  },
  LTL: {
    symbol: 'Lt',
    name: 'Lithuanian Litas',
    symbol_native: 'Lt',
    decimal_digits: 2,
    rounding: 0,
    code: 'LTL',
    name_plural: 'Lithuanian litai'
  },
  LVL: {
    symbol: 'Ls',
    name: 'Latvian Lats',
    symbol_native: 'Ls',
    decimal_digits: 2,
    rounding: 0,
    code: 'LVL',
    name_plural: 'Latvian lati'
  },
  LRD: {
    symbol: 'L$',
    name: 'Liberia dollar',
    symbol_native: 'L$',
    decimal_digits: 2,
    rounding: 0,
    code: 'LRD',
    name_plural: 'Liberia dollar'
  },
  LYD: {
    symbol: 'LD',
    name: 'Libyan Dinar',
    symbol_native: 'د.ل.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'LYD',
    name_plural: 'Libyan dinars'
  },
  MAD: {
    symbol: 'MAD',
    name: 'Moroccan Dirham',
    symbol_native: 'د.م.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'MAD',
    name_plural: 'Moroccan dirhams'
  },
  MDL: {
    symbol: 'MDL',
    name: 'Moldovan Leu',
    symbol_native: 'MDL',
    decimal_digits: 2,
    rounding: 0,
    code: 'MDL',
    name_plural: 'Moldovan lei'
  },
  MGA: {
    symbol: 'MGA',
    name: 'Malagasy Ariary',
    symbol_native: 'MGA',
    decimal_digits: 0,
    rounding: 0,
    code: 'MGA',
    name_plural: 'Malagasy Ariaries'
  },
  MKD: {
    symbol: 'MKD',
    name: 'Macedonian Denar',
    symbol_native: 'MKD',
    decimal_digits: 2,
    rounding: 0,
    code: 'MKD',
    name_plural: 'Macedonian denari'
  },
  MMK: {
    symbol: 'MMK',
    name: 'Myanma Kyat',
    symbol_native: 'K',
    decimal_digits: 0,
    rounding: 0,
    code: 'MMK',
    name_plural: 'Myanma kyats'
  },
  MOP: {
    symbol: 'MOP$',
    name: 'Macanese Pataca',
    symbol_native: 'MOP$',
    decimal_digits: 2,
    rounding: 0,
    code: 'MOP',
    name_plural: 'Macanese patacas'
  },
  MUR: {
    symbol: 'MURs',
    name: 'Mauritian Rupee',
    symbol_native: 'MURs',
    decimal_digits: 0,
    rounding: 0,
    code: 'MUR',
    name_plural: 'Mauritian rupees'
  },
  MXN: {
    symbol: 'MX$',
    name: 'Mexican Peso',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'MXN',
    name_plural: 'Mexican pesos'
  },
  MYR: {
    symbol: 'RM',
    name: 'Malaysian Ringgit',
    symbol_native: 'RM',
    decimal_digits: 2,
    rounding: 0,
    code: 'MYR',
    name_plural: 'Malaysian ringgits'
  },
  MZN: {
    symbol: 'MTn',
    name: 'Mozambican Metical',
    symbol_native: 'MTn',
    decimal_digits: 2,
    rounding: 0,
    code: 'MZN',
    name_plural: 'Mozambican meticals'
  },
  NAD: {
    symbol: 'N$',
    name: 'Namibian Dollar',
    symbol_native: 'N$',
    decimal_digits: 2,
    rounding: 0,
    code: 'NAD',
    name_plural: 'Namibian dollars'
  },
  NGN: {
    symbol: '₦',
    name: 'Nigerian Naira',
    symbol_native: '₦',
    decimal_digits: 2,
    rounding: 0,
    code: 'NGN',
    name_plural: 'Nigerian nairas'
  },
  NIO: {
    symbol: 'C$',
    name: 'Nicaraguan Córdoba',
    symbol_native: 'C$',
    decimal_digits: 2,
    rounding: 0,
    code: 'NIO',
    name_plural: 'Nicaraguan córdobas'
  },
  NOK: {
    symbol: 'Nkr',
    name: 'Norwegian Krone',
    symbol_native: 'kr',
    decimal_digits: 2,
    rounding: 0,
    code: 'NOK',
    name_plural: 'Norwegian kroner'
  },
  NPR: {
    symbol: 'NPRs',
    name: 'Nepalese Rupee',
    symbol_native: 'नेरू',
    decimal_digits: 2,
    rounding: 0,
    code: 'NPR',
    name_plural: 'Nepalese rupees'
  },
  NZD: {
    symbol: 'NZ$',
    name: 'New Zealand Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'NZD',
    name_plural: 'New Zealand dollars'
  },
  OMR: {
    symbol: 'OMR',
    name: 'Omani Rial',
    symbol_native: 'ر.ع.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'OMR',
    name_plural: 'Omani rials'
  },
  PAB: {
    symbol: 'B/.',
    name: 'Panamanian Balboa',
    symbol_native: 'B/.',
    decimal_digits: 2,
    rounding: 0,
    code: 'PAB',
    name_plural: 'Panamanian balboas'
  },
  PEN: {
    symbol: 'S/.',
    name: 'Peruvian Nuevo Sol',
    symbol_native: 'S/.',
    decimal_digits: 2,
    rounding: 0,
    code: 'PEN',
    name_plural: 'Peruvian nuevos soles'
  },
  PHP: {
    symbol: '₱',
    name: 'Philippine Peso',
    symbol_native: '₱',
    decimal_digits: 2,
    rounding: 0,
    code: 'PHP',
    name_plural: 'Philippine pesos'
  },
  PKR: {
    symbol: 'PKRs',
    name: 'Pakistani Rupee',
    symbol_native: '₨',
    decimal_digits: 0,
    rounding: 0,
    code: 'PKR',
    name_plural: 'Pakistani rupees'
  },
  PLN: {
    symbol: 'zł',
    name: 'Polish Zloty',
    symbol_native: 'zł',
    decimal_digits: 2,
    rounding: 0,
    code: 'PLN',
    name_plural: 'Polish zlotys'
  },
  PYG: {
    symbol: '₲',
    name: 'Paraguayan Guarani',
    symbol_native: '₲',
    decimal_digits: 0,
    rounding: 0,
    code: 'PYG',
    name_plural: 'Paraguayan guaranis'
  },
  QAR: {
    symbol: 'QR',
    name: 'Qatari Rial',
    symbol_native: 'ر.ق.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'QAR',
    name_plural: 'Qatari rials'
  },
  RON: {
    symbol: 'RON',
    name: 'Romanian Leu',
    symbol_native: 'RON',
    decimal_digits: 2,
    rounding: 0,
    code: 'RON',
    name_plural: 'Romanian lei'
  },
  RSD: {
    symbol: 'din.',
    name: 'Serbian Dinar',
    symbol_native: 'дин.',
    decimal_digits: 0,
    rounding: 0,
    code: 'RSD',
    name_plural: 'Serbian dinars'
  },
  RUB: {
    symbol: 'RUB',
    name: 'Russian Ruble',
    symbol_native: '₽.',
    decimal_digits: 2,
    rounding: 0,
    code: 'RUB',
    name_plural: 'Russian rubles'
  },
  RWF: {
    symbol: 'RWF',
    name: 'Rwandan Franc',
    symbol_native: 'FR',
    decimal_digits: 0,
    rounding: 0,
    code: 'RWF',
    name_plural: 'Rwandan francs'
  },
  SAR: {
    symbol: 'SR',
    name: 'Saudi Riyal',
    symbol_native: 'ر.س.‏',
    decimal_digits: 2,
    rounding: 0,
    code: 'SAR',
    name_plural: 'Saudi riyals'
  },
  SDG: {
    symbol: 'SDG',
    name: 'Sudanese Pound',
    symbol_native: 'SDG',
    decimal_digits: 2,
    rounding: 0,
    code: 'SDG',
    name_plural: 'Sudanese pounds'
  },
  SEK: {
    symbol: 'Skr',
    name: 'Swedish Krona',
    symbol_native: 'kr',
    decimal_digits: 2,
    rounding: 0,
    code: 'SEK',
    name_plural: 'Swedish kronor'
  },
  SGD: {
    symbol: 'S$',
    name: 'Singapore Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'SGD',
    name_plural: 'Singapore dollars'
  },
  SOS: {
    symbol: 'Ssh',
    name: 'Somali Shilling',
    symbol_native: 'Ssh',
    decimal_digits: 0,
    rounding: 0,
    code: 'SOS',
    name_plural: 'Somali shillings'
  },
  SYP: {
    symbol: 'SY£',
    name: 'Syrian Pound',
    symbol_native: 'ل.س.‏',
    decimal_digits: 0,
    rounding: 0,
    code: 'SYP',
    name_plural: 'Syrian pounds'
  },
  THB: {
    symbol: '฿',
    name: 'Thai Baht',
    symbol_native: '฿',
    decimal_digits: 2,
    rounding: 0,
    code: 'THB',
    name_plural: 'Thai baht'
  },
  TND: {
    symbol: 'DT',
    name: 'Tunisian Dinar',
    symbol_native: 'د.ت.‏',
    decimal_digits: 3,
    rounding: 0,
    code: 'TND',
    name_plural: 'Tunisian dinars'
  },
  TOP: {
    symbol: 'T$',
    name: 'Tongan Paʻanga',
    symbol_native: 'T$',
    decimal_digits: 2,
    rounding: 0,
    code: 'TOP',
    name_plural: 'Tongan paʻanga'
  },
  TRY: {
    symbol: 'TL',
    name: 'Turkish Lira',
    symbol_native: 'TL',
    decimal_digits: 2,
    rounding: 0,
    code: 'TRY',
    name_plural: 'Turkish Lira'
  },
  TTD: {
    symbol: 'TT$',
    name: 'Trinidad and Tobago Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'TTD',
    name_plural: 'Trinidad and Tobago dollars'
  },
  TWD: {
    symbol: 'NT$',
    name: 'New Taiwan Dollar',
    symbol_native: 'NT$',
    decimal_digits: 2,
    rounding: 0,
    code: 'TWD',
    name_plural: 'New Taiwan dollars'
  },
  TZS: {
    symbol: 'TSh',
    name: 'Tanzanian Shilling',
    symbol_native: 'TSh',
    decimal_digits: 0,
    rounding: 0,
    code: 'TZS',
    name_plural: 'Tanzanian shillings'
  },
  UAH: {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    symbol_native: '₴',
    decimal_digits: 2,
    rounding: 0,
    code: 'UAH',
    name_plural: 'Ukrainian hryvnias'
  },
  UGX: {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    symbol_native: 'USh',
    decimal_digits: 0,
    rounding: 0,
    code: 'UGX',
    name_plural: 'Ugandan shillings'
  },
  USH: {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    symbol_native: 'USh',
    decimal_digits: 0,
    rounding: 0,
    code: 'UGX',
    name_plural: 'Ugandan shillings'
  },
  UYU: {
    symbol: '$U',
    name: 'Uruguayan Peso',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'UYU',
    name_plural: 'Uruguayan pesos'
  },
  UZS: {
    symbol: 'UZS',
    name: 'Uzbekistan Som',
    symbol_native: 'UZS',
    decimal_digits: 0,
    rounding: 0,
    code: 'UZS',
    name_plural: 'Uzbekistan som'
  },
  VEF: {
    symbol: 'Bs.F.',
    name: 'Venezuelan Bolívar',
    symbol_native: 'Bs.F.',
    decimal_digits: 2,
    rounding: 0,
    code: 'VEF',
    name_plural: 'Venezuelan bolívars'
  },
  VND: {
    symbol: '₫',
    name: 'Vietnamese Dong',
    symbol_native: '₫',
    decimal_digits: 0,
    rounding: 0,
    code: 'VND',
    name_plural: 'Vietnamese dong'
  },
  XAF: {
    symbol: 'FCFA',
    name: 'CFA Franc BEAC',
    symbol_native: 'FCFA',
    decimal_digits: 0,
    rounding: 0,
    code: 'XAF',
    name_plural: 'CFA francs BEAC'
  },
  XOF: {
    symbol: 'CFA',
    name: 'CFA Franc BCEAO',
    symbol_native: 'CFA',
    decimal_digits: 0,
    rounding: 0,
    code: 'XOF',
    name_plural: 'CFA francs BCEAO'
  },
  YER: {
    symbol: 'YR',
    name: 'Yemeni Rial',
    symbol_native: 'ر.ي.‏',
    decimal_digits: 0,
    rounding: 0,
    code: 'YER',
    name_plural: 'Yemeni rials'
  },
  ZAR: {
    symbol: 'R',
    name: 'South African Rand',
    symbol_native: 'R',
    decimal_digits: 2,
    rounding: 0,
    code: 'ZAR',
    name_plural: 'South African rand'
  },
  ZMK: {
    symbol: 'ZK',
    name: 'Zambian Kwacha',
    symbol_native: 'ZK',
    decimal_digits: 0,
    rounding: 0,
    code: 'ZMK',
    name_plural: 'Zambian kwachas'
  },
  ZWL: {
    symbol: 'ZWL$',
    name: 'Zimbabwean Dollar',
    symbol_native: 'ZWL$',
    decimal_digits: 0,
    rounding: 0,
    code: 'ZWL',
    name_plural: 'Zimbabwean Dollar'
  }
};
