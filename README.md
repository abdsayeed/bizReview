# BizReview - Business Review Application

A full-stack web application for browsing and reviewing local businesses with real-time data visualization and authentication.

## 🎯 Features

- **Business Directory**: Browse a comprehensive list of businesses with detailed information
- **Advanced Grid Visualization**: AG Grid with filtering, sorting, and pagination for data exploration
- **Google Maps Integration**: View business locations on interactive maps with advanced markers
- **Review System**: Submit and view customer reviews with star ratings
- **User Authentication**: Secure login with Auth0 OAuth integration
- **Responsive Design**: Bootstrap 5 for mobile-friendly UI
- **Real-time Review Generation**: Auto-populate reviews with Lorem Ipsum content for testing
- **RESTful API**: Flask backend with CORS-enabled endpoints
- **Database**: MongoDB for persistent data storage

## 🏗️ Architecture

### Frontend (Angular 20)
Located in `bizFE/`
- **Framework**: Angular 20.1.0 with TypeScript
- **Styling**: Bootstrap 5.3.8
- **UI Components**: 
  - Business list with pagination
  - Business detail page with Google Maps
  - Interactive AG Grid for data visualization
  - Review submission form with validation
  - Navigation bar with Auth0 integration
- **Services**: 
  - BusinessData service for local data management
  - WebData service for API communication

### Backend (Flask)
Located in `blueprint/`
- **Framework**: Flask with Python 3.11
- **Database**: MongoDB with PyMongo driver
- **Features**:
  - `/businesses` - Paginated business listing
  - `/businesses/{id}` - Single business details
  - `/businesses/{id}/reviews` - Review management
  - `/allbusinesses` - Complete data export for AG Grid
- **Security**: JWT authentication, CORS enabled

## 📋 Key Technologies

### Frontend Stack
- Angular 20.1.0
- TypeScript 5.2.2
- RxJS for reactive programming
- AG Grid for advanced data visualization
- Google Maps Angular integration
- Auth0 for authentication
- Bootstrap 5 for styling

### Backend Stack
- Flask 2.3.3
- Python 3.11
- MongoDB
- PyJWT for token management
- Bcrypt for password hashing
- Flask-CORS for cross-origin requests

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- MongoDB running locally or cloud instance

### Frontend Setup
```bash
cd bizFE
npm install
npm start
```
Frontend runs on `http://localhost:4200`

### Backend Setup
```bash
cd blueprint
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Backend runs on `http://localhost:5000`

## 📖 Usage

1. **Browse Businesses**: Navigate to `/businesses` to view the business list
2. **View Details**: Click on a business to see location, reviews, and add new reviews
3. **Use Grid View**: Go to `/grid` for advanced filtering and sorting with AG Grid
4. **Login**: Click login to authenticate with Auth0
5. **Submit Reviews**: Fill the review form with your feedback

## 🔧 Configuration

### Auth0 Setup
Update `bizFE/src/app/app.config.ts`:
```typescript
provideAuth0({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientId: 'YOUR_AUTH0_CLIENT_ID',
})
```

### API Ninjas (for Lorem Ipsum)
Update `bizFE/src/app/web-data.ts`:
```typescript
private apiNinjasKey = 'YOUR_API_NINJAS_KEY';
```

## 📁 Project Structure

```
bizReview/
├── bizFE/                          # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── services/          # Business & Web data services
│   │   │   ├── businesses/        # Business list & detail components
│   │   │   ├── business-grid/     # AG Grid visualization
│   │   │   ├── home/              # Home & auth component
│   │   │   └── navigation/        # Navigation bar
│   │   ├── assets/                # Business data JSON
│   │   └── styles.css             # Global styles
│   └── package.json
├── blueprint/                      # Flask Backend
│   ├── app.py                     # Main Flask app
│   ├── businesses/                # Business routes
│   ├── reviews/                   # Review endpoints
│   ├── auth/                      # Authentication
│   └── globals.py                 # Database config
└── README.md
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/businesses?pn=1&ps=10` | Paginated business list |
| GET | `/businesses/{id}` | Business details with reviews |
| POST | `/businesses/{id}/reviews` | Add new review |
| GET | `/allbusinesses` | All businesses (for AG Grid) |

## 🔐 Authentication

- OAuth 2.0 with Auth0
- JWT tokens for API security
- Bcrypt password hashing
- Protected review submission endpoints

## 📊 Data Visualization

- **AG Grid Features**: Filtering, sorting, pagination, row selection
- **Google Maps**: Business location markers with zoom control
- **Responsive Tables**: Auto-adjusting columns

## 🐛 Development

### Running Tests
```bash
cd bizFE
npm test
```

### Build for Production
```bash
cd bizFE
npm run build
```

## 📝 License

This project is part of a COM661 Web Development course assignment.

## 👤 Author

**abdsayeed** - [GitHub Profile](https://github.com/abdsayeed)

---

**Repository**: https://github.com/abdsayeed/bizReview

For issues or contributions, please visit the GitHub repository.