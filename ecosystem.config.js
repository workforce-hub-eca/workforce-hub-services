module.exports = {
  apps: [
    {
      name: 'department-service',
      script: '/opt/workforce-hub/scripts/start-department-service.sh',
      cwd: '/opt/workforce-hub/apps',
      interpreter: 'none',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      restart_delay: 5000,
      out_file: '/var/log/workforce-hub/department-out.log',
      error_file: '/var/log/workforce-hub/department-error.log',
      env: {
        SPRING_PROFILES_ACTIVE: 'gcp',
        CONFIG_SERVER_URL: 'http://localhost:8888',
        GCP_PROJECT_ID: 'workforce-hub-cloud',
        DEPARTMENT_DB_SECRET_ID: 'department-db-password',
        DEPARTMENT_DB_URL: 'jdbc:mysql://10.20.0.3:3306/workforce_department_db?sslMode=REQUIRED',
        DEPARTMENT_DB_USERNAME: 'department_app',
        DEPARTMENT_EUREKA_URL: 'http://localhost:8761/eureka/'
      }
    }
  ]
};
