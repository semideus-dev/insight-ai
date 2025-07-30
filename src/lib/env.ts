const env = {
  databaseUrl: process.env.DATABASE_URL,
  appUrl: process.env.NEXT_PUBLIC_APP_URL,

  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,

  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  geminiApiKey: process.env.GEMINI_API_KEY,

  modalEndpoint: process.env.PROCESS_VIDEO_ENDPOINT,
  modalEnpointAuth: process.env.PROCESS_VIDEO_ENDPOINT_AUTH,

  awsRegion: process.env.AWS_REGION,
  awsAccessKey: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsBucket: process.env.S3_BUCKET_NAME,
};

export default env;
