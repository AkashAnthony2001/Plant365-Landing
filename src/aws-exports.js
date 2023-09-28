/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const dev = {
  aws_project_region: "ap-south-1",
  aws_cognito_region: "ap-south-1",
  aws_user_pools_id: "ap-south-1_LdYoGKYNJ",
  aws_user_pools_web_client_id: "3bh26fqrk4606cv1fcp5pjc97d",
  oauth: {
    domain: "dev-meyi-contractors.auth.ap-south-1.amazoncognito.com",
    redirectSignIn: "https://dev.meyi.io",
    redirectSignOut: "https://dev.meyi.io",
    responseType: "code",
  },
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: ["GOOGLE"],
  aws_cognito_signup_attributes: [],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS",
    ],
  },
  aws_cognito_verification_mechanisms: ["EMAIL", "PHONE_NUMBER"],
};
const prod = {
  aws_project_region: "ap-south-1",
  aws_cognito_region: "ap-south-1",
  aws_user_pools_id: "ap-south-1_D7B3K0rAc",
  aws_user_pools_web_client_id: "dv4l5mgr5rp7bhcm52t8tof1f",
  oauth: {
    domain: "contractors.plant365.in",
    redirectSignIn: "https://plant36.in",
    redirectSignOut: "https://plant36.in",
    responseType: "code",
  },
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: ["GOOGLE"],
  aws_cognito_signup_attributes: [],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS",
    ],
  },
  aws_cognito_verification_mechanisms: ["EMAIL", "PHONE_NUMBER"],
};

const demo = {
  aws_project_region: "ap-south-1",
  aws_cognito_region: "ap-south-1",
  aws_user_pools_id: "ap-south-1_LdYoGKYNJ",
  aws_user_pools_web_client_id: "3bh26fqrk4606cv1fcp5pjc97d",
  oauth: {
    domain: "dev-meyi-contractors.auth.ap-south-1.amazoncognito.com",
    redirectSignIn: "https://dev.meyi.io",
    redirectSignOut: "https://dev.meyi.io",
    responseType: "code",
  },
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: ["GOOGLE"],
  aws_cognito_signup_attributes: [],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS",
    ],
  },
  aws_cognito_verification_mechanisms: ["EMAIL", "PHONE_NUMBER"],
};

let config = {}
if(process.env.REACT_APP_STAGE === "prod"){
  config = {  
    ...prod
  };
}else if(process.env.REACT_APP_STAGE === "dev"){
  config = {  
    ...dev
  };
}else if(process.env.REACT_APP_STAGE === "demo"){
  config = {  
    ...demo
  };
}else{
  config = {  
    ...dev
  };
}
export default config;