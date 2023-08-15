# Vite React MUI

Vite react mui template consists of react using vite and mui frontend framework

## Table of contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

## Project Overview

The project consists of the template for creating react application using vite. The project consists of eslint with [airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [material ui](https://mui.com/) frontend framework framework

## Getting Started

### Prerequisites

- [Node JS : >18](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/engine/install/) _optional_

### Installation

1. Clone the repository:

```sh
git clone https://github.com/najeen182/vite-react-mui.git
```

2. Navigate to the project directory

```bash
cd vite-react-mui
```

**Non-Docker Installation**(_skip if you are using docker_)

3. Install Dependencies

```bash
yarn install
```

4. Copy environment file

```bash
cp .env.example .env
```

## Usage

**Run the Development Server:**

Start the development server and open the app in your browser

```bash
yarn dev
```

The app will be available at http://localhost:5178.

**With Docker**

```bash
docker-compose up
```

**Folder Structure**

```
src/
|-- assets/
|   |-- images/
|   |-- styles/
|-- components/
|   |-- common/
|   |   |-- Button.jsx
|   |   |-- Input.jsx
|   |-- feature1/
|   |   |-- Feature1Component.jsx
|   |   |-- Feature1Helper.jsx
|   |   |-- Feature1Styles.css
|   |-- feature2/
|       |-- Feature2Component.jsx
|       |-- Feature2Helper.jsx
|-- pages/
|   |-- Home.jsx
|   |-- Dashboard.jsx
|-- services/
|   |-- api.js
|   |-- auth.js
|-- utils/
|   |-- helpers.js
|   |-- constants.js
|-- App.jsx
|-- main.jsx

```

## Environment Variables

In order, to update environment variable or add variable, beging the enviornment with Prefix `VITE`
