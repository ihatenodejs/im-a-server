# im-a-server

Give your server's hostname a proper home on the Internet.

## Self-Host

1. **Clone our Repo**

   ```bash
   git clone https://git.pontusmail.org/librecloud/im-a-server
   ```

2. **Install dependencies**

   ```bash
   bun install
   npm install # or use npm
   ```

3. Now, you must choose whether to deploy with Docker or start a development server.

### Start Development Server

```bash
bun dev
```

A server will now be available on port 3000.

### Deploy with Docker

You can edit the default `docker-compose.yml` file to your liking, then execute the following:

```bash
docker compose up -d --build # builds and runs in background
```

## Configuration

Configuration is done through the `.tsx` files in `src/app/config`. Don't worry, even if you haven't used Next.js before, it's dead simple to configure.

Some other options may be configured with other methods, which are documented here.

### Server Name

Changing the server name displayed on the homepage and in the title of the page can be done by setting the `NEXT_PUBLIC_SERVER_NAME` environment variable. You might have to create a new `.env` file.

**Example:**

`/.env`

```text
NEXT_PUBLIC_SERVER_NAME=example
```

### Services

You can add service names and icons very easily through the `/src/app/config/services.ts` file. You can use any icon made for React (we suggest [React Icons](https://react-icons.github.io/react-icons)).

Comments have been added to help you import icons and place them in the right spot.
