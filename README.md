 A personal website built with Flask and Tailwind CSS.

 ## Setup Instructions

 1. **Clone the repository**:
    ```bash
    git clone https://github.com/Nerf-Ivan/Personal_Website.git
    cd Personal_Website
    ```

 2. **Set up Python virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install flask
    ```

 3. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

 4. **Compile Tailwind CSS**:
    ```bash
    npx tailwindcss -i static/css/input.css -o static/css/output.css --watch
    ```

 5. **Run the Flask app**:
    ```bash
    python app.py
    ```

 6. **View the website**:
    Open `http://127.0.0.1:5000` in your browser.