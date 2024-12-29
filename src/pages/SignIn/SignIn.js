import React from "react";
import { AppProvider } from "@toolpad/core";
import { SignInPage } from "@toolpad/core";
import { useTheme } from "@emotion/react";
import { SiteSmallMark } from "../../compoents/SiteMark/SiteMark";

const providers = [{ id: "credentials", name: "Credentials" }];

const BRANDING = {
  logo: <SiteSmallMark />,
  title: "Football News",
};

const signIn = async (provider, formData) => {

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const email = formData?.get('email');
        const password = formData?.get('password');
        alert(
          `Signing in with "${provider.name}" and credentials: ${email}, ${password}`,
        );
        // preview-start
        resolve({
          type: 'CredentialsSignin',
          error: 'Invalid credentials.',
        });
        // preview-end
      }, 300);
    });
    return promise;
  };

function SignIn() {
  const theme = useTheme();

  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
    </AppProvider>
  );
}

export default SignIn;
