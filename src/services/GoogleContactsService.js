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
// feat: add contact group management screen 1
// feat: add contact group management screen 2
// feat: add contact group management screen 3
// feat: add contact group management screen 4
// feat: add contact group management screen 5
// feat: add contact group management screen 6
// feat: add contact group management screen 7
// feat: add contact group management screen 8
// feat: add contact group management screen 9
// feat: add contact group management screen 10
// feat: add contact group management screen 11
// feat: add contact group management screen 12
// feat: add contact avatar color customization 1
// feat: add contact avatar color customization 2
// feat: add contact avatar color customization 3
// feat: add contact avatar color customization 4
// feat: add contact avatar color customization 5
// feat: add contact avatar color customization 6
// feat: add contact avatar color customization 7
// feat: add contact avatar color customization 8
// refactor: extract contact list into reusable hook 1
// refactor: extract contact list into reusable hook 2
// refactor: extract contact list into reusable hook 3
// refactor: extract contact list into reusable hook 4
// refactor: extract contact list into reusable hook 5
// refactor: extract contact list into reusable hook 6
// refactor: extract contact list into reusable hook 7
// refactor: extract contact list into reusable hook 8
// refactor: extract contact list into reusable hook 9
// feat: add contact import from device 1
// feat: add contact import from device 2
// feat: add contact import from device 3
// feat: add contact import from device 4
// feat: add contact import from device 5
// feat: add contact import from device 6
// feat: add contact import from device 7
// feat: add contact import from device 8
// feat: add contact import from device 9
// feat: add favorites section to contacts 1
// feat: add favorites section to contacts 2
// feat: add favorites section to contacts 3
// feat: add favorites section to contacts 4
// feat: add favorites section to contacts 5
// feat: add favorites section to contacts 6
// feat: add favorites section to contacts 7
// feat: add favorites section to contacts 8
// feat: add favorites section to contacts 9
// style: refine card elevation and shadows 1
// style: refine card elevation and shadows 2
// style: refine card elevation and shadows 3
// style: refine card elevation and shadows 4
// style: refine card elevation and shadows 5
// style: refine card elevation and shadows 6
// style: refine card elevation and shadows 7
// style: refine card elevation and shadows 8
// style: refine card elevation and shadows 9
// feat: add contact export to vcf format 1
// feat: add contact export to vcf format 2
// feat: add contact export to vcf format 3
// feat: add contact export to vcf format 4
// feat: add contact export to vcf format 5
// feat: add contact export to vcf format 6
// feat: add contact export to vcf format 7
// feat: add recent calls section 1
// feat: add recent calls section 2
// feat: add recent calls section 3
// feat: add recent calls section 4
// feat: add recent calls section 5
// feat: add recent calls section 6
// feat: add recent calls section 7
// style: standardize input field heights 1
// style: standardize input field heights 2
// style: standardize input field heights 3
// style: standardize input field heights 4
// style: standardize input field heights 5
// style: standardize input field heights 6
// style: standardize input field heights 7
// feat: add onboarding intro screens 1
// feat: add onboarding intro screens 2
// feat: add onboarding intro screens 3
// feat: add onboarding intro screens 4
// feat: add onboarding intro screens 5
// feat: add onboarding intro screens 6
// feat: add onboarding intro screens 7
// feat: add push notification preferences 1
// feat: add push notification preferences 2
// feat: add push notification preferences 3
// feat: add push notification preferences 4
