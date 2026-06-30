# -------------------------------------------------
# Stage 1
# -------------------------------------------------

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm prune --omit=dev


# -------------------------------------------------
# Stage 2
# -------------------------------------------------

FROM node:22-alpine

LABEL maintainer="BakVakum Production"

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5000

CMD ["node","server.js"]