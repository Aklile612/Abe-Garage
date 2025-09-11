import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = Platform.select({
  ios: "YOUR_IOS_CLIENT_ID",
  android: "YOUR_ANDROID_CLIENT_ID",
});

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

const SCOPES = [
  "https://www.googleapis.com/auth/contacts",
  "profile",
  "email",
];

export async function signInWithGoogle() {
  try {
    const redirectUri = AuthSession.makeRedirectUri({
      scheme: "abe-garage",
    });

    const authRequest = new AuthSession.AuthRequest({
      clientId: CLIENT_ID,
      scopes: SCOPES,
      redirectUri,
      responseType: AuthSession.ResponseType.Token,
      usePKCE: true,
    });

    const result = await authRequest.promptAsync(discovery);

    if (result.type === "success") {
      const { accessToken } = result.params;
      const userInfo = await fetchUserInfo(accessToken);
      return { accessToken, userInfo };
    }

    return null;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
}

async function fetchUserInfo(accessToken) {
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.json();
}

export async function refreshToken(refreshToken) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }).toString(),
  });

  const data = await response.json();
  return data.access_token;
}
