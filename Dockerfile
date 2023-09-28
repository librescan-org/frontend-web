FROM node:18-alpine3.16

WORKDIR /app

COPY . .

RUN yarn install && \
    yarn build && \
    rm -rf /usr/local/share/.cache/yarn/v6

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
