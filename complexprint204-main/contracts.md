# Print Complex API Contracts

## Overview
This document defines the API contracts for the Print Complex website backend integration.

## Frontend-Backend Integration

### Current Mock Data (to be replaced)
- `/app/frontend/src/data/mock.js` contains all mock data
- `submitRepairRequest()` function simulates API calls
- Form validation and UI interactions are working

### Backend Implementation Required

#### 1. Repair Request API
**Endpoint**: `POST /api/repair-requests`

**Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "company": "string (optional)",
  "equipment_brand": "string",
  "equipment_model": "string (optional)",
  "issue_type": "string",
  "urgency": "string",
  "description": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Repair request submitted successfully",
  "request_id": "string"
}
```

#### 2. Email Functionality
- Send email to: 9104297686@outlook.com
- Use SMTP with provided credentials
- Email should contain all form data in readable format
- Include company branding and professional formatting

#### 3. Database Storage
- Store all repair requests in MongoDB
- Include timestamp and unique request ID
- Enable future retrieval and management

### Frontend Updates Required
1. Remove mock data imports from RepairRequestForm.jsx
2. Update submitRepairRequest to call real API endpoint
3. Handle real API responses and errors
4. Update success message to show actual request ID

### Environment Variables
```
# Backend .env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=angusyoung1794@gmail.com  
EMAIL_PASSWORD=ifgeqscUC13579
EMAIL_FROM=angusyoung1794@gmail.com
EMAIL_TO=9104297686@outlook.com
```

### Testing Requirements
- Test email delivery with real SMTP
- Verify form submission end-to-end
- Test error handling for email failures
- Validate all form fields are included in email

## Implementation Priority
1. Backend email service setup
2. Repair request API endpoint  
3. Database models and storage
4. Frontend integration updates
5. End-to-end testing