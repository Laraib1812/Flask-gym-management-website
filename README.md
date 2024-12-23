# Gym Management System

This is a basic Gym Management System website created using Flask, HTML, and CSS. The project is designed to provide information about a gym, including its mission, team, facilities, and membership plans. It demonstrates the use of Flask for route management, HTML templates for dynamic content, and CSS for styling.

## Features

- **Home Page**: Displays a welcome message and gym highlights.
- **About Us Page**: Shares details about the gym's mission, team, and facilities.
- **Membership Page**: Showcases membership plans and services offered by the gym.

## Purpose

This project serves as a foundational example of a web application that uses Flask to manage routes, dynamic templates for HTML content, and CSS for design and styling. It's suitable for beginners learning web development or for small-scale gym businesses looking for a basic website structure.

## Prerequisites

To run this project locally, you'll need the following:

- Python 3.7 or later
- Flask (install using `pip install flask`)

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/gym-management-system.git
   cd gym-management-system
   ```

2. **Set Up a Virtual Environment** (Optional but Recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Flask**
   ```bash
   pip install flask
   ```

4. **Run the Application**
   ```bash
   python app.py
   ```

5. **Access the Website**
   Open your browser and navigate to `http://127.0.0.1:5000`.

## Project Structure

```
project/
├── app.py                # Main Flask application file
├── static/               # Static files (CSS, images, etc.)
│   └── styles.css        # Styling for the website
├── templates/            # HTML templates
│   ├── index.html        # Home page template
│   ├── about.html        # About Us page template
│   └── membership.html   # Membership page template
└── README.md             # Project documentation
```

## Future Enhancements

- Add a contact form for user inquiries.
- Integrate a database for membership management.
- Make the website responsive for mobile devices.
- Add JavaScript for interactive elements.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute to this project or use it as a starting point for your own web applications!