# im-a-server

Give your server's hostname a proper home on the Internet.

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
