# Find the Dockerfile at the following URL:
# Node 14: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node14/node14-core-tools.Dockerfile
# Node 16: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node16/node16-core-tools.Dockerfile


ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update
RUN apt-get install libsecret-1-dev -y

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

