FROM tomyj/my-env:node
ENV PORT=80
ENV API_HOSTNAME=api:8000
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npx next build
CMD [ "npx", "next", "start" ]