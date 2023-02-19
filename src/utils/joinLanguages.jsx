const joinLanguages = (languages) => {
  const data = languages.map((language) => language.name);

  return data.join(', ');
};

export default joinLanguages;
