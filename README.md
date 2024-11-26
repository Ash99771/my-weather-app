# Weather App

A simple weather application that uses the OpenWeatherMap API to fetch and display weather data.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system (version 14 or higher recommended).
- A free API key from [OpenWeatherMap](https://openweathermap.org/) (see instructions below).
- Used Countries API [Countries](https://countries.trevorblades.com/)
---

## How to Obtain an OpenWeatherMap API Key

1. **Create an Account**
    - Visit [OpenWeatherMap's Sign-Up Page](https://home.openweathermap.org/users/sign_up).
    - Register using your email and create a password, or sign up with Google or GitHub.

2. **Confirm Your Email**
    - Check your inbox for a confirmation email from OpenWeatherMap.
    - Click the link in the email to verify your account.

3. **Log In**
    - Log in to your account at [OpenWeatherMap Login](https://home.openweathermap.org/users/sign_in).

4. **Generate an API Key**
    - Navigate to the **"API keys"** section in your dashboard.
    - Click **"Create Key"**, name your key (e.g., `WeatherApp`), and generate it.

5. **Use the API Key**
    - Copy the generated API key.
    - Rename .env.example file to .env .
    - Replace `{VITE_API_KEY}` in your application .env file to your API Key.
    - Replace `{VITE_BASE_URL}` in your application .env file to `{https://api.openweathermap.org}`

---

## How to Run the Application

1. **Clone the Repository**
   ```bash
   git clone `repository url`
   cd weather-app
   npm install
   npm run dev