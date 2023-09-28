echo "Starting the Deployment of Code Repo Build for Repo"
REGION=ap-south-1
echo $REGION
STAGE=prod
REPO_NAME=meyi-landing-page
DEVOPS_STACK=${STAGE}-plant365-landing-pipeline
DOMAIN=plant365.in
DOMAIN_NAME=${DOMAIN}
SOURCE_S3BUCKET=${STAGE}.website.${DOMAIN}
DOMAIN_ALIAS=${STAGE}.${DOMAIN}
APIDOMAINURL=https://api.${STAGE}.${DOMAIN}/
ACMCERTIFICATEARN=arn:aws:acm:us-east-1:607359138267:certificate/c9e8705d-1250-438d-a97d-1753302422a9
DEPLOY_BUCKET=${STAGE}-plant365-deployments
sam deploy -t pipeline.yaml --stack-name ${DEVOPS_STACK} --region=${REGION} --capabilities=CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND --parameter-overrides "ParameterKey=Environment,ParameterValue=${STAGE}"  "ParameterKey=Region,ParameterValue=${REGION}"  "ParameterKey=CodeCommitRepositoryName,ParameterValue=${REPO_NAME}" "ParameterKey=DomainName,ParameterValue=${DOMAIN_NAME}" "ParameterKey=APIDOMAINURL,ParameterValue=${APIDOMAINURL}" "ParameterKey=SourceS3Bucket,ParameterValue=${SOURCE_S3BUCKET}" "ParameterKey=AcmCertificateArn,ParameterValue=${ACMCERTIFICATEARN}" "ParameterKey=DomainAlias,ParameterValue=${DOMAIN_ALIAS}" "ParameterKey=PipelineBucket,ParameterValue=${DEPLOY_BUCKET}"