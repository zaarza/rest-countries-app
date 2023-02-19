const BASE_URL = 'https://restcountries.com/v2';

export const getAllCountries = async () => {
  console.log('fetching countries');
  const response = await fetch(`${BASE_URL}/all`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    throw new Error('Failed to fetch countries list');
  }

  const data = responseJson.map((country) => {
    const {
      name, population, region, capital, flags, alpha3Code,
    } = country;
    return {
      name,
      population,
      region,
      capital,
      flags,
      countryCode: alpha3Code,
    };
  });

  console.log('done fetching countries');
  return data;
};

export const getCountryDetailsByFullName = async (fullName) => {
  console.log('fetching country details');
  const response = await fetch(`${BASE_URL}/name/${fullName}?fullText=true`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    throw new Error('Failed to fetch countries data');
  }

  const {
    flags,
    name,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    population,
  } = responseJson[0];

  console.log('done fetching country details');
  return {
    flags,
    name,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    population,
  };
};

export const getCountryDetailByCode = async (countryCode) => {
  console.log('Fetching country detail');
  const response = await fetch(`${BASE_URL}/alpha/${countryCode}`);
  const responseJson = await response.json();

  if (responseJson.name === undefined) {
    throw new Error('Failed to fetch countries data');
  }

  const {
    flags,
    name,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    population,
  } = responseJson;

  console.log('Done fetching country detail');
  return {
    flags,
    name,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    population,
  };
};
