# CatchUp (catch-up)

## Overview

The CatchUp project is a news aggregation application that allows users to browse news sources, access articles, engage with inclusive and ethical features, and share or visit original article content. This is built with TypeScript and Angular Framework. It follows a Domain-Driven Design Approach, having NewsAPI.org as a news provider and Clearbit Logo API as source logo provider.

## Features

- **Browse News Sources**: Access available news sources, including their names, with the first source chosen by default, and switch between sources seamlessly.
- **Access Articles**: View articles from a chosen source, including titles and summaries, with articles for the default source loaded automatically on startup.
- **Ethical and Inclusive Engagement**: Choose between English or Spanish to interact in your preferred language and access attributions for NewsAPI.org and Clearbit Logo API to understand data sources.
- **Interact with Articles**: Share articles via a sharing mechanism (or copy the URL if unsupported) with confirmation, and visit the original article source for full content.

## Prerequisites

- **Node.js**: Version 20.x or higher.
- **Angular CLI**: Version 19.2.10.
- **NewsAPI.org API Key**: Obtain a free key from [NewsAPI.org](https://newsapi.org).
- **Git**: For cloning the repository.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/upc-pre-202510-1ASI0729-daos-sandbox/s04-hello-angular-consuming-restapi.git
   cd catchup
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:

  - Update `environment.ts` with your NewsAPI.org API key or configure a backend proxy (see Security Recommendations):
    ```typescript
    export const environment = {
      production: false,
      newsProviderApiBaseUrl: 'https://newsapi.org/v2',
      newsProviderNewsEndpointPath: '/top-headlines',
      newsProviderSourcesEndpointPath: '/top-headlines/sources',
      newsProviderApiKey: 'YOUR_NEWSAPI_KEY',
      logoProviderApiBaseUrl: 'https://logo.clearbit.com/'
    };
    ```

4. **Run the Application**:
   ```bash
   ng serve
   ```
  - Open [http://localhost:4200](http://localhost:4200) in your browser.

5. **Build for Production**:
   ```bash
   ng build
   ```

## Documentation

- **User Stories**: Detailed requirements in [docs/user-stories.md](docs/user-stories.md).
- **Class Diagram**: Component and service relationships in [docs/class-diagram.puml](docs/class-diagram.puml).
- **Software Architecture**: DDD and system design in [docs/software-architecture.dsl](docs/software-architecture.dsl).

## Author
This project was developed by Open Source Application Development Team.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
