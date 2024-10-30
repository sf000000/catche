# Catche

Catche is a fast and anonymous file-sharing application built with modern web technologies. It allows users to share files, images, and videos with complete anonymity, without the need for sign-up or account creation.

![Catche Screenshot](https://i.postimg.cc/76F8cygn/664-2x-shots-so.png)

## Features

-   **Anonymous File Sharing**: Share files without creating an account.
-   **Multiple File Types Supported**: Upload images, videos, audio files, PDFs, and ZIP archives.
-   **Built with Modern Technologies**: Next.js, TypeScript, Tailwind CSS, and more.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

-   Node.js
-   npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sf000000/catche.git
    cd catche
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. Open [http://localhost:3000](http://localhost:3000)

## Usage

-   Navigate to the upload page to start sharing files.
-   Drag and drop files into the upload zone or click to select files.
-

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```
AWS_REGION=your-aws-region
AWS_BUCKET_NAME=your-s3-bucket-name
GITHUB_TOKEN=your-github-token
GITHUB_OWNER=your-github-username
GITHUB_REPO=your-repo-name
MAX_FILE_SIZE=50MB
MAX_FILES=10
```

## Built With

-   [Next.js](https://nextjs.org) - The React Framework for Production
-   [TypeScript](https://www.typescriptlang.org) - Typed JavaScript at Any Scale
-   [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
-   [AWS S3](https://aws.amazon.com/s3/) - Scalable storage in the cloud

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
