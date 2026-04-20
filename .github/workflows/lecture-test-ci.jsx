// name: Lecture Test CI

// # on:
// #   push:
// #     branches:
// #       - main
// #     paths:
// #       - "lecture-test/**"
// #   pull_request:
// #     branches:
// #       - main
// #     paths:
// #       - "lecture-test/**"

// # concurrency:
// #   group: ${{ github.workflow }}-${{ github.ref }}
// #   cancel-in-progress: true

// # jobs:
// #   build-test:
// #     runs-on: ubuntu-latest
// #     strategy:
// #       matrix:
// #         project:
// #           - name: react-foundation
// #             path: ./lecture-test/react-foundation
// #             cache-path: lecture-test/react-foundation/package-lock.json
// #           - name: typescript-foundation
// #             path: ./lecture-test/typescript-foundation
// #             cache-path: lecture-test/typescript-foundation/package-lock.json
// #     steps:
// #       - name: Checkout code
// #         uses: actions/checkout@v4

// #       - name: Setup Node.js
// #         uses: actions/setup-node@v4
// #         with:
// #           node-version: "22"
// #           cache: "npm"
// #           cache-dependency-path: ${{ matrix.project.cache-path }}

// #       - name: Install dependencies
// #         working-directory: ${{ matrix.project.path }}
// #         run: npm ci

// #       - name: Lint check
// #         if: matrix.project.name == 'react-foundation'
// #         working-directory: ${{ matrix.project.path }}
// #         run: npm run lint

// #       - name: Build project
// #         working-directory: ${{ matrix.project.path }}
// #         run: npm run build
