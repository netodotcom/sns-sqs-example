export default () => ({
    awsBucket: process.env.AWS_S3_PUBLIC_BUCKET_NAME,
    awsRegion: process.env.AWS_S3_REGION,
    awsAccessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    awsSesRegion: process.env.AWS_SES_REGION,
    awsSesAcessKeyId: process.env.AWS_SES_ACCESS,
    awsSesSecretAccessKey: process.env.AWS_SES_SECRET,
    emailSender: process.env.EMAIL_SENDER,
    apiPort: Number(process.env.API_PORT) || 8000,
    appUrl: process.env.BASE_APP,
    apiUrl: process.env.BASE_API,
    apiKey: process.env.CACHE_KEY,
    docUser: process.env.API_DOC_USER,
    docPass: process.env.API_DOC_PASS,
    corsAllowList: process.env.CORS_WHITE_LIST.replace(/\s/g, '')?.split(','),
    mongoURI: `mongodb://${process.env.MONGO_USER || 'admin'}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${
        process.env.MONGO_PORT || '27017'
    }/${process.env.MONGO_NAME}?authSource=admin`,
    jwtPrivate: process.env.JWT_PRIVATE_KEY,
    jwtPublic: process.env.JWT_PUBLIC_KEY,
    expireTime: process.env.JWT_EXPIRE_TIME || '60d',
    emailConfirmationLink: `${process.env.BASE_API}api/v1/user/confirmate?token=`,
    templateEmailConfirmation: 'd-54366f57702341a0bcfc2bf7c4aea828',
    templateEmailRecover: 'd-0ddd1bcf976d40f1a3a4f912693810a2',
    templateEmailInvite: 'd-809ece906b3e42638fe1e174cebbdfd2',
    templateEmailChanged: 'd-301cded132f24558be1c7399e237c3a9',
    templateEmail2fa: 'd-b3d0bb91923b4333a6301728e9825dab',
    emailResetLink: process.env.BASE_APP,
    stripeSecret: process.env.STRIPE_SECRET_KEY,
    stripeWebhookKey: process.env.STRIPE_WEBHOOK_KEY,
    stripeProducts: {
        team: [
            {
                product_name: 'circle',
                product_id: process.env.STRIPE_PRODUCT_CIRCLE,
            },
            {
                product_name: 'enterprise',
                product_id: process.env.STRIPE_PRODUCT_ENTERPRISE,
            },
        ],
        user: [
            {
                product_name: 'pro',
                product_id: process.env.STRIPE_PRODUCT_PRO,
            },
        ],
    },
    domainName: process.env.APIDOMAIN,
    appleWalletPemFilePassword: process.env.APPLE_WALLET_PEM_FILE_PASSWORD,
    appleWalletPassIdentifier: process.env.APPLE_WALLET_PASS_IDENTIFIER,
    appleWalletTeamIdentifier: process.env.APPLE_WALLET_TEAM_IDENTIFIER,
    appleWalletSignerCert: process.env.APPLE_WALLET_SIGNER_CERT,
    appleWalletSignerKey: process.env.APPLE_WALLET_SIGNER_KEY,
    googleWalletIssuerId: process.env.GOOGLE_WALLET_ISSUER_ID,
    googleWalletCredentials: process.env.GOOGLE_WALLET_CREDENTIALS,
    googleWalletGenerateBaseUrl: process.env.GOOGLE_WALLET_GENERATE_BASE_URL,
    googleWalletTemplate: process.env.GOOGLE_WALLET_TEMPLATE,
    googleWalletScope: process.env.GOOGLE_WALLET_SCOPE,
    googleWalletBaseUrl: process.env.GOOGLE_WALLET_BASE_URL,
    testKey: process.env.TEST_KEY,
    hubspotAccessToken: process.env.HUBSPOT_ACCESS_TOKEN,
    monocardTeamId: process.env.MONOCARD_TEAM_ID,
    monthlySampleLimit: 10,
    shopifyToken: process.env.SHOPIFY_ADMIN_TOKEN,
    shopifyStore: process.env.SHOPIFY_STORE_DOMAIN,
});