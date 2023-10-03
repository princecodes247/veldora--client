type SettingInput = {
  value: string;
  name: string;
  description: string;
};

export const BucketValidationTypeInputValues: SettingInput[] = [
  {
    value: "text",
    name: "Text",
    description: "A short string of text, like 'Hello World'",
  },

  //   LEVEL 2
  {
    value: "email",
    name: "Email",
    description: "An email address, like 'support@veldora.io'",
  },

  {
    value: "url",
    name: "URL",
    description: "A URL, like 'https://veldora.io'",
  },
  {
    value: "phone",
    name: "Phone",
    description: "A phone number, like '555-555-5555'",
  },
  {
    value: "boolean",
    name: "Boolean",
    description: "A true or false value",
  },

  //   LEVEL 3
  //   {
  //     value: "photo",
  //     name: "Photo",
  //     description: "A photo, like 'https://veldora.io/photo.png'",
  //   },
  //   {
  //     value: "file",
  //     name: "File",
  //     description: "A file, like 'https://veldora.io/file.pdf'",
  //   },

  //   LEVEL 4
  // {
  //     value: "long-text",
  //     name: "Long Text",
  //     description: "A long string of text, like a blog post",
  //   },
  // {
  //     value: "date",
  //     name: "Date",
  //     description: "A date, like 2021-01-01",
  //   },
  //   {
  //     value: "integer",
  //     name: "Integer",
  //     description: "A whole number, like 42",
  //   },
  //   {
  //     value: "decimal",
  //     name: "Decimal",
  //     description: "A number with a decimal point, like 3.14",
  //   },
];

export const BucketValidationIsOptionalInputValues: SettingInput[] = [
  {
    value: "yes",
    name: "Yes",
    description: "The input is optional",
  },

  {
    value: "no",
    name: "No",
    description: "The input is required",
  },
];

export const BucketValidationIsUniqueInputValues: SettingInput[] = [
  {
    value: "yes",
    name: "Unique",
    description: "The input is unique",
  },

  {
    value: "no",
    name: "Not Unique",
    description: "The input is not unique",
  },
];
