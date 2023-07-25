FROM node:20

WORKDIR /gateway/

RUN npm install -g pnpm

# only copy the package files, this means that installed dependencies can be cached
# by docker as long as the dependencies in the package files haven't changed
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

# install dependencies
RUN pnpm install --frozen-lockfile --prod

# copy the whole app code to run it
COPY . .

CMD pnpm start
