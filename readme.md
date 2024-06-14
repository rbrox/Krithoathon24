# AI-Based Location History Application

## Project Overview

The AI-Based Location History Application is developed for a hackathon project, initially focusing on exploring the most visited tourist attractions. The application utilizes AI and machine learning technologies to provide insights into historical events, cultural significance, economic impact, and interactive mapping of selected locations. It enhances user understanding and engagement by leveraging APIs for data retrieval and integrating with external services like Wikipedia for comprehensive information.

## Functionalities (Minimum Viable Product - MVP)

1. **Historical Events Timeline**:

   - Display a chronological timeline of key historical events related to the most visited tourist attractions.

2. **Cultural Significance Index**:

   - Provide an index or score indicating the cultural importance of each tourist attraction, including heritage sites, museums, and local traditions.

3. **Economic Impact Analysis**:

   - Present data on the economic growth and impact of each tourist attraction over time, including major industries, companies, and economic milestones.

4. **Interactive Map with Historical Layers**:

   - Allow users to view each tourist attraction at different points in time with overlays showing historical boundaries, landmarks, and significant sites.

5. **Integration with Wikipedia API**:

   - Utilize the Wikipedia API to fetch detailed information about each tourist attraction, enhancing user knowledge and engagement.

6. **Voice Interaction (Future Enhancement)**:

   - Integrate GPT-4.0 or similar technology for voice-based interaction, enabling users to ask questions or request information about historical events and attractions.

7. **Augmented Reality (AR) Features**:
   - Implement AR capabilities for users to visualize historical reconstructions and interact with monuments through the application's camera functionality.

## Folder Structure

```
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── config.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       └── index.js
├── Dockerfile
├── package.json
└── README.md
```

### Getting Started Locally

#### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance or URI for database storage.
- Google Maps API key for mapping functionalities.
- Wikipedia API key for fetching information about tourist attractions.
- Optional: GPT-4.0 API key for voice interaction, AR capabilities for camera functionality.

#### Steps to Start the Project Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your/repository.git
   cd repository-name
   ```

2. **Set Up Backend**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env file with MongoDB URI, Google Maps API key, Wikipedia API key, GPT-4.0 API key, and other necessary credentials
   npm start
   ```

3. **Set Up Frontend**

   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to view the AI-Based Location History Application.

### Additional Notes

- Ensure proper API keys and environment variables are configured for Google Maps API, Wikipedia API, GPT-4.0 API, and any other services used.
- Modify and expand functionalities based on project requirements and user feedback during development.
- Refer to the documentation and official guides for each API and service integration for detailed setup and customization.
# Krithoathon24
