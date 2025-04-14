FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN bun run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public folder not used at the moment
# COPY --from=builder /app/public ./public

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

USER nextjs

EXPOSE 3000

CMD ["bun", "start"]