const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    throw new Error('Failed to fetch countries list');
  }

  const data = responseJson.map((country) => {
    const {
      name, population, region, capital, flags,
    } = country;
    return {
      name, population, region, capital, flags,
    };
  });

  console.log('DONE');
  return data;
};

export const getCountryDetailsByFullName = async (fullNameCountry) => {
  const response = await fetch(`${BASE_URL}/name/${fullNameCountry}?fullText=true`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    throw new Error('Failed to fetch countries data');
  }

  const data = responseJson.map((country) => {
    const {
      name, nativeName, population, region, subregion,
      capital, topLevelDomain, currencies, languanges, borders,
    } = country;

    return {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languanges,
      borders,
    };
  });

  return data;
};

export const getCountryByCountryCode = async (countryCode) => {
  const response = await fetch(`${BASE_URL}/alpha/${countryCode}`);
  const responseJson = await response.json();

  if (responseJson.length === 0) {
    throw new Error('Failed to fetch countries data');
  }

  const data = responseJson.map((country) => {
    const {
      name, nativeName, population, region, subregion,
      capital, topLevelDomain, currencies, languanges, borders,
    } = country;

    return {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languanges,
      borders,
    };
  });

  return data;
};