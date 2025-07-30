# Esp32-Development-Sim-Tool

## Project Overview
This web application provides an interactive interface for configuring ESP-32 microcontroller pins. The tool assists developers in properly setting up their ESP-32 projects by generating boilerplate code based on their pin configuration selections.

## Key Features
Visual Pin Selection Interface: Interactive representation of all ESP-32 pins with clear labeling

Pin Configuration System:

<br><img width="491" height="550" alt="image" src="https://github.com/user-attachments/assets/2100f568-fa3c-4fe8-9ee8-1ecfa73e0bff" />

## Select from multiple functions (GPIO, I2C, SPI, UART, etc.)

Configure pin modes (digital input/output, analog, etc.)

Add custom names and descriptions for each pin

Code Generation:

<br><img width="450" height="500" alt="image" src="https://github.com/user-attachments/assets/27d4a9ac-6c92-49a4-a83f-f6de98a799c8" />

## Automatic generation of initialization code for individual pins

Complete setup function template for all configured pins

 ## Validation of pin assignments for conflicts


<br><img width="588" height="239" alt="image" src="https://github.com/user-attachments/assets/ece7ba8e-4e1c-4019-8b73-14bf2e33796e" />

<p>Integrated Development Environment:

Built-in terminal for immediate feedback

Code validation before deployment

Support for common ESP-IDF and Arduino frameworks






# ESP32 Pin Configuration Simulator

## Project Overview

A web-based ESP32 pin configuration tool that allows developers to:
- Visually configure ESP32 pins with different modes (GPIO, I2C, SPI, UART)
- Generate Arduino-compatible code templates
- Validate code syntax before deployment
- Test configurations without physical hardware

## Features

- **Interactive Pin Configuration**:
  - Visual representation of ESP32 pins
  - Pin-specific configuration options
  - Custom variable naming and descriptions

- **Code Generation**:
  - Automatic template generation
  - Setup/Loop structure
  - Pin mode initialization

- **Code Validation**:
  - Syntax checking
  - Pin usage verification
  - Common ESP32 function detection

## Installation

### Web Version (No Installation Required)
The application runs directly in modern browsers:
1. Open `index.html` in your preferred browser
2. Start configuring your ESP32 pins

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Flapjacode/Esp32-Sim-Tool.git
cd Esp32-Sim-Tool
```

2. Install dependencies (if using Node.js server):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open in browser:
```bash
http://localhost:3000
```

## Usage

1. **Configure Pins**:
   - Click on any ESP32 pin to select it
   - Choose the appropriate mode from the dropdown
   - Assign a variable name and description

2. **Generate Code**:
   - Click "Generate Template" to create starter code
   - The editor will populate with properly configured pin setups

3. **Validate Code**:
   - Click "Validate Code" to check for common errors
   - The output panel will show validation results

4. **Export Code**:
   - Copy the generated code directly from the editor
   - Paste into your Arduino IDE or PlatformIO project

## Project Structure

```
Esp32-Sim-Tool/
├── index.html          # Main application file
├── README.md           # Project documentation
├── assets/             # Static assets (CSS, JS, images)
│   ├── styles.css      # Additional styles
│   └── scripts.js      # Additional JavaScript
└── package.json        # Node.js dependencies (optional)
```

## Dependencies

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js (optional for local development server)

## License

MIT License - See LICENSE file for details

Ensure all code follows the existing style and conventions

Include appropriate tests for new functionality

Update documentation as needed

Submit a pull request with a clear description of changes

License
This project is licensed under the MIT License - see the LICENSE file for details.

Support
For issues or feature requests, please open an issue in the GitHub repository. For direct inquiries, contact the project maintainers through GitHub.
