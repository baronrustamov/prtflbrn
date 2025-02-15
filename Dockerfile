FROM node:18-alpine
RUN apk add --no-cache libc6-compat git python3 make g++
WORKDIR /app
RUN git clone https://github.com/baronrustamov/portal-docs .
RUN npm i -f next react-scripts
#RUN npm install -f
RUN yarn install 
#ENV NODE_OPTIONS openssl-legacy-provider
#RUN npm run build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "run"]
