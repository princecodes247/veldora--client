export type SnippetLanguages = "html" | "fetch" | "axios" | "flutter";
export type SnippetMethods = "GET" | "POST" | "DELETE" | "PUT";
export const generateIntegrationSnippets: (
  endpoint: string,
  method: SnippetMethods,
  accessToken?: string,
) => {
  [name: string]: {
    code: string;
    language: string;
  };
} = (apiEndpoint, method, accessToken) => ({
  html: {
    code: `
    <form action="${apiEndpoint}" method="${method}">
        <input name="title" />
    </form>
      `,
    language: "xml",
  },
  fetch: {
    code: `
    fetch('${apiEndpoint}', {
      method: '${method}',${
      accessToken
        ? `
        headers: {
          'Authorization': "Bearer ${accessToken}",
        },`
        : ""
    }
    ${
      method === "POST" || method === "PUT"
        ? " body: JSON.stringify({ title }),"
        : ""
    }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    `,
    language: "javascript",
  },
  axios: {
    code: `
    axios.${method.toLowerCase()}('${apiEndpoint}'${
      method === "POST" || method === "PUT" ? ", { title }" : ""
    }${
      accessToken
        ? `, {
        headers: {
          'Authorization': "Bearer ${accessToken}",
        },
      })`
        : ")"
    }
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
    `,
    language: "javascript",
  },
  flutter: {
    code: `
    Future<void> fetchData() async {
      final response = await http.${method.toLowerCase()}(
        Uri.parse('$apiEndpoint')${
          accessToken
            ? `, headers: {
        'Authorization': "Bearer ${accessToken}",
      },`
            : ","
        }
        ${
          method === "POST" || method === "PUT"
            ? "body: jsonEncode({ title }),"
            : ""
        }
      );
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
