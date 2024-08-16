# Attendance QR Code Mobile Application

This project is a mobile application designed for tracking attendance through QR codes. The application allows instructors to generate QR codes that change periodically, which students use to check in. Once the available attempts are exhausted, the application provides access to content and the classroom.

## Features

- **`QR Code Generation`**: Instructors can generate QR codes that change periodically.
- **`Attendance Registration`**: Students can scan QR codes to register their attendance.
- **`Content Access`**: After using up all the attempts, students gain access to content and classroom resources.
- **`Mobile Compatibility`**: The application is designed to work seamlessly on mobile devices.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone <URL-of-the-repository>
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd attendance-qr-code-app
    ```

3. **Install Dependencies**:

    Run the following commands to install the required dependencies:

    ```bash
    npm install swiper
    npm install @capacitor/toast
    npm install angularx-qrcode --save
    npm install -D @types/qrcode --save
    npm install phonegap-plugin-barcodescanner
    npm install @ionic-native/barcode-scanner --force
    npm install @capacitor/android
    ```

4. **Add Android Platform**:

    ```bash
    npx cap add android
    ```
    
5. **Build the Application**:

    ```bash
    ionic build
    ng build 
    ```
    
6. **Sync the Capacitor Project**:

    ```bash
    npx ionic cap sync
    ```

7. **Run the Application in Ionic Lab**:

    ```bash
    ionic lab
    ```
    
## Configuration

- **Access Credentials**: Configure access credentials and other settings in the .env file or directly in the code as needed.

- **Environment Variables**: Ensure that any necessary environment variables are set for API keys and other configuration settings.

## Usage

- **QR Code Scanning**: Use the mobile application to scan QR codes provided by the instructor.
  
- **Attendance Registration**: Successfully scan the QR code within the allowed attempts to register attendance.
  
- **Content Access**: Once attempts are exhausted, access content and classroom resources as provided.

## Testing

- **Unit Tests**: Implement and run unit tests using your preferred testing framework. Adjust the testing setup according to your project's requirements.

- **Integration Tests**: Ensure that all components and services interact as expected. Verify QR code scanning and attendance registration processes.

## Contributing

1. **Fork the Repository**: Create a personal copy of the repository by forking it on GitHub.
2. **Create a Branch**: Make a new branch for your changes:

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make Changes**: Implement your changes and test them.
4. **Submit a Pull Request**: Push your branch and create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
