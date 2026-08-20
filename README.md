# Backend Services (Business Layer) 💼

This repository contains the business domain microservices powering the WorkForceHub platform.

## 📦 Services Overview
1. **Department Service (`department-service/`)**: Manages the organizational structure. Built heavily on MySQL.
2. **Employee Service (`employee-service/`)**: Handles employee data and enforces strict rules (like unique emails) and validates against the Department Service using a `@LoadBalanced RestTemplate`.
3. **Document Service (`document-service/`)**: A robust, MongoDB-backed service designed for heavy `multipart/form-data` uploads. It features a manual `MongoConfig` to override stubborn Spring Boot auto-configuration bugs and guarantees isolation of file storage.

## 🚀 How to Run
- These services fetch their configurations dynamically from the `config-server`.
- Start these microservices **only after** the `backend-platform` (Config, Eureka) is fully initialized and healthy.
