# Common build stage
FROM node:16 as common-build-stage

COPY . ./src/server/app

WORKDIR /src/server/app

RUN yarn

EXPOSE 3000

FROM common-build-stage as development-build-stage

CMD ["yarn", "dev"]

