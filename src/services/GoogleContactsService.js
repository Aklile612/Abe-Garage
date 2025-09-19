const PEOPLE_API_BASE = "https://people.googleapis.com/v1";

export async function listContacts(accessToken) {
  const response = await fetch(
    `${PEOPLE_API_BASE}/people/me/connections?personFields=names,phoneNumbers,emailAddresses`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const data = await response.json();
  return data.connections || [];
}

export async function createContact(accessToken, { name, phone }) {
  const response = await fetch(`${PEOPLE_API_BASE}/people:createContact`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      names: [{ givenName: name }],
      phoneNumbers: [{ value: phone }],
    }),
  });
  return response.json();
}

export async function updateContact(accessToken, resourceName, { name, phone }) {
  const response = await fetch(
    `${PEOPLE_API_BASE}/${resourceName}:updateContact?updateMask=names,phoneNumbers`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names: [{ givenName: name }],
        phoneNumbers: [{ value: phone }],
      }),
    }
  );
  return response.json();
}

export async function deleteContact(accessToken, resourceName) {
  const response = await fetch(`${PEOPLE_API_BASE}/${resourceName}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.ok;
}

export async function searchContacts(accessToken, query) {
  const response = await fetch(
    `${PEOPLE_API_BASE}/people:searchContacts?query=${encodeURIComponent(query)}&pageSize=10`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const data = await response.json();
  return data.results || [];
}
// sync opt 1
// sync opt 2
// sync opt 3
// sync opt 4
// sync opt 5
// sync opt 6
// sync opt 7
// sync opt 8
// sync opt 9
// sync opt 10
// sync opt 11
// sync opt 12
// sync opt 13
// sync opt 14
// sync opt 15
// sync opt 1
// sync opt 2
// sync opt 3
// sync opt 4
// sync opt 5
// sync opt 6
// sync opt 7
// sync opt 8
// sync opt 9
// sync opt 10
// sync opt 11
// sync opt 12
// sync opt 13
// sync opt 14
// sync opt 15
// sync opt 1
// sync opt 2
// sync opt 3
// sync opt 4
// sync opt 5
// sync opt 6
// sync opt 7
// sync opt 8
// sync opt 9
// sync opt 10
