export type SnippetLanguages = "html" | "fetch" | "axios" | "flutter";

export const generateIntegrationSnippets: (endpoint: string) => {
  [name: string]: {
    code: string;
    language: string;
  };
} = (apiEndpoint) => ({
  html: {
    code: `
    <form action="${apiEndpoint}" method="POST">
        <input name="title" />
    </form>
      `,
    language: "xml",
  },
  fetch: {
    code: `
    fetch('${apiEndpoint}', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
      `,
    language: "javascript",
  },
  axios: {
    code: `
    axios.get('${apiEndpoint}')
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));
      `,
    language: "javascript",
  },
  flutter: {
    code: `
    Future<void> fetchData() async {
        final response = await http.get(Uri.parse('$apiEndpoint'));
        if (response.statusCode == 200) {
            final data = jsonDecode(response.body);
            print(data);
        } else {
            throw Exception('Failed to load data');
        }
    }
      `,
    language: "dart",
  },
});
